import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ContainerWrapper {
  Component?: ReactNode,
  name?: string,
}

const StyledContainerWrapper = styled.div`
  width: 1440px;
  padding: 20px;
  box-sizing: border-box;
`;

const ContainerWrapper: React.FC<ContainerWrapper> = props => {
  const { Component } = props;
  return (
    <StyledContainerWrapper data-test={`QA-container-${props.name}`}>
      <h3>{props.name}</h3>
      {Component}
    </StyledContainerWrapper>
  )
}

export default ContainerWrapper;
