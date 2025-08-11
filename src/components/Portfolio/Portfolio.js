import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Portfolio = () => {
  const [investments] = useState([
    { id: 1, name: 'Stock A', amount: 5000, returns: 12.5 },
    { id: 2, name: 'Stock B', amount: 3000, returns: 8.2 },
    { id: 3, name: 'Bond C', amount: 2000, returns: 5.0 },
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Investment Portfolio
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Investment Name</TableCell>
              <TableCell align="right">Amount ($)</TableCell>
              <TableCell align="right">Returns (%)</TableCell>
              <TableCell align="right">Value ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {investments.map((investment) => (
              <TableRow key={investment.id}>
                <TableCell>{investment.name}</TableCell>
                <TableCell align="right">{investment.amount.toLocaleString()}</TableCell>
                <TableCell align="right">{investment.returns}%</TableCell>
                <TableCell align="right">
                  {(investment.amount * (1 + investment.returns / 100)).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Portfolio;