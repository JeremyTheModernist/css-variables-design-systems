import React from 'react';
import styled from 'styled-components';

const WrapperStyles = styled.div`
  padding: calc(2rem + var(--space-3xl)) var(--container-padding);
  margin: auto;
  max-width: 1440px;
`;

const PageWrapper = (props) => {
  return <WrapperStyles>{props.children}</WrapperStyles>;
};

export default PageWrapper;
