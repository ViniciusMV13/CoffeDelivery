import { Coffee, Package, Timer, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from 'styled-components'
import { Heading, InfoContainer, ShopInfoContainer, TextInfoContainer, CoffeeListContainer } from "./styles";
import { Card } from "../../components/Card";
import { coffees } from "../../../src/data.json";

export function Home() {

    const theme = useTheme()
    return (
        <div>

            <InfoContainer>

                <ShopInfoContainer>

                    <div>

                        <Heading>
                            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                            <span>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</span>
                        </Heading>

                        <TextInfoContainer >

                            <div>
                                <ShoppingCart
                                    weight="fill"
                                    size={32}
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors['yellow-dark'] }} />

                                <p>Compra simples e segura</p>
                            </div>

                            <div>
                                <Package
                                    weight="fill"
                                    size={32}
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors['base-subtitle'] }} />
                                <p>Compra simples e segura</p>
                            </div>
                            <div>
                                <Timer
                                    weight="fill"
                                    size={32}
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors['yellow'] }} />
                                <p>Compra simples e segura</p>
                            </div>
                            <div>
                                <Coffee
                                    weight="fill"
                                    size={32}
                                    color={theme.colors.background}
                                    style={{ backgroundColor: theme.colors['purple'] }} />
                                <p>Compra simples e segura</p>
                            </div>
                        </TextInfoContainer >

                    </div>

                    <img src="images\hero.svg" alt="" />

                </ShopInfoContainer>

                <img src="images\hero-bg.svg" id="hero-bg" alt="" />

            </InfoContainer>

            <CoffeeListContainer>
                <h2>Nossos cafés</h2>
                <div>
                    {coffees.map((coffee) => (
                        <Card key={coffee.id} coffee={coffee} />
                    ))}
                </div>
            </CoffeeListContainer>


        </div>

    )
}