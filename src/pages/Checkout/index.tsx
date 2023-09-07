import { defaultTheme } from "../../styles/themes/default";
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
} from "./styles";

import { CurrencyDollar, MapPinLine } from "phosphor-react";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteYourOrder>
        Complete seu pedido
        <CompleteYourOrderActions>
          <AdressAndPaymentInfo>
            <InfoHeader>
              <span>
                <MapPinLine
                  size={22}
                  style={{ color: defaultTheme["yellow-dark"] }}
                />
              </span>
              <InfoHeaderTexts>
                <InfoHeaderTitle>
                  Endereço de Entrega
                </InfoHeaderTitle>
                <InfoHeaderSubtitle>
                  Informe o endereço onde deseja receber seu pedido
                </InfoHeaderSubtitle>
              </InfoHeaderTexts>
            </InfoHeader>
            <CepInput id="Cep"
            placeholder="CEP"/>
            <RuaInput id="Rua"
            placeholder="Rua"/>
            <InfoContainer>
              <NumeroInput id="Numero"
              placeholder="Número"/>
              <ComplementoInput id="Complemento" placeholder="Complemento"/>
            </InfoContainer>
            <InfoContainer>
              <BairroInput id="Bairro"
              placeholder="Bairro"/>
              <CidadeInput id="Cidade"
              placeholder="Cidade"/>
              <UFInput id="UF"
              placeholder="UF"/>
            </InfoContainer>
          </AdressAndPaymentInfo>
          <AdressAndPaymentInfo>
            <InfoHeader>
              <span>
                <CurrencyDollar size={22} style={{ color: defaultTheme["purple"] }}/>
              </span>
              <InfoHeaderTexts>
                <InfoHeaderTitle>Pagamento</InfoHeaderTitle>
                <InfoHeaderSubtitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</InfoHeaderSubtitle>
              </InfoHeaderTexts>
            </InfoHeader>
            <InfoContainer>
              <PaymentWay value="CARTÃO DE CREDITO"></PaymentWay>
              <PaymentWay>CARTÃO DE DEBITO</PaymentWay>
              <PaymentWay>DINHEIRO</PaymentWay>
            </InfoContainer>
          </AdressAndPaymentInfo>
        </CompleteYourOrderActions>
      </CompleteYourOrder>
      <OrderConfirmation></OrderConfirmation>
    </CheckoutContainer>
  );
}
