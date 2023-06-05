import styled from "styled-components";
export const Wrapper = styled.div``;

export const AccordionWrapper = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 10px;
  .accHeader {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f5f5f5;
    cursor: pointer;
    .accTitle {
      flex: 1;
      margin: 0;
    }
  }
`;

export const AccordionTitle = styled.h3``;

export const AccordionToggle = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

export const AccordionContent = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0px")};
  overflow: hidden;
  background-color: #fff;
  transition: max-height 0.3s cubic-bezier(1, 0, 0, 1);
  .content {
    padding: 10px;
  }
`;
