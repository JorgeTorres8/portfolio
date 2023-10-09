import Router from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list';
import "react-swipeable-list/dist/styles.css"
import styles from '../styles/ProjectPreview.module.css'
import usePortfolio from '../hook/usePortfolio';

const ProjectPreview = ({project, favourite}) => {
  
  const {handleFavorites, favorites, Deletefavorites, destructive, activetheme} = usePortfolio();
  
  const { id, name, url, image} = project;
  const NewFavourite = {
    id,
    name,
    url,
    image
  }

  const leadingActions = () => (
    <LeadingActions>
      {favourite?.name ?
        <SwipeAction 
          onClick={() => Deletefavorites(favourite)}
          destructive = {destructive}
          className={styles.delete}
        >
          Remove from favorites
        </SwipeAction>
        
        : (
        
        <SwipeAction onClick={() => handleFavorites(NewFavourite)}>
          Add to Favorites
        </SwipeAction>
      )}
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      {favourite?.name ?
        <SwipeAction
          onClick={() => Router.push(`/project/${favourite.url}`) }
        >
          See project again
        </SwipeAction> 
        
        : (

        <SwipeAction
            onClick={() => Router.push(`/project/${url}`) }
        >
          See Project
        </SwipeAction>
      )}
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <Card
          sx={{border: 1, borderColor: activetheme === 'dark' ? '#000000' : '#A4A6A6'}}
          className={styles.responsive}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              /*image={favourite?.name ? favourite.image.url : image.url}*/
              image={favourite?.name ? favourite.image : image}
              alt={`favourite?.name ? ${favourite.name} Project image : ${name} Project image `}
              draggable="false"
            />

            <CardContent
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
            >
              <Typography gutterBottom variant="h5" component="div" sx={{mb: 0}}>
                {favourite?.name ? favourite.name : name}
              </Typography>

              {favorites.some(favoriteState => favoriteState.url === url) && 
                <StarIcon
                  sx={{color: 'var(--orange)', fontSize: 20}}
                />}
            </CardContent>
          </CardActionArea>
        </Card>
      </SwipeableListItem>
    </SwipeableList>
  )
}

ProjectPreview.defaultProps = {
  project: [],
  favourite: []
}

export default ProjectPreview