import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Aside, Container } from "./styles";
import { useCart } from "../../hooks/useCart";

export function Header() {

    const { cart } = useCart()

    return (
        <Container>
            <Link to="/">
                <img src="/logo.svg" alt="" />
            </Link>


            <Aside>
                <div>
                    <MapPin size={22} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </div>

                <Link to={`checkout`} aria-disabled={cart.length === 0}>
                    <ShoppingCart size={22} weight="fill" />
                    {cart.length > 0 ? <span>{cart.length}</span> : null}
                </Link>
            </Aside>
        </Container>
    )
}