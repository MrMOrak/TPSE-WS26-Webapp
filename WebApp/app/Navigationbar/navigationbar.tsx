import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { School } from '@mui/icons-material';
import { Divider } from '@mui/material';

export default function Navigationbar() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Box sx={{ bgcolor: '#b7c5d0', height: '100vh', width: '13vw' }}>
        <h1>
          <School />
          Teaching
        </h1>
        <Divider/>
        <h1>
          Theses
        </h1>
        </Box>
    </React.Fragment>
  );
}
