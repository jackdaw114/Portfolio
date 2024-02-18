import * as React from 'react';
import Stack from '@mui/material/Stack';
import { MouseContext } from './MouseContext';

export default function BasicButtons() {
  const { setTrue, setFalse } = React.useContext(MouseContext)
  return (
    <Stack spacing={2} direction="row">
      <button onMouseEnter={setTrue} onMouseLeave={setFalse}>Text</button>
    </Stack>
  );
}