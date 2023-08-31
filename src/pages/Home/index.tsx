import {HomeContainer, InfoContainer, Iten1, Itens, Iten2, Iten3, Iten4,} from './styles'
import Background from "./../../assets/Background.svg"

export function Home(){
  return(
    <HomeContainer style={{ backgroundImage: `url(${Background})` }}>
      <InfoContainer>
      <h1>Encontre o café perfeito para qualquer hora do dia</h1>
      <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
      <Itens>
        <Iten1>Compra simples e segura</Iten1>
        <Iten2>Entrega rápida e rastreada</Iten2>
        <Iten3>Embalagem mantém o café intacto</Iten3>
        <Iten4>O café chega fresquinho até você</Iten4>
      </Itens>
      </InfoContainer>
    </HomeContainer>
  )
}