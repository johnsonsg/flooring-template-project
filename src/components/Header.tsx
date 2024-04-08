import React from 'react';
import NavBar from '@/components/AppBar/appBar'
import Container from '@mui/material/Container';

const Header: React.FC = () => {
  return (
    <>
    <NavBar />
    <header className="bg-yellow-500 p-4">
      <Container maxWidth="xl">
        <h1 className="text-white text-2xl font-bold">Next Template</h1>
      </Container>
    </header>
    </>
    
  );
};

export default Header;
