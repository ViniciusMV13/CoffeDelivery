import { Cart, Counter, HeaderContainer, HeaderFixed, Location } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffeeDelivery from '../../assets/LogoCoffeeDelivery.svg'
import { useCart } from '../../hooks/useCart'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderFixed>
      <HeaderContainer>
        <NavLink to="/">
          <span>
            <img src={LogoCoffeeDelivery} alt="" />
          </span>
        </NavLink>

        <nav>
          <Location>
            <MapPin size={22} weight="fill" />
            <p>Porto Alegre, RS</p>
          </Location>
          <NavLink to="/checkout">
            <Cart>
              <ShoppingCart size={38} weight="fill" />
              {cartQuantity >= 1 && (
                <Counter>
                  <p>{cartQuantity}</p>
                </Counter>
              )}
            </Cart>
          </NavLink>
        </nav>
      </HeaderContainer>
    </HeaderFixed>
  )
}
