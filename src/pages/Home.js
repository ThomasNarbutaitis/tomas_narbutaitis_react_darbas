import React, { useState } from 'react';
import { useEffect } from 'react';
import Cards from '../components/Card/Cards';
import SingleCard from '../components/Card/SingleCard';
import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import { useAuthCtx } from '../store/authContext';
import { baseUrl, myFetchAuth } from '../utils';
import '../App.css';

function Home() {
  const { isUserLoggedIn, token } = useAuthCtx();

  const [skills, setSkills] = useState([]);
  const [noSkills, setNoSkills] = useState('');

  async function getSkills(token) {
    const fetchResult = await myFetchAuth(`${baseUrl}/content/skills`, token);
    // console.log('fetchSkillsReasult ===', fetchResult);
    if (fetchResult.length === 0) {
      setNoSkills('none');
    }
    setSkills(fetchResult);
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
      {isUserLoggedIn && <Title>Skills</Title>}
      {skills.length === 0 && !noSkills && (
        <p className='loading'>Loading skills... Please wait...</p>
      )}
      {noSkills && (
        <p className='loading'>
          You don't have any skills yet... Please add skills...
        </p>
      )}
      <Cards>
        {skills.map((sObj) => (
          <SingleCard key={sObj.id} {...sObj} />
        ))}
      </Cards>
    </Container>
  );
}

export default Home;
