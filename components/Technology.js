import * as React from 'react';
import Image from 'next/image';
import Popover from '@mui/material/Popover';
import { Stack } from '@mui/material';

const Technology = ({technology}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const {alt, imgT, name} = technology;

  return (
    <div>
      <Stack
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Image
          draggable="false"
          src={imgT}
          alt={alt}
          width={35}
          height={35}
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
          <Stack sx={{p:.5}}>{name}</Stack>
      </Popover>

    </div>
  )
}

export default Technology