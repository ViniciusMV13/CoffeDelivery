import { useCart } from '../../hooks/useCart'
import { defaultTheme } from '../../styles/themes/default'
import { formatMoney } from '../../utils/formatMoney'
import { CoffeeToBuy } from './Components/CoffeeToBuy'
import { Divider } from './Components/Divider'
import {
  AdressAndPaymentInfo,
  InfoHeader,
  InfoHeaderSubtitle,
  InfoHeaderTexts,
  InfoHeaderTitle,
  BairroInput,
  CepInput,
  CheckoutContainer,
  CidadeInput,
  ComplementoInput,
  CompleteYourOrder,
  CompleteYourOrderActions,
  InfoContainer,
  NumeroInput,
  OrderConfirmation,
  RuaInput,
  UFInput,
  PaymentWay,
  PaymentName,
  ContainerTitle,
  OrderConfirmationCard,
  PricesContainer,
  PricesTextFrame,
  PricesDescription,
  PricesNumber,
  FinalPrice,
  OrderConfirmationButton,
  OrderConfirmationButtonText,
  CoffeeShowContainer,
} from './styles'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

const deliveryPrice = 8.9
export function Checkout() {
  const { cartItems, cartItemsTotal } = useCart()

  const cartTotal = deliveryPrice + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(deliveryPrice)
  return (
    <CheckoutContainer>
      <CompleteYourOrder>
        <ContainerTitle>Complete seu pedido</ContainerTitle>
        <CompleteYourOrderActions>
          <AdressAndPaymentInfo>
            <InfoHeader>
              <span>
                <MapPinLine
                  size={22}
                  style={{ color: defaultTheme['yellow-dark'] }}
                />
              </span>
              <InfoHeaderTexts>
                <InfoHeaderTitle>Endereço de Entrega</InfoHeaderTitle>
                <InfoHeaderSubtitle>
                  Informe o endereço onde deseja receber seu pedido
                </InfoHeaderSubtitle>
              </InfoHeaderTexts>
            </InfoHeader>
            <CepInput id="Cep" placeholder="CEP" />
            <RuaInput id="Rua" placeholder="Rua" />
            <InfoContainer>
              <NumeroInput id="Numero" placeholder="Número" />
              <ComplementoInput id="Complemento" placeholder="Complemento" />
            </InfoContainer>
            <InfoContainer>
              <BairroInput id="Bairro" placeholder="Bairro" />
              <CidadeInput id="Cidade" placeholder="Cidade" />
              <UFInput id="UF" placeholder="UF" />
            </InfoContainer>
          </AdressAndPaymentInfo>
          <AdressAndPaymentInfo>
            <InfoHeader>
              <span>
                <CurrencyDollar
                  size={22}
                  style={{ color: defaultTheme.purple }}
                />
              </span>
              <InfoHeaderTexts>
                <InfoHeaderTitle>Pagamento</InfoHeaderTitle>
                <InfoHeaderSubtitle>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </InfoHeaderSubtitle>
              </InfoHeaderTexts>
            </InfoHeader>
            <InfoContainer>
              <PaymentWay>
                <input type="radio" />
                <CreditCard size={16} style={{ color: defaultTheme.purple }} />
                <PaymentName>CARTÃO DE CREDITO</PaymentName>
              </PaymentWay>
              <PaymentWay>
                <input type="radio" />
                <Bank size={16} style={{ color: defaultTheme.purple }} />
                <PaymentName>CARTÃO DE DEBITO</PaymentName>
              </PaymentWay>
              <PaymentWay>
                <input type="radio" />
                <Money size={16} style={{ color: defaultTheme.purple }} />
                <PaymentName>DINHEIRO</PaymentName>
              </PaymentWay>
            </InfoContainer>
          </AdressAndPaymentInfo>
        </CompleteYourOrderActions>
      </CompleteYourOrder>
      <OrderConfirmation>
        <ContainerTitle>Cafés selecionados</ContainerTitle>

        {cartItemsTotal ? (
          <OrderConfirmationCard>
            {cartItems.map((Item) => (
              <CoffeeShowContainer key={Item.id}>
                <CoffeeToBuy key={Item.id} coffee={Item} />
                <Divider key={Item.name} />
              </CoffeeShowContainer>
            ))}

            <PricesContainer>
              <PricesTextFrame>
                <PricesDescription>Total de Itens</PricesDescription>
                <PricesNumber>R$ {formattedItemsTotal}</PricesNumber>
              </PricesTextFrame>
              <PricesTextFrame>
                <PricesDescription>Entrega</PricesDescription>
                <PricesNumber>R$ {formattedDeliveryPrice}</PricesNumber>
              </PricesTextFrame>
              <PricesTextFrame>
                <FinalPrice>Total</FinalPrice>
                <FinalPrice>R$ {formattedCartTotal}</FinalPrice>
              </PricesTextFrame>
            </PricesContainer>

            <OrderConfirmationButton>
              <OrderConfirmationButtonText>
                CONFIRMAR PEDIDO
              </OrderConfirmationButtonText>
            </OrderConfirmationButton>
          </OrderConfirmationCard>
        ) : (
          <OrderConfirmationCard>
            <h3>Nenhum café selecionado :c</h3>
          </OrderConfirmationCard>
        )}
      </OrderConfirmation>
    </CheckoutContainer>
  )
}
