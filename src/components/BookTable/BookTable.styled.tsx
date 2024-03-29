import styled from "@emotion/styled";



export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
interface ItemProps {
  activated?: boolean | null | undefined;
}

export const Item = styled.li<ItemProps>`
  display: grid;
  grid-template-columns: 13fr 13fr 6fr 13fr 13fr 13fr 13fr;
  border: 1px solid #ddd;
  text-align: center;
  background-color: ${({ activated }) => (activated ? "green" : "default")};
`;
