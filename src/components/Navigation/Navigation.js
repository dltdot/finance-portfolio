import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Finance Portfolio
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/portfolio">
            Portfolio
          </Button>
          <Button color="inherit" component={Link} to="/expenses">
            Expenses
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;