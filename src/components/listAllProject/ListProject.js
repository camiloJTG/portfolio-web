import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Pagination from '@material-ui/lab/Pagination';
import clsx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/Details';
import { useHistory } from 'react-router-dom';
import config from '../../configs/configs';

export const useStyles = makeStyles((t) => ({
   desktopDrawer: {
      width: '88%', //80%,
      top: 64,
      height: 'calc(100% - 64px)'
   },
   mobileDrawer: {
      width: '100%', //1650,
      top: 64,
      height: 'calc(100% - 64px)'
   },
   root: {
      display: 'flex',
      flexDirection: 'column'
   },
   statsItem: {
      alignItems: 'center',
      display: 'flex'
   },
   statsIcon: {
      marginRight: t.spacing(1)
   },
   media: {
      height: 300,
      width: 500,
      margin: 'auto'
   }
}));

export const ListProduct = ({ projects }) => {
   const classes = useStyles();
   const history = useHistory();

   const handleDetail = (id) => {
      history.push(`${config.paths.pathDetailProject}/:${id}`);
   };

   const handleNextPage = (e) => {
      e.preventDefault();
      let getTarget = e.target.innerText;
      history.push(`${config.paths.pathAllProject}/:${getTarget}`);
   };

   const content = (
      <Box
         height='100%'
         display='flex'
         flexDirection='column'
         className='animate__animated animate__bounceInRight'
      >
         <Box alignItems='center' display='flex' flexDirection='column' p={2}>
            <Grid container spacing={3}>
               {projects.findData.map((project) => (
                  <Grid item key={project._id} xl={4} lg={4} md={4} sm={6} xs={12}>
                     <Card className={clsx(classes.root)}>
                        <CardContent>
                           <Box display='flex' justifyContent='center' mb={3}>
                              <CardMedia
                                 image={project.image.remoteUrl}
                                 title={project.title}
                                 className={classes.media}
                              />
                           </Box>
                           <Typography align='center' color='textPrimary' gutterBottom variant='h4'>
                              {project.title}
                           </Typography>
                           <Typography align='center' color='textPrimary' variant='body1'>
                              {project.subtitle}
                           </Typography>
                        </CardContent>
                        <Box flexGrow={1} />
                        <Divider />
                        <Box p={2}>
                           <Grid container justify='space-around' spacing={2}>
                              <Grid className={classes.statsItem} item>
                                 <AccessTimeIcon className={classes.statsIcon} color='action' />
                                 <Typography color='textSecondary' display='inline' variant='body2'>
                                    {new Date(project.registrationDate).getDate()} de{' '}
                                    {new Date(project.registrationDate).toLocaleDateString(
                                       'default',
                                       {
                                          month: 'long'
                                       }
                                    )}
                                    , {new Date(project.registrationDate).getFullYear()}
                                 </Typography>
                              </Grid>
                              <Grid className={classes.statsItem} item>
                                 <Button
                                    variant='outlined'
                                    color='secondary'
                                    startIcon={
                                       <GetAppIcon className={classes.statsIcon} color='action' />
                                    }
                                    onClick={() => handleDetail(project._id)}
                                 >
                                    {' '}
                                    Ver detalles ...
                                 </Button>
                              </Grid>
                           </Grid>
                        </Box>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </Box>
         <Box mt={3} display='flex' justifyContent='center'>
            <Pagination
               color='primary'
               count={projects.totalPages}
               size='large'
               hidePrevButton
               hideNextButton
               onClick={handleNextPage}
            />
         </Box>
      </Box>
   );

   return (
      <>
         <Hidden only={['xs', 'sm']}>
            <Drawer
               anchor='right'
               classes={{ paper: classes.desktopDrawer }}
               open
               variant='persistent'
            >
               {content}
            </Drawer>
         </Hidden>
         <Hidden only={['md', 'xl', 'lg']}>
            <Drawer
               anchor='right'
               classes={{ paper: classes.mobileDrawer }}
               open
               variant='persistent'
            >
               {content}
            </Drawer>
         </Hidden>
      </>
   );
};
