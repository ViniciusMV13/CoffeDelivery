import {
  BuyActions,
  BuyCoffee,
  CoffeeCartAdd,
  CoffeeCoin,
  CoffeeContainer,
  CoffeeDescription,
  CoffeeInfo,
  CoffeeName,
  CoffeePrice,
  CoffeeQuantity,
  CoffeeQuantityButton,
  CoffeeQuantityNumber,
  CoffeeTag,
  CoffeeTagContainer,
  CoffeeValue,
} from './style'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import { useState } from 'react'

type TQuantityButtonType = 'add' | 'remove'

type TCoffee = {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  imgPath: string
}

interface ICoffeeProps {
  coffee: TCoffee
}

export function CoffeeCard({ coffee }: ICoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(coffee.price)

  function handleQuantity(type: TQuantityButtonType) {
    if (type === 'remove') {
      if (quantity > 1) {
        setQuantity(quantity - 1)
      }
      return
    }
    setQuantity(quantity + 1)
  }
  return (
    <CoffeeContainer>
      <CoffeeInfo>
        <img src={coffee.imgPath} alt="" />
        <CoffeeTagContainer>
          {coffee.tags.map((tags) => (
            <CoffeeTag key={tags}>{tags}</CoffeeTag>
          ))}
        </CoffeeTagContainer>
        <CoffeeName>{coffee.name}</CoffeeName>
        <CoffeeDescription>{coffee.description}</CoffeeDescription>
      </CoffeeInfo>

      <BuyCoffee>
        <CoffeePrice>
          <CoffeeCoin>R$</CoffeeCoin>
          <CoffeeValue>{priceFormatted}</CoffeeValue>
        </CoffeePrice>
        <BuyActions>
          <CoffeeQuantity>
            <CoffeeQuantityButton onClick={() => handleQuantity('remove')}>
              <Minus size={14} style={{ color: defaultTheme.purple }} />
            </CoffeeQuantityButton>
            <CoffeeQuantityNumber>{quantity}</CoffeeQuantityNumber>
            <CoffeeQuantityButton onClick={() => handleQuantity('add')}>
              <Plus size={14} style={{ color: defaultTheme.purple }} />
            </CoffeeQuantityButton>
          </CoffeeQuantity>
          <CoffeeCartAdd>
            <ShoppingCart
              size={22}
              weight="fill"
              style={{ color: defaultTheme['base-card'] }}
            />
          </CoffeeCartAdd>
        </BuyActions>
      </BuyCoffee>
    </CoffeeContainer>
  )
}
