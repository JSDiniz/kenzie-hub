import styled from "styled-components";

export const StyledRegister = styled.div`
  max-width: 369px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
  margin-bottom: 10%;

  color: var(--color-grey-0);

  div {
    width: 100%;
    height: 100%;

    margin: 58px 0 48px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: var(--color-primary);

      font-weight: 700;
      font-size: 2rem;
      line-height: 28px;
    }

    button {
      width: 67px;
      height: 40px;
    }
  }

  div + div {
    margin: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;

    h2 {
      font-weight: 700;
      font-size: 1.75rem;
      line-height: 28px;
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 22px;

      color: var(--color-grey-1);
    }

    form {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      gap: 10px;

      input,
      select {
        width: 100%;
        height: 48px;

        color: var(--color-grey-0);
        background-color: var(--color-grey-2);

        border: 2px solid var(--color-grey-2);
        border-radius: 4px;

        padding-left: 10px;

        outline: none;
      }

      input::placeholder {
        color: var(--color-grey-1);
      }

      input:hover {
        border: 2px solid var(--color-grey-1);
      }

      span {
        color: var(--color-negative);
      }

      button {
        width: 100%;
      }
    }
  }

  @media (max-width: 425px) {
    div {
      width: 90%;
    }
  }
`;
