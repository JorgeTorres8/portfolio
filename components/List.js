import React from 'react'
import Pagination from '@mui/material/Pagination'
import SwipeIcon from '@mui/icons-material/Swipe';
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import styles from '../styles/List.module.css'
import usePortfolio from '../hook/usePortfolio';
import ProjectPreview from './ProjectPreview';

/*const useStyles = makeStyles({

  text: {
    color: 'red!important;'
  },
});*/

const List = ({projects}) => {

  const {totalProjects, skeleton, handleChangePage, page, activetheme} = usePortfolio();

  const totalPages = Math.ceil(totalProjects / 6)

 // const classes = useStyles();

  return (
    <>
      <div className='swipe-div'>
        <p>Swipe project</p>
        <SwipeIcon
          className='swipe-icon'
          sx={{fontSize: 30, color: activetheme === 'dark' && 'var(--white)'}}
        />
      </div>
      <div className={styles.grid}>
        {(skeleton ? Array.from(new Array(6)) : projects).map((item, index) => (
          <div key={index}>
            {item ?
              <ProjectPreview
                key={item.id}
                project={item}
              />
            : 
            ( <>
                <Skeleton sx={{bgcolor: activetheme === 'dark' && '#777777'}} variant="rectangular" width="auto" height={200} />

                <Box sx={{ pt: 0.5 }}>
                  <Skeleton sx={{bgcolor: activetheme === 'dark' && '#777777'}}/>
                  <Skeleton sx={{bgcolor: activetheme === 'dark' && '#777777'}} width="auto" />
                </Box>
              </>
            )}
          </div>
        ))}
      </div>
      
      {skeleton ? 
        <Skeleton sx={{ 
          marginTop: 3,
          marginBottom: 5,
          bgcolor: 'var(--shadow-purple)'}}
        /> 
          :
        (<Stack 
          sx={{
              marginY:1.5
          }}
          spacing={2}
          direction={'row'}
          justifyContent='center'
          alignItems='center'
        >
          <Pagination
            sx={{
              margin: 3,
              backgroundColor: 'var(--grey)',
              padding: 1.2,
              borderRadius: 10,
              boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'
            }}
            count={totalPages}
            color="secondary"
            variant="outlined"
            onChange={handleChangePage}
            page={page}
            size="large"

          />
        </Stack>)
      }
    </>
  )
}

export default List