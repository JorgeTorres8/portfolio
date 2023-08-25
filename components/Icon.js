import * as React from 'react';
import StarsIcon from '@mui/icons-material/Stars';
import Popover from '@mui/material/Popover';
import { Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import usePortfolio from '../hook/usePortfolio';

const Icon = ({NewFavourite}) => {

  const {handleFavorites} = usePortfolio();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  
  const open = Boolean(anchorEl);

  const galaxyFold = useMediaQuery('(min-width: 280px) and (max-width: 320px)');
  
  return (

    <>
      <Stack
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <StarsIcon
          onClick={() => handleFavorites(NewFavourite)}
          sx={{color: '#FFF', fontSize : galaxyFold ? 25 : 40}}
        />
      </Stack>

      <Popover
        id="mouse-over-popover"
        sx={{
            pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
        horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus>
          <Stack sx={{p:1, mt:0}}>Add to Favorites</Stack>
      </Popover>
    </>
  )
}

export default Icon