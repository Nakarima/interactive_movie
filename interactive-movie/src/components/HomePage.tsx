import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

interface HomePageProps {
  onClick: () => any;
}

export const HomePage = ({ onClick }: HomePageProps) => (
  <><h1>Witaj w naszym filmie o patologii internetowych celebrytów</h1>
    <Button variant="contained" color="primary" onClick={onClick}>
      Zacznij stalkować
  </Button></>
);