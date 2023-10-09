import * as React from 'react';
import { useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import Router from "next/router";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import StarIcon from '@mui/icons-material/Star';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import usePortfolio from "../hook/usePortfolio";
import styles from '../styles/Nav.module.css'

const Nav = () => {

  const {value} = usePortfolio();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openM, setOpenM] = useState(false);

  const open = Boolean(anchorEl);

  const theme = useTheme();
  const responsiveNav = useMediaQuery(theme.breakpoints.up('sm'));

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenM(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenM(false);
  };

  const handleChangeNav = id => {
    const redirect = navigation.filter( desktop => desktop.id === id);
    Router.push(`${redirect[0].url}`)
  }

  const handleCloseM = () => setOpenM(false);
  
  const navigation = [
    { id: "1", icon: <HomeIcon sx={{fontSize: 25}} />, label: "Home", value: "home", url:"/" },
    { id: "2", icon: <StarIcon sx={{fontSize: 25}} />, label: "Favorites", value: "favorites", url:"/favorites" },
    { id: "3", icon: <PersonIcon sx={{fontSize: 25}} />, label: "About", value: "about", url:"/about" },
    { id: "4", icon: <EmailIcon sx={{fontSize: 25}} />, label: "Contact", value: "contact", url:"/contact" },
  ];

  return (

  <>
    <div className={styles.nav}>
      {/*<Link href="/"> //TODO
        <a>
          <Image width={70} height={70} src="/img/logo1.png" alt="Logo Image"/>
        </a>
      </Link>*/}

      {responsiveNav ? 
        <BottomNavigation sx={{ width: 'auto', borderRadius: 2, backgroundColor: '#ffffffe8'}} value={value}>
          {navigation.map((nav) => (
            <BottomNavigationAction
              key={nav.id}
              /*label={nav.label}*/
              value={nav.value}
              icon={nav.icon}
              className={styles.label}
              onClick={() => handleChangeNav(nav.id)}
              sx={{paddingY: -5, paddingX: .3 }}
            />
          ))}
        </BottomNavigation> : (

          <>
            <div className={`${openM && styles.opacity}`}>
              <ListIcon
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{fontSize: 50, color: '#FFF'}}
              /> 
            </div>
                      
            <Modal
              open={open}
              onClose={handleCloseM}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
            >
              <>
                <div className={styles.nav}>
                  <PlaylistRemoveIcon
                    sx={{fontSize: 50, color: '#FFF', mt: 6}}
                  />
                </div>

                <Menu
                  id="fade-menu"
                  MenuListProps={{'aria-labelledby': 'fade-button',}}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  {navigation.map((nav) => (
                    <Link key={nav.id} href={nav.url}>
                      <MenuItem  
                        onClick={handleClose}
                        className={styles.menu}
                      >

                        <div className={styles.item}>
                          {nav.icon}
                          <p>{nav.label}</p>
                        </div>
                      </MenuItem>
                    </Link> 
                  ))}
                </Menu>
              </>
            </Modal>
          </>
        )
      }
    </div>
   
  </>
)
}

export default Nav