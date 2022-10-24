import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;

  border-bottom: 0.5px solid var(--color-grey-2);

  section {
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
      width: 55px;
      height: 32px;
    }
  }
`;

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;

  font-weight: 700;
  font-size: 1.45rem;
  line-height: 28px;

  color: var(--color-grey-0);

  div {
    width: 100%;
    height: 118px;

    border-bottom: 0.5px solid var(--color-grey-2);

    section {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 22px;

        color: var(--color-grey-1);
      }
    }
  }

  section {
    h2 {
      margin: 37px 0 23px 0;
    }

    p {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 22px;
    }

    div {
      width: 100%;
      height: 75px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      border-bottom: none;

      button {
        width: 32px;
        height: 32px;

        color: var(--color-grey-0);
        background-color: var(--color-grey-3);

        border-radius: 4px;
        border: none;

        cursor: pointer;
      }

      button:hover {
        background-color: var(--color-grey-2);
      }
    }

    ul {
      width: 100%;
      height: 100%;

      padding: 23px 22px;

      display: flex;
      flex-direction: column;
      gap: 15px;

      background-color: var(--color-grey-3);

      border-radius: 4px;
    }
  }

  @media (max-width: 768px) {
    div {
      height: 100%;
      section {
        flex-direction: column;
        justify-content: unset;
        align-items: flex-start;

        p {
          margin-bottom: 30px;
        }
      }
    }
  }
`;

export const StyledSection = styled.section`
  max-width: 900px;
  height: 100%;

  margin: 0 auto;

  color: var(--color-grey-0);

  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 425px) {
    width: 90%;
  }
`;
