import styled from "styled-components";
export const Wrapper = styled.div`
  background: rgb(90, 111, 251);
  background: linear-gradient(
    90deg,
    rgba(90, 111, 251, 1) 23%,
    rgba(246, 102, 199, 1) 64%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  .marquee {
    position: relative;
    width: 100vw;
    max-width: 100%;
    height: 75px;
    overflow-x: hidden;
  }

  .track {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 10s linear infinite;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    display: flex;
    align-items: center;
    column-gap: 10px;
    top: 35%;
  }

  .content {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;
