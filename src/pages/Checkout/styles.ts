import styled from 'styled-components'

export const CheckoutContainer = styled.div`
display: flex;
padding: 2.5rem 20rem;
justify-content: space-between;
`

export const PaymentInfo = styled.div`

`
export const CompleteYourOrder = styled.p`

`

export const CompleteYourOrderActions = styled.p`
display: flex;
width: 40rem;
flex-direction: column;
align-items: flex-start;
gap: 0.75rem;
`

export const AdressInfo = styled.div`
display: flex;
padding: 2.25rem;
flex-direction: column;
align-items: flex-start;
gap: 2rem;
align-self: stretch;
border-radius: 6px;
background:${(props) => props.theme['base-card']} ;
`
export const AdressInfoHeader = styled.div`
display: flex;
align-items: flex-start;
gap: 0.5rem;
align-self: stretch;
`
export const AdressInfoHeaderTexts = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2px;
flex: 1 0 0;
`
export const AdressInfoHeaderTitle = styled.p`
font-size: 1rem;
line-height: 130%;
color: ${(props) => props.theme['base-subtitle']};
`
export const AdressInfoHeaderSubtitle = styled.p`
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

`
export const OrderConfirmation = styled.div`
width: 28rem;
padding: 2.5rem;
display: flex;
flex-direction: column;
gap: 1.5rem;
border-radius: 6px 44px;
background: ${(props) => props.theme['base-card']};
`