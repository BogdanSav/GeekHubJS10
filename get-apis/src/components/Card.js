import React from 'react';
import {
  Card, CardContent, Box, Grid,
} from '@material-ui/core';

function Cards({ content }) {
  return (
    <Grid item md={4}>
      <Card>
        <CardContent>
          <Box>
            {JSON.stringify(content, null, 2)}
          </Box>
        </CardContent>
      </Card>
    </Grid>

  );
}
export default Cards;
