import React from 'react';
import styled from 'styled-components';

const FlexStyles = styled.div`
  --justify-content: space-between;
  display: var(--flex-layout);
  flex-flow: ${(props) => props.flexFlow};
  justify-content: var(--justify-content);
  /* give all children a bottom margin */
  > * {
    margin-bottom: var(--grid-gap);
  }
`;

const Flex = ({ children, flexFlow = 'row' }) => {
  return <FlexStyles flexFlow={flexFlow}>{children}</FlexStyles>;
};

export default Flex;
