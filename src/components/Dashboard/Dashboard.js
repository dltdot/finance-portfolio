import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

const Dashboard = () => {
  const totalBalance = 25000;
  const monthlyIncome = 5000;
  const monthlyExpenses = 3000;

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Financial Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Balance
              </Typography>
              <Typography variant="h5">
                ${totalBalance.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Monthly Income
              </Typography>
              <Typography variant="h5">
                ${monthlyIncome.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Monthly Expenses
              </Typography>
              <Typography variant="h5">
                ${monthlyExpenses.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;