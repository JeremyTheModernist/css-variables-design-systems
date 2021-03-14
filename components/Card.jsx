import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.div`
  --card-shadow: ${(props) => `var(--shadow-${props.shadow})`};
  box-shadow: var(--card-shadow);
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: 2rem;
  > * {
    margin-bottom: var(--space-md);
  }
  > *:first-child {
    margin-top: 0;
  }
  > *:last-child {
    margin-bottom: 0;
  }

  cursor: pointer;
  transition: 0.25s ease-in-out box-shadow;
  :hover {
    --card-shadow: ${(props) => `var(--shadow-${props.shadow + 2})`};
  }
`;

const Card = ({ children, shadow = 1 }) => {
  return <CardStyles shadow={shadow}>{children}</CardStyles>;
};

export default Card;
