import React from 'react';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import { useAuthCtx } from '../store/authContext';

function Home() {
  const { isUserLoggedIn } = useAuthCtx();

  return (
    <Container>
      {!isUserLoggedIn && (
        <Title>Welcome! Please login or register first...</Title>
      )}
      {isUserLoggedIn && <Title>Homepage</Title>}
    </Container>
  );
}

export default Home;
