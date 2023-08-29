import styled from 'styled-components'

export const LayoutContainer = styled.div `
height: auto;
width: auto;
background: ${(props) => props.theme['base-card']};

display: flex;
flex-direction: column;
`