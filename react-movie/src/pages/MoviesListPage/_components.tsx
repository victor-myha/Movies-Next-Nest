import { styled } from '@mui/material';

export const TextWithButton = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '5px',
}));

export const Content = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: '4vh 4vw',
  flexWrap: 'wrap',
  gap: '20px',
}));
