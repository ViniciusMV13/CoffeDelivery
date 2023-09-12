import { ReactNode, createContext, useState } from 'react'
import { TCoffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface ICartItem extends TCoffee {
  quantity: number
}

interface CartContextType {
  cartItems: ICartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: ICartItem) => void
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

  return (
    <CartContext.Provider
      value={{ cartItems, addCoffeeToCart, cartQuantity, cartItemsTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}
