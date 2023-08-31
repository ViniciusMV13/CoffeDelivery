import {HomeContainer, InfoContainer, Item1, Item2, Item3, Item4, Itens} from './styles'
import Background from "./../../assets/Background.svg"
import CoffeeImg from "./../../assets/Coffee.svg"
import { Timer, ShoppingCart, Package, Coffee } from 'phosphor-react'

export function Home(){
  return(
    <HomeContainer style={{ backgroundImage: `url(${Background})` }}>
      <InfoContainer>
      <h1>Encontre o café perfeito para qualquer hora do dia</h1>
      <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
      <Itens>
        <Item1><ShoppingCart size={32} weight="fill"/>Compra simples e segura</Item1>
        <Item2><Package size={32} weight="fill"/>Embalagem mantém o café intacto</Item2>
        <Item3><Timer size={32} weight="fill"/>Entrega rápida e rastreada</Item3>
        <Item4><Coffee size={32} weight="fill"/>O café chega fresquinho até você</Item4>
      </Itens>
      </InfoContainer>
      <span>
        <img src={CoffeeImg}/>
      </span>
    </HomeContainer>
  )
}