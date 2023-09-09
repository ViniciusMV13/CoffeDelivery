import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  IllustrationContainer,
  MapIcon,
  OrderConfirmationText,
  OrderConfirmationTextDescription,
  PaymentIcon,
  SuccesContainer,
  SuccesInfoContainer,
  SuccesInfoDescription,
  SuccesInfoDescriptionFrame,
  SuccesInfoFrame,
  SuccesInfoValue,
  SuccesTextContainer,
  TimerIcon,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'
import Illustration from '../../assets/Illustration.svg'

export function Succes() {
  return (
    <SuccesContainer>
      <SuccesTextContainer>
        <OrderConfirmationText>Uhu! Pedido confirmado</OrderConfirmationText>
        <OrderConfirmationTextDescription>
          Agora é só aguardar que logo o café chegará ate você
        </OrderConfirmationTextDescription>
        <SuccesInfoContainer>
          <SuccesInfoFrame>
            <MapIcon>
              <MapPin size={16} style={{ color: defaultTheme.white }} />
            </MapIcon>
            <SuccesInfoDescriptionFrame>
              <label>
                <SuccesInfoDescription>Entrega em</SuccesInfoDescription>
                <SuccesInfoValue>Rua arroz feijao</SuccesInfoValue>
              </label>
              <SuccesInfoDescription>Bairro das flores</SuccesInfoDescription>
            </SuccesInfoDescriptionFrame>
          </SuccesInfoFrame>

          <SuccesInfoFrame>
            <TimerIcon>
              <Timer size={16} style={{ color: defaultTheme.white }} />
            </TimerIcon>
            <SuccesInfoDescriptionFrame>
              <SuccesInfoDescription>Previsao de entrega</SuccesInfoDescription>
              <SuccesInfoValue>20 min - 30 min</SuccesInfoValue>
            </SuccesInfoDescriptionFrame>
          </SuccesInfoFrame>

          <SuccesInfoFrame>
            <PaymentIcon>
              <CurrencyDollar size={16} style={{ color: defaultTheme.white }} />
            </PaymentIcon>
            <SuccesInfoDescriptionFrame>
              <SuccesInfoDescription>
                Pagamento na entrega
              </SuccesInfoDescription>
              <SuccesInfoValue>Cartão de Credito</SuccesInfoValue>
            </SuccesInfoDescriptionFrame>
          </SuccesInfoFrame>
        </SuccesInfoContainer>
      </SuccesTextContainer>
      <IllustrationContainer>
        <img src={Illustration} alt="" />
      </IllustrationContainer>
    </SuccesContainer>
  )
}
