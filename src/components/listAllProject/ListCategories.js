import React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import config from '../../configs/configs';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const useStyles = makeStyles((t) => ({
   mobileDrawer: {
      width: '100%', //1650,
      top: 60,
      height: 'calc(100% - 64px)'
   },
   desktopDrawer: {
      width: 230,
      top: 60,
      height: 'calc(100% - 64px)'
   },
   images: {
      marginRight: '30px'
   },
   item: {
      display: 'flex',
      paddingTop: 0,
      paddingBottom: 0
   },
   button: {
      color: t.palette.text.secondary,
      fontWeight: t.typography.fontWeightMedium,
      justifyContent: 'flex-start',
      letterSpacing: 0,
      padding: '10px 8px',
      textTransform: 'none',
      width: '100%'
   },
   icon: {
      marginRight: t.spacing(1)
   },
   title: {
      marginRight: 'auto'
   },
   active: {
      color: t.palette.primary.main,
      '& $title': {
         fontWeight: t.typography.fontWeightMedium
      },
      '& $icon': {
         color: t.palette.primary.main
      }
   }
}));

export const Dashboard = ({ categories }) => {
   const classes = useStyles();
   const history = useHistory();

   const handleCategories = (e) => {
      e.preventDefault();
      let getName = '';
      !e.target.alt ? (getName = e.target.textContent) : (getName = e.target.alt);
      history.push(`${config.paths.pathProjectByName}/:${getName}/:1`);
   };

   const content = (
      <Box
         height='100%'
         display='flex'
         flexDirection='column'
         className='animate__animated animate__bounceInLeft'
      >
         <Hidden only={['xs', 'sm', 'md']}>
            <Box display='flex' flexDirection='column' p={2}>
               <Typography color='textPrimary' variant='h5'>
                  {'Herramientas'}
               </Typography>
               <Typography color='textSecondary' variant='body2'>
                  {'Filtrar por categorías'}
               </Typography>
            </Box>
         </Hidden>
         <Divider />
         <Box p={2}>
            <List>
               {categories.map((category) => (
                  <div key={category._id}>
                     <Grid container spacing={2} justify='flex-start'>
                        <Grid item className={classes.images}>
                           <img
                              src={`${category.logo.remoteUrl}`}
                              alt={category.name}
                              width='30'
                              onClick={handleCategories}
                           />
                        </Grid>
                        <Hidden only={['xs', 'sm', 'md']}>
                           <Grid item key={category._id}>
                              <ListItem className={classes.item} disableGutters>
                                 <Button
                                    className={classes.button}
                                    to={category.href}
                                    onClick={handleCategories}
                                 >
                                    <span className={classes.title}>{category.name}</span>
                                 </Button>
                              </ListItem>
                           </Grid>
                        </Hidden>
                     </Grid>
                  </div>
               ))}
            </List>
         </Box>
      </Box>
   );

   return (
      <>
         <Hidden only={['xs', 'sm']}>
            <Drawer
               anchor='left'
               classes={{ paper: classes.desktopDrawer }}
               open
               variant='persistent'
            >
               {content}
            </Drawer>
         </Hidden>
      </>
   );
};
