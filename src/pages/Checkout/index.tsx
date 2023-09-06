import { defaultTheme } from "../../styles/themes/default";
import {
  AdressInfo,
  AdressInfoHeader,
  AdressInfoHeaderSubtitle,
  AdressInfoHeaderTexts,
  AdressInfoHeaderTitle,
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
  PaymentInfo,
  RuaInput,
  UFInput,
} from "./styles";

import { MapPinLine } from "phosphor-react";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteYourOrder>
        Complete seu pedido
        <CompleteYourOrderActions>
          <AdressInfo>
            <AdressInfoHeader>
              <span>
                <MapPinLine
                  size={22}
                  style={{ color: defaultTheme["yellow-dark"] }}
                />
              </span>
              <AdressInfoHeaderTexts>
                <AdressInfoHeaderTitle>
                  Endereço de Entrega
                </AdressInfoHeaderTitle>
                <AdressInfoHeaderSubtitle>
                  Informe o endereço onde deseja receber seu pedido
                </AdressInfoHeaderSubtitle>
              </AdressInfoHeaderTexts>
            </AdressInfoHeader>
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
          </AdressInfo>
          <PaymentInfo></PaymentInfo>
        </CompleteYourOrderActions>
      </CompleteYourOrder>
      <OrderConfirmation></OrderConfirmation>
    </CheckoutContainer>
  );
}
