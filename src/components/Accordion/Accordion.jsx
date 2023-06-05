import React, { useState } from "react";
// Styles
import {
  AccordionContent,
  AccordionToggle,
  AccordionWrapper,
} from "./Accordion.styles";

const Accordion = ({ title = "", children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper className={className}>
      <div className="accHeader" onClick={toggleAccordion}>
        <div className="accTitle">{title}</div>
        <AccordionToggle className="accBtn">
          {isOpen ? "-" : "+"}
        </AccordionToggle>
      </div>
      <AccordionContent className="accContent" isOpen={isOpen}>
        {children}
      </AccordionContent>
    </AccordionWrapper>
  );
};
export default Accordion;
