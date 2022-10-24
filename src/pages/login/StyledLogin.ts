import styled from "styled-components";

export const StyledLogin = styled.div`
  max-width: 369px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;

  h1 {
    margin: 20% 0 38px 0;

    color: var(--color-primary);

    font-weight: 700;
    font-size: 2rem;
    line-height: 28px;
  }

  div {
    width: 100%;
    height: 100%;

    padding: 42px 22px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: var(--color-grey-0);
    background-color: var(--color-grey-3);

    border-radius: 4px;

    h2 {
      margin-bottom: 22px;

      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }

    form {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 100%;

      margin-bottom: 34px;

      label {
        margin-bottom: 5px;
      }

      input {
        width: 100%;
        height: 48px;

        padding-left: 10px;

        color: var(--color-grey-0);
        background-color: var(--color-grey-2);

        border: 2px solid var(--color-grey-2);
        border-radius: 4px;

        outline: none;
      }

      input::placeholder {
        color: var(--color-grey-1);
      }

      input:hover {
        border: 2px solid var(--color-grey-1);
      }

      span {
        align-self: center;
        margin: 4px 0 10px 0;

        color: var(--color-negative);
      }
    }

    span {
      margin-bottom: 22px;
    }
  }

  @media (max-width: 425px) {
    div {
      width: 90%;
    }
  }
`;
