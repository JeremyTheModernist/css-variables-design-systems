import React from 'react';
import styled from 'styled-components';

const GridStyles = styled.div`
  display: var(--grid-layout);
  grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  grid-column-gap: var(--grid-gap);
  /* give all children a bottom margin */
  > * {
    margin-bottom: var(--grid-gap);
  }
`;

const Grid = ({ children, cols = 2 }) => {
  return <GridStyles cols={cols}>{children}</GridStyles>;
};

export default Grid;
