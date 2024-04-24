import styled from "styled-components";

export const CountryPathHoverEffect = styled.path`
  stroke: #fff;
  stroke-width: 0.5;

  &:hover {
    stroke-width: 1;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
  }
`;
