import { BuyCoffee, CoffeeCartAdd, CoffeeCoin, CoffeeContainer, CoffeeDescription, CoffeeInfo, CoffeeName, CoffeePrice, CoffeeQuantity, CoffeeQuantityButton, CoffeeQuantityNumber, CoffeeTag, CoffeeValue } from "./style";
import ExpressoTradicional from './../../../../assets/CoffeeList/Expresso_tradicional.png'

export function CoffeeCard() {
  return(
    <CoffeeContainer>
      <CoffeeInfo>
        <img src={ExpressoTradicional} alt="" />
        <CoffeeTag>TRADICIONAL</CoffeeTag>
        <CoffeeName>Expresso Tradicional</CoffeeName>
        <CoffeeDescription>O tradicional cafe feito com agua quente e graos moidos</CoffeeDescription>
      </CoffeeInfo>
      <BuyCoffee>
        <CoffeePrice>
        <CoffeeCoin>R$</CoffeeCoin>
        <CoffeeValue>9,90</CoffeeValue>
        </CoffeePrice>
        <CoffeeQuantity>
          <CoffeeQuantityButton><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.53125 7C1.53125 6.63756 1.82506 6.34375 2.1875 6.34375H11.8125C12.1749 6.34375 12.4688 6.63756 12.4688 7C12.4688 7.36244 12.1749 7.65625 11.8125 7.65625H2.1875C1.82506 7.65625 1.53125 7.36244 1.53125 7Z" fill="#8047F8"/>
</svg></CoffeeQuantityButton>
          <CoffeeQuantityNumber>0</CoffeeQuantityNumber>
          <CoffeeQuantityButton><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.53125 7C1.53125 6.63756 1.82506 6.34375 2.1875 6.34375H11.8125C12.1749 6.34375 12.4688 6.63756 12.4688 7C12.4688 7.36244 12.1749 7.65625 11.8125 7.65625H2.1875C1.82506 7.65625 1.53125 7.36244 1.53125 7Z" fill="#8047F8"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.53125C7.36244 1.53125 7.65625 1.82506 7.65625 2.1875V11.8125C7.65625 12.1749 7.36244 12.4688 7 12.4688C6.63756 12.4688 6.34375 12.1749 6.34375 11.8125V2.1875C6.34375 1.82506 6.63756 1.53125 7 1.53125Z" fill="#8047F8"/>
</svg></CoffeeQuantityButton>
        </CoffeeQuantity>
        <CoffeeCartAdd></CoffeeCartAdd>
      </BuyCoffee>
    </CoffeeContainer>
  )
}