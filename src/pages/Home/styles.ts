import styled from 'styled-components'

export const HomeContainer = styled.div`

`

export const Intro = styled.div`
width: 100%;
height: 34rem;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
padding: 5.75rem 20rem;
display: flex;
justify-content: space-between;

img{
  height: 22.5rem;

}
` 
export const InfoContainer = styled.div`
width: 36.75rem;
h1{
  font-family: 'Baloo 2';
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: ${(props) => props.theme['base-title']};
}
h3{
  font-size: 1.25rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-subtitle']};
}
`
export const Itens = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 4.125rem;

`

export const Item = styled.div`
color: ${(props) => props.theme['base-text']};
margin-bottom: 1.250rem;
width: 50%;
font-weight: 400;
font-size: 1rem;
display: flex;
justify-content: left;
align-items: center;
gap: 0.75rem;
svg {
  padding: 0.5rem;
  border-radius: 999px;
  color: white;
}
`
export const CoffeeListTitle = styled.div`
width: 100%;
height: 100%;
padding: 5.75rem 20rem;
`
export const CoffeeList = styled.div`
width: 100%;
height: 100%;
padding: 5.75rem 0;
display: flex;
justify-content: space-between;

`