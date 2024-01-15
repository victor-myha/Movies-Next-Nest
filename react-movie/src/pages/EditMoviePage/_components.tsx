import { styled } from '@mui/material';
import { colors } from '../../assets/theme';

export const Content = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: '4vh 4vw',
  gap: '4vw',
}));

export const UploadButton = styled('button')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: colors.input,
  width: '30%',
  aspectRatio: '1',
  cursor: 'pointer',
  borderRadius: '10px',
  border: `2px dashed ${colors.text}`,
  fontWeight: 400,
}));

export const Error = styled('h6')(() => ({
  margin: 0,
  color: colors.error,
}));
