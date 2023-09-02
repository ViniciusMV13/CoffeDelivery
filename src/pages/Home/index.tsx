import {HomeContainer, Intro, InfoContainer, Item, Itens, CoffeeList} from './styles'
import Background from "./../../assets/Background.svg"
import CoffeeImg from "./../../assets/Coffee.svg"
import { Timer, ShoppingCart, Package, Coffee } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

export function Home(){
  return(
    <HomeContainer>
    <Intro style={{ backgroundImage: `url(${Background})` }}>
      <InfoContainer>
      <h1>Encontre o café perfeito para qualquer hora do dia</h1>
      <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
      <Itens>
        <Item><ShoppingCart size={32} weight="fill" style={{background: defaultTheme['yellow-dark']}}/>Compra simples e segura</Item>
        <Item><Package size={32} weight="fill" style={{background: defaultTheme['base-text']}}/>Embalagem mantém o café intacto</Item>
        <Item><Timer size={32} weight="fill" style={{background: defaultTheme['yellow']}}/>Entrega rápida e rastreada</Item>
        <Item><Coffee size={32} weight="fill" style={{background: defaultTheme['purple']}}/>O café chega fresquinho até você</Item>
      </Itens>
      </InfoContainer>
      <span>
        <img src={CoffeeImg}/>
      </span>
    </Intro>
    <CoffeeList>
      <h2>Nossos cafés</h2>
    </CoffeeList>
    </HomeContainer>
  )
}