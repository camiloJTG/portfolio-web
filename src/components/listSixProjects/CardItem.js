import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Detail from '@material-ui/icons/Details';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import config from '../../configs/configs';

export const useStyles = makeStyles(() => ({
   card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
   },
   cardMedia: {
      paddingTop: '56.25%' // 16:9
   },
   cardContent: {
      flexGrow: 1
   }
}));

export const CardItem = ({ cards }) => {
   const classes = useStyles();
   const history = useHistory();
   const { paths } = config;

   const handleDetail = (id) => {
      history.push(`${paths.pathDetailProject}/:${id}`);
   };
   return (
      <>
         {cards.map((i) => {
            return (
               <Grid item key={i._id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                     <CardMedia
                        className={classes.cardMedia}
                        image={i.image.remoteUrl} // https://source.unsplash.com/random
                        title={i.title}
                     />
                     <CardContent className={classes.cardContent}>
                        <Typography align='center' gutterBottom variant='h5' component='h2'>
                           {i.title}
                        </Typography>
                        <Typography align='center' color='textSecondary'>
                           {new Date(i.registrationDate).getDate()} de{' '}
                           {new Date(i.registrationDate).toLocaleDateString('default', {
                              month: 'long'
                           })}
                           , {new Date(i.registrationDate).getFullYear()}
                        </Typography>
                        <br />
                        <Typography align='center'>{i.subtitle}</Typography>
                     </CardContent>
                     <CardActions>
                        <Grid
                           container
                           spacing={2}
                           justify='center'
                           style={{ marginBottom: '20px', marginTop: '5px' }}
                        >
                           <Grid item>
                              <Button
                                 size='large'
                                 color='primary'
                                 variant='outlined'
                                 startIcon={<Detail />}
                                 onClick={() => handleDetail(i._id)}
                              >
                                 Ver detalle
                              </Button>
                           </Grid>
                        </Grid>
                     </CardActions>
                  </Card>
               </Grid>
            );
         })}
      </>
   );
};
