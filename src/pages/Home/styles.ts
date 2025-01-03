import { styled } from "styled-components";
import { mixins } from "../../styles/mixins";

export const InfoContainer = styled.section`
position: relative;

img#hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  max-height: 544px;
  width: 100vw;
  object-fit: cover;
}
`;

export const ShopInfoContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
max-width: 1160px;
padding: 92px 20px;
margin: 0 auto;
gap: 56px;
> div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`;

export const Heading = styled.div`
display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors['base-title']}
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`;

export const TextInfoContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-row-gap: 20px;
> div {
    display: flex;
    align-items: center;
    gap: 12px;
    svg {
        padding: 8px;
        border-radius: 999px;
    }
}

`;


export const  CoffeeListContainer = styled.section`
max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }

` 


