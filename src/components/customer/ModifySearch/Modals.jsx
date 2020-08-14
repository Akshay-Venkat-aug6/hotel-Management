import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';

const  Modals = ({show, handleClose, handleShow}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize: "16px", fontWeight: "600"}}>Modify Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{display: "flex"}}>
            <div>
            <TextField id="standard-basic" label="Location" />
            </div>
            <div style={{paddingLeft: "20px"}}>
              <TextField
                id="date"
                label="Check In Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div style={{paddingLeft: "20px"}}>
              <TextField
                id="date"
                label="Check Out Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div style={{display: "flex", paddingTop: "20px"}}>
            <div>
              <TextField id="standard-basic" label="Adult No" />
            </div>
            <div style={{paddingLeft: "20px"}}>
              <TextField id="standard-basic" label="Child No" />
            </div>
          </div>
          <div style={{paddingTop: "15px"}}>
            <Button variant="danger" onClick={handleClose}>
              Search Again
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modals