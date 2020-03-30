import React from "react";
import Nav from '../Nav';
import Grid from '@material-ui/core/Grid';

function Wrapper(props) {

  return (
    <div>
      <Nav />
      <Grid container direction="column" justify="flex-start" alignItems="center">
        {props.children}
      </Grid>
    </div>
  );

};

export default Wrapper;