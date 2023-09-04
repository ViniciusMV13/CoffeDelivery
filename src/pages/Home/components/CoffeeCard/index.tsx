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
  CoffeeValue,
} from "./style";
import ExpressoTradicional from "./../../../../assets/CoffeeList/Expresso_tradicional.png";
import {Minus, Plus, ShoppingCart} from 'phosphor-react'
import { defaultTheme } from "../../../../styles/themes/default";

export function CoffeeCard() {
  return (
    <CoffeeContainer>
      <CoffeeInfo>
        <img src={ExpressoTradicional} alt="" />
        <CoffeeTag>TRADICIONAL</CoffeeTag>
        <CoffeeName>Expresso Tradicional</CoffeeName>
        <CoffeeDescription>
          O tradicional cafe feito com agua quente e graos moidos
        </CoffeeDescription>
      </CoffeeInfo>

      <BuyCoffee>
        <CoffeePrice>
          <CoffeeCoin>R$</CoffeeCoin>
          <CoffeeValue>9,90</CoffeeValue>
        </CoffeePrice>
        <BuyActions>
          <CoffeeQuantity>
            <CoffeeQuantityButton>
             <Minus size={14} style={{color: defaultTheme['purple']}}/>
            </CoffeeQuantityButton>
            <CoffeeQuantityNumber>0</CoffeeQuantityNumber>
            <CoffeeQuantityButton>
              <Plus size={14} style={{color: defaultTheme['purple']}}/>
            </CoffeeQuantityButton>
          </CoffeeQuantity>
          <CoffeeCartAdd><ShoppingCart size={22} weight="fill" style={{color: defaultTheme['base-card']}}/></CoffeeCartAdd>
        </BuyActions>
      </BuyCoffee>
    </CoffeeContainer>
  );
}
