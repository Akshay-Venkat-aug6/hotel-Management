import React from 'react';
import Button from '@material-ui/core/Button';

const Buttons = ({classname, content, type}) => {
  return (
    <div className={classname}>
      <Button variant="contained" color="secondary" type={type}>
        {content}
      </Button>
    </div>
  )
};

export default Buttons;