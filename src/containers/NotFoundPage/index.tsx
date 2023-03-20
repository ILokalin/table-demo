import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Buttons/Button';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #444;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  color: #666;
`;

const NotFoundPage = () => (
  <Container>
    <Wrapper>
      <Title>404</Title>
      <Subtitle>Page not found</Subtitle>
      <Button>Go Back Home</Button>
    </Wrapper>
  </Container>
);

export default NotFoundPage;
