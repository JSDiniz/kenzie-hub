import styled from "styled-components";

export const StyledModal = styled.section`
  width: 369px;
  height: 342px;

  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: var(--color-grey-3);

  .box {
    width: 100%;
    height: 50px;

    padding: 0 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--color-grey-2);

    button {
      color: var(--color-grey-1);
      background-color: transparent;
    }
  }

  .form {
    width: 100%;
    height: 100%;

    padding: 24px 20px 32px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    label {
      align-self: flex-start;

      font-weight: 400;
      font-size: 12px;
      line-height: 0px;

      /* margin-bottom: 20px; */
    }

    input,
    select {
      width: 100%;
      height: 48px;

      outline: none;

      border-radius: 4px;

      font-weight: 400;
      font-size: 16px;
      line-height: 26px;

      padding-left: 10px;

      color: var(--color-grey-0);
      background-color: transparent;

      border: 1px solid var(--color-grey-0);

      option {
        background-color: var(--color-grey-2);
      }
    }

    button {
      width: 100%;
      height: 48px;

      color: var(--color-grey-0);
      background-color: var(--color-primary);

      border-radius: 4px;
      border: none;

      cursor: pointer;
    }
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;
