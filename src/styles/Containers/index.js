import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  z-index: ${(props) => props.zIndex};
  text-align: ${(props) => props.textAlign};
  transition: ${(props) => props.transition};
`;

const FlexibleContainer = styled(Container)`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  flex-wrap: ${(props) => props.wrap};
`;

export { Container, FlexibleContainer };
