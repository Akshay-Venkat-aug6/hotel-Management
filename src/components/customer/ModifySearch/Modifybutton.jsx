import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Modals from './Modals';

const ModifyButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="contained" style={{fontSize: "10px"}} onClick={handleShow}>
        Modify Search
      </Button>
      <Modals handleShow={handleShow} handleClose={handleClose} show={show}/>
    </div>
  )
};

export default ModifyButton;