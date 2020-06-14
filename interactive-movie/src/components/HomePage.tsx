import React from 'react';
import Button from '@material-ui/core/Button';

interface HomePageProps {
  onClick: () => any;
}

export const HomePage = ({ onClick }: HomePageProps) => (
  <><h2>Film interaktywny</h2>
    <h1>Cybergwiazda</h1>
    <Button variant="contained" color="primary" onClick={onClick}>
      Zacznij śledzić
  </Button></>
);