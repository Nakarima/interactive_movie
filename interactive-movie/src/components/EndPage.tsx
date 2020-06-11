import React from 'react';
import Button from '@material-ui/core/Button';

export interface EndPageProps {
  onClick: () => any;
}

export const EndPage = ({ onClick }: EndPageProps) => (
  <><h1>Koniec</h1>
    <Button variant="contained" color="primary" onClick={onClick}>
      Powrót na początek
  </Button></>
);