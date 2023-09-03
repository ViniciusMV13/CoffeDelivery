import { BuyCoffee, CoffeeContainer, CoffeeDescription, CoffeeInfo, CoffeeName } from "./style";
import ExpressoTradicional from './../../../../assets/CoffeeList/Expresso_tradicional.png'

export function CoffeeCard() {
  return(
    <CoffeeContainer>
      <CoffeeInfo>
        <img src={ExpressoTradicional} alt="" />
        <CoffeeName>Expresso Tradicional</CoffeeName>
        <CoffeeDescription>O tradicional cafe feito com agua quente e graos moidos</CoffeeDescription>
      </CoffeeInfo>
      <BuyCoffee></BuyCoffee>
    </CoffeeContainer>
  )
}