import styled from "styled-components";
import { FlexibleContainer } from "styles/Containers";

const BasicButton = styled.button`
  border-radius: 4px;
  outline: none;
`;

const Button = ({ children }) => {
  return (
    <FlexibleContainer>
      <BasicButton>{children}</BasicButton>
    </FlexibleContainer>
  );
};

export { Button };
