import styled from "styled-components"
import { mixins } from "../../styles/mixins"

export const Container = styled.header`

display: flex;
justify-content: space-between;
align-items: center;


padding: 2rem 20px;
margin: 0 auto;
max-width: 1160px;
`
export const Aside = styled.aside`
display: flex;
gap: 0.75rem;
height: 38px;

div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    gap: 4px;
    background: ${(props) => props.theme.colors['purple-light']};
    
    svg {
        color: ${(props) => props.theme.colors.purple};
    }

    span {
        
        color: ${(props) => props.theme.colors['purple-dark']};
        
    }

    padding: 10px 8px;
    border-radius: 6px;

    
}
a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};

    padding: 8px;
    border-radius: 6px;

    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;

      
    }

    span {
      ${mixins.fonts.textS};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
}

`