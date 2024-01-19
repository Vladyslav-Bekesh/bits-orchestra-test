import styled from "@emotion/styled";

interface ItemProps {
  activated: boolean;
}

export const Item = styled.li<ItemProps>`
  display: grid;
  grid-template-columns: 13fr 13fr 6fr 13fr 13fr 13fr 13fr;
  border: 1px solid #ddd;
  text-align: center;
  background-color: ${({ activated }) => (activated ? "green" : "default")};
`;
