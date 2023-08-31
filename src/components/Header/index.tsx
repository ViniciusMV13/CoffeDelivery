import {Cart, Counter, HeaderContainer, Location} from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffeeDelivery from '../../assets/LogoCoffeeDelivery.svg';


export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={LogoCoffeeDelivery} alt="" />
      </span>
      <nav>
        <Location>
        <MapPin size={22} weight="fill"/>
        <p>Porto Alegre, RS</p>
        </Location>
        <Cart>
          <ShoppingCart size={38} weight="fill"/>
          <Counter>
            <p>3</p>
          </Counter>
        </Cart>
        
      </nav>
    </HeaderContainer>
  )
}