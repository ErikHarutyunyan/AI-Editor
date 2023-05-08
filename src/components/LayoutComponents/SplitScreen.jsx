import { Children } from "react";
import { LeftSection, RightSection, Wrapper } from "./SplitScreen.styles.jsx";

const SplitScreen = ({
  leftWidth = 6,
  rightWidth = 6,
  className = "",
  children = "",
  h = "100vh",
}) => {
  const [left, right] = Children.toArray(children);

  return (
    <Wrapper className={`${className}`} h={h}>
      <LeftSection flexWidth={leftWidth}>{left}</LeftSection>
      <RightSection flexWidth={rightWidth}>{right}</RightSection>
    </Wrapper>
  );
};

export default SplitScreen;
