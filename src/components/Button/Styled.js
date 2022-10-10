import styled, { css } from "styled-components";

const ButtonTypeVariations = {
  primary: css`
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);

    &:hover {
      background-color: var(--color-primary-Focus);
      border: 1px solid var(--color-primary-Focus);
    }
  `,
  secondary: css`
    background-color: var(--color-grey-1);
    border: 1px solid var(--color-grey-1);

    &:hover {
      background-color: var(--color-grey-2);
      border: 1px solid var(--color-grey-2);
    }
  `,
  register: css`
    background-color: var(--color-primary-Negative);
    border: 1px solid var(--color-primary-Negative);

    &:hover {
      background-color: var(--color-primary-Focus);
      border: 1px solid var(--color-primary-Focus);
    }
  `,
  comeBack: css`
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-3);

    &:hover {
      background-color: var(--color-grey-1);
      border: 1px solid var(--color-grey-1);
    }
  `,
};

export const Container = styled.button`
  width: 100%;
  height: 48px;

  color: var(--color-grey-0);

  border-radius: 4px;

  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  cursor: pointer;

  ${({ variant }) => ButtonTypeVariations[variant || "primary"]}
`;
