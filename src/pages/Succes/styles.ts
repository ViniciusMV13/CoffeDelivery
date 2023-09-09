import styled from 'styled-components'

export const SuccesContainer = styled.div`
  padding: 5rem 20rem;
  display: flex;
  justify-content: space-between;
`
export const SuccesTextContainer = styled.div`
  gap: 0.25rem;
`
export const SuccesInfoContainer = styled.div`
  background: ${(props) => props.theme.background};
  margin-top: 2.25rem;
  display: flex;
  width: 32.875rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  border-radius: 6px 36px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
export const SuccesInfoFrame = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  label {
    display: flex;
    gap: 4px;
  }
`

export const SuccesInfoDescriptionFrame = styled.div``

export const OrderConfirmationText = styled.p`
  color: ${(props) => props.theme['yellow-dark']};
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  line-height: 130%;
`
export const OrderConfirmationTextDescription = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  line-height: 130%;
`
export const SuccesInfoValue = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-weight: 700;
  line-height: 130%;
`
export const SuccesInfoDescription = styled.p`
  color: ${(props) => props.theme['base-text']};
  line-height: 130%;
`

export const IllustrationContainer = styled.div`
  margin-top: 6.25rem;
`

const Icon = styled.div`
  padding: 0.5rem;
  border-radius: 999px;
  svg {
    display: flex;
  }
`

export const MapIcon = styled(Icon)`
  background: ${(props) => props.theme.purple};
`
export const TimerIcon = styled(Icon)`
  background: ${(props) => props.theme.yellow};
`
export const PaymentIcon = styled(Icon)`
  background: ${(props) => props.theme['yellow-dark']};
`
