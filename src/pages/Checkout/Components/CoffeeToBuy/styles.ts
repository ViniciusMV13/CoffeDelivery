import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  background: ${(props) => props.theme['base-card']};

  img {
    width: 64px;
    height: 64px;
  }
`
export const CoffeeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`
export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`
export const CoffeeName = styled.p`
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`
export const CoffeeActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const CoffeePrice = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
  text-align: right;
  color: ${(props) => props.theme['base-text']};
`

export const CoffeeRemove = styled.button`
  border: none;
  display: flex;
  height: 2rem;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
`

export const CoffeeRemoveText = styled.p`
  font-size: 0.75rem;
  line-height: 160%;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};
`
export const CoffeeQuantity = styled.div`
  display: flex;
  height: 2rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
`
export const CoffeeQuantityButton = styled.button`
  width: 14px;
  height: 14px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-button']};
`
export const CoffeeQuantityNumber = styled.p`
  color: ${(props) => props.theme['base-title']};
  font-size: 1rem;
  line-height: 130%;
  text-align: center;
  width: 1.25rem;
`
