import * as React from 'react';
import Router from 'next/router';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DehazeIcon from '@mui/icons-material/Dehaze';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import StarIcon from '@mui/icons-material/Star';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

const actions = [
  { icon: <HomeIcon fontSize='large' />, name: 'Home', url:"/" },
  { icon: <StarIcon fontSize='large' />, name: 'Favorites', url:"/favorites" },
  { icon: <PersonIcon fontSize='large' />, name: 'About', url:"/about" },
  { icon: <EmailIcon fontSize='large' />, name: 'Contact', url:"/contact" },
  { icon: <PictureAsPdfIcon fontSize='large' />, name: 'Curriculum', url:"/" }, //TODO
];

const Dial = () => {

  const theme = useTheme();
  const responsiveDial = useMediaQuery(theme.breakpoints.up('sm'));
  const galaxyFold = useMediaQuery('(min-width: 280px) and (max-width: 320px)');

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1}}>
      <Box sx={{ position: 'relative' }}>
        {responsiveDial ?

          <StyledSpeedDial
            ariaLabel="SpeedDial playground example"
            icon={<DehazeIcon sx={{ fontSize: 30 }}/>}
            direction='down'
            sx={{mt:3,ml:3}}
          >            
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
               /* tooltipTitle={action.name}
                tooltipPlacement="right"
                tooltipOpen*/
                onClick={() => Router.push(action.url)}
              />
            ))}
          </StyledSpeedDial>

          : (

          <StyledSpeedDial
            ariaLabel="SpeedDial playground example"
            icon={<DehazeIcon sx={{ fontSize: 22 }} />}
            direction='right'
            sx={{mt:2.5,ml:4, height:30, width: 20}}
          > 
            {actions.map((action) => (
              <SpeedDialAction  
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={() => Router.push(action.url)}
                sx={{height: galaxyFold ? 18 : 40, width: galaxyFold ? 27 : 40 }}
              />
            ))}
          </StyledSpeedDial>) 
        }
      </Box>
    </Box>
  )
}

export default Dial