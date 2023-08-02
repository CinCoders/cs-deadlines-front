import { styled } from '@mui/material';

export const FilterContainer = styled('div')({
  '@media (min-width: 900px)': {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    marginTop: '20px',
    width: '100%',
  },
});

export const FilterByAreaContainer = styled('div')({
  width: '20%',
  marginRight: '20px',
});
