import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core';

export default function SimpleMenu({changeCurrentid}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

    const Styles = makeStyles((theme) => ({
        root: {
            position: "relative",
            bottom: 275,
            float: "right",
            width: 50
        },
    }));

    const classes = Styles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    changeCurrentid();
  };

  return (
    <div className={classes.root}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <i class="fas fa-ellipsis-v fa-1x" style={{color: "white"}}></i>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
      </Menu>
    </div>
  );
}
