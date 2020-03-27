import React from "react";
import Nav from '../Nav';

function Wrapper(props) {

    return (
      <div >
        <Nav />
        {props.children}
      </div>
    );

};

export default Wrapper;