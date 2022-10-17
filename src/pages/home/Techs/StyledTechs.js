import styled from "styled-components";

export const StyledTechs = styled.li`
  width: 100%;
  height: 49px;

  padding: 0 22px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-grey-4);

  border-radius: 4px;

  div {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    flex: 2;

    h2 {
      margin: 0;
    }
  }

  div + div {
    flex: 1;

    gap: 20px;

    p {
      margin-left: 25px;

      color: var(--color-grey-1);
    }
  }

  @media (max-width: 425px) {
    height: 100%;

    flex-direction: column;

    padding: 10px 22px;

    div {
      justify-content: center;
    }

    div + div {
      p {
        margin: 0;
      }
    }
  }
`;
