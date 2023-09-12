import {
  CoffeeActions,
  CoffeeContainer,
  CoffeeDetails,
  CoffeeInfo,
  CoffeeName,
  CoffeePrice,
  CoffeeRemove,
  CoffeeRemoveText,
  CoffeeQuantityButton,
  CoffeeQuantityNumber,
  CoffeeQuantity,
} from './styles'
import { defaultTheme } from '../../../../styles/themes/default'
import { Minus, Plus, Trash } from 'phosphor-react'
import { ICartItem } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'

interface ICoffeCartCardProps {
  coffee: ICartItem
}

export function CoffeeToBuy({ coffee }: ICoffeCartCardProps) {
  const totalPrice = coffee.price * coffee.quantity
  const priceFormatted = formatMoney(totalPrice)
  return (
    <CoffeeContainer>
      <CoffeeInfo>
        <img src={coffee.imgPath} alt="" />
        <CoffeeDetails>
          <CoffeeName>{coffee.name}</CoffeeName>
          <CoffeeActions>
            <CoffeeQuantity>
              <CoffeeQuantityButton>
                <Minus size={14} style={{ color: defaultTheme.purple }} />
              </CoffeeQuantityButton>
              <CoffeeQuantityNumber>{coffee.quantity}</CoffeeQuantityNumber>
              <CoffeeQuantityButton>
                <Plus size={14} style={{ color: defaultTheme.purple }} />
              </CoffeeQuantityButton>
            </CoffeeQuantity>
            <CoffeeRemove>
              <Trash size={16} style={{ color: defaultTheme.purple }} />
              <CoffeeRemoveText>REMOVER</CoffeeRemoveText>
            </CoffeeRemove>
          </CoffeeActions>
        </CoffeeDetails>
      </CoffeeInfo>
      <CoffeePrice>{priceFormatted}</CoffeePrice>
    </CoffeeContainer>
  )
}
