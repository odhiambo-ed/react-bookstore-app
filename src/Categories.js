import { Button } from '@mui/material';
import React from 'react';
import Nav from './components/Nav';

function Categories() {
  return (
    <div>
      <Nav />
      <Button
        style={{
          paddingLeft: 100,
          paddingRight: 100,
          marginTop: 50,
          marginLeft: 300,
        }}
        variant="contained"
      >
        Check Status
      </Button>
    </div>
  );
}

export default Categories;
