import {Cart, HeaderContainer, Location} from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffeDelivery from '../../assets/LogoCoffeDelivery.svg';


export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={LogoCoffeDelivery} alt="" />
      </span>
      <nav>
        <Location>
        <MapPin size={22} weight="fill"/>
        <p>Porto Alegre, RS</p>
        </Location>
        <div>
        <Cart>
          <ShoppingCart size={22} weight="fill"/>
          
        </Cart>
        <p>0</p>
        </div>
      </nav>
    </HeaderContainer>
  )
}