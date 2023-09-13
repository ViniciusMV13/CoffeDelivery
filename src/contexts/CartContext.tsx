import { ReactNode, createContext, useState } from 'react'
import { TCoffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface ICartItem extends TCoffee {
  quantity: number
}

type TQuantityButtonType = 'add' | 'remove'

interface CartContextType {
  cartItems: ICartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: ICartItem) => void
  handleQuantityCoffeeCart: (
    coffee: ICartItem,
    quantityButtonType: TQuantityButtonType,
  ) => void
  handleRemoveCoffeeOfList: (coffee: ICartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([])

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)
  console.log(cartItems)
  function addCoffeeToCart(coffee: ICartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function handleQuantityCoffeeCart(
    coffee: ICartItem,
    quantityButtonType: TQuantityButtonType,
  ) {
    const coffeeInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )
    const newCart = produce(cartItems, (draft) => {
      if (quantityButtonType === 'add') {
        draft[coffeeInCart].quantity += 1
      } else if (coffee.quantity >= 2) {
        draft[coffeeInCart].quantity -= 1
      }
    })
    setCartItems(newCart)
  }

  function handleRemoveCoffeeOfList(coffee: ICartItem) {
    const coffeeToDelete = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )
    const newCart = cartItems.filter(
      (item) => item !== cartItems[coffeeToDelete],
    )
    setCartItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        cartItemsTotal,
        handleQuantityCoffeeCart,
        handleRemoveCoffeeOfList,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
