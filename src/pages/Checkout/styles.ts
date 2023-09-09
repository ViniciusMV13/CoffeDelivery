import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  padding: 2.5rem 20rem;
  justify-content: space-between;
`

export const CompleteYourOrder = styled.div``

export const ContainerTitle = styled.p`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 15px;
`

export const CompleteYourOrderActions = styled.p`
  display: flex;
  width: 40rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`

export const AdressAndPaymentInfo = styled.div`
  display: flex;
  padding: 2.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`
export const InfoHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`
export const InfoHeaderTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  flex: 1 0 0;
`
export const InfoHeaderTitle = styled.p`
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`
export const InfoHeaderSubtitle = styled.p`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};
`
export const AdressForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

const AdressInput = styled.input`
  display: flex;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
`
export const CepInput = styled(AdressInput)`
  width: 12.5rem;
`

export const RuaInput = styled(AdressInput)`
  align-self: stretch;
`

export const NumeroInput = styled(AdressInput)`
  width: 12.5rem;
`

export const BairroInput = styled(AdressInput)`
  width: 12.5rem;
`
export const ComplementoInput = styled(AdressInput)`
  flex: 1 0 0;
`
export const CidadeInput = styled(AdressInput)`
  flex: 1 0 0;
`

export const UFInput = styled(AdressInput)`
  width: 5rem;
`

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.75rem;
`

export const PaymentWay = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  flex: 1 0 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  &:hover {
    cursor: pointer;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  }
`

export const PaymentName = styled.p`
  font-size: 0.75rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
`
export const OrderConfirmation = styled.div``
export const OrderConfirmationCard = styled.div`
  width: 28rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};
`
export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`
export const PricesTextFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`
export const PricesDescription = styled.p`
  text-align: right;
  color: ${(props) => props.theme['base-text']};
  line-height: 130%;
  font-size: 0.875rem;
`

export const PricesNumber = styled.p`
  text-align: right;
  color: ${(props) => props.theme['base-text']};
  line-height: 130%;
`
export const FinalPrice = styled.p`
  text-align: right;
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
`
export const OrderConfirmationButton = styled.button`
  display: flex;
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
`
export const OrderConfirmationButtonText = styled.p`
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
`
