import React, { useState } from 'react';
import { useEffect } from 'react';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import { useAuthCtx } from '../store/authContext';
import { baseUrl, myFetchAuth } from '../utils';

function Home() {
  const { isUserLoggedIn, token } = useAuthCtx();

  const [skills, setSkills] = useState([]);

  async function getSkills(token) {
    // const fetchResult = await myFetch(`${baseUrl}/content/skills`);
    const fetchResult = await myFetchAuth(`${baseUrl}/content/skills`, token);
    console.log('fetchResult ===', fetchResult);
  }

  useEffect(() => {
    if (isUserLoggedIn) {
      getSkills(token);
    }
  }, []);

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
