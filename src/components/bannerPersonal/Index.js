import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import Linkedin from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((t) => ({
   mainFeaturedPost: {
      position: 'relative',
      backgroundColor: t.palette.grey[800],
      color: t.palette.common.white,
      marginBottom: t.spacing(4),
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
   },
   overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)'
   },
   mainFeaturedPostContent: {
      position: 'relative',
      padding: t.spacing(3),
      [t.breakpoints.up('md')]: {
         padding: t.spacing(6),
         paddingRight: 0
      }
   },
   buttonSocial: {
      padding: t.spacing(1, 1),
      color: 'white',
      margin: t.spacing(2, 2)
   }
}));

export const Presentation = ({ presentation, socials }) => {
   const classes = useStyles();
   return (
      <Paper
         className={classes.mainFeaturedPost}
         style={{ backgroundImage: `url(${'https://source.unsplash.com/random'})` }}
      >
         <div className={classes.overlay} />
         <Grid container>
            <Grid item md={6}>
               <div className={classes.mainFeaturedPostContent}>
                  <Hidden only={['md', 'lg', 'xl']}>
                     <Typography component='h1' variant='h4' color='inherit' gutterBottom>
                        {presentation.jobTitle}
                     </Typography>
                  </Hidden>
                  <Hidden only={['xs', 'sm']}>
                     <Typography component='h1' variant='h3' color='inherit' gutterBottom>
                        {presentation.jobTitle}
                     </Typography>
                  </Hidden>
                  <Typography variant='subtitle1' display='block'>
                     {presentation.aboutMe}
                  </Typography>
                  <Link
                     href={socials.linkedin}
                     target='_blank'
                     rel='noopener noreferrer'
                     underline='none'
                  >
                     <Button
                        color='primary'
                        variant='outlined'
                        size='large'
                        startIcon={<Linkedin />}
                        className={classes.buttonSocial}
                     >
                        Linkedin
                     </Button>
                  </Link>
                  <Link
                     href={socials.github}
                     target='_blank'
                     rel='noopener noreferrer'
                     underline='none'
                  >
                     <Button
                        color='inherit'
                        variant='outlined'
                        size='large'
                        startIcon={<GitHub />}
                        className={classes.buttonSocial}
                     >
                        Github
                     </Button>
                  </Link>
               </div>
            </Grid>
         </Grid>
      </Paper>
   );
};
