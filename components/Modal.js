import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import usePortfolio from '../hook/usePortfolio';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
const Modal = () => {

  const {open, setOpen, currentFavourite, setCurrentFavourite, currentDelete, setCurrentDelete, handleRemove, gmail, setGmail} = usePortfolio();

  const handleClose = () => {
    setOpen(false);
    setCurrentFavourite('');
    setCurrentDelete('');
    setGmail(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
         <Stack sx={{ width: '100%'}}>
            {currentFavourite && 
              <Alert severity="info" sx={{ fontSize: 25, textAlign: "center"}}>    
                The {currentFavourite} project is already in the list of your favorite projects - <strong>check it out!</strong>
              </Alert>
            }

            {currentDelete &&
              <Alert severity="warning" sx={{ fontSize: 25, textAlign: "center"}}>    
                Are you sure to remove the <strong>{currentDelete.name}</strong> project from the list of your favorite projects?
              
                <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'center', mt: 3}}>
                  <Button sx={{fontSize: 13}} size="large" variant="contained" startIcon={<DoDisturbIcon />} onClick={handleClose}>Cancel</Button>
                  <Button sx={{fontSize: 13}} color="error" size="large" variant="contained" endIcon={<PlaylistRemoveIcon />} onClick={ () => handleRemove(currentDelete.url)}>Remove</Button>
                </Stack>
              </Alert>
            }

            {gmail &&
              <Alert severity="success" sx={{ fontSize: 25, textAlign: "center"}}>    
                <p style={{color: 'var(--black)'}}>Send me an email: <strong><a href="mailto:jorge22david8@gmail.com">Jorge22david8@gmail.com</a></strong></p>
              </Alert>
            }
        </Stack>
      </Dialog>
    </div>
  )
}

export default Modal