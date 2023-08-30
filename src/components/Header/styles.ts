import styled from 'styled-components'

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: space-between;

padding: 2rem 10rem;


nav{
 gap: 0.75rem;
 display: flex;
}
`
export const Location = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: ${(props) => props.theme['purple-light']};
color: ${(props) => props.theme['purple-dark']};
padding: 0.5rem 0.5rem;
border-radius: 6px;

svg{
  color: ${(props) => props.theme['purple']};
}

p{
  font-size: 0.875rem;
}

`

export const Cart = styled.div`
div{
  display: flex;
  align-items: center;
justify-content: center;
}
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem 0.5rem;
background: ${(props) => props.theme['yellow-light']};
color: ${(props) => props.theme['yellow-dark']};
`
