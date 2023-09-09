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
import ExpressoTradicional from './../../../../assets/CoffeeList/Expresso_tradicional.png'
import { defaultTheme } from '../../../../styles/themes/default'
import { Minus, Plus, Trash } from 'phosphor-react'

export function CoffeeToBuy() {
  return (
    <CoffeeContainer>
      <CoffeeInfo>
        <img src={ExpressoTradicional} alt="" />
        <CoffeeDetails>
          <CoffeeName>Expresso Tradicional</CoffeeName>
          <CoffeeActions>
            <CoffeeQuantity>
              <CoffeeQuantityButton>
                <Minus size={14} style={{ color: defaultTheme.purple }} />
              </CoffeeQuantityButton>
              <CoffeeQuantityNumber>0</CoffeeQuantityNumber>
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
      <CoffeePrice>R$ 9,90</CoffeePrice>
    </CoffeeContainer>
  )
}
