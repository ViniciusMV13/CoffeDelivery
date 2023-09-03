import styled from 'styled-components'

export const CoffeeContainer = styled.div`
display: flex;
justify-content: center;
align-items: baseline;
width: 16rem;
height: 19.375rem;
background: ${(props) => props.theme['base-card']};
border-radius: 6px 36px 6px 36px ;
`
export const BuyCoffee = styled.div`

`

export const CoffeeInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{ 
  width: 120px;
  height: 120px;
}
`
export const CoffeeImg = styled.img`

`

export const CoffeeTag = styled.p`

`
export const CoffeeName = styled.p`

`
export const CoffeeDescription = styled.p`

`

