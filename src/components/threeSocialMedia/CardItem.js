import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { CardMedia, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
   card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(3, 3)
   },
   cardAction: {
      marginTop: '30px'
   },
   media: {
      height: 210,
      width: 210,
      margin: 'auto'
      //paddingTop: '90%' // 16:9
   }
}));

export const CardItem = ({ cards }) => {
   const classes = useStyles();
   return (
      <Grid container spacing={4} justify='center'>
         {cards.map((i) => (
            <Grid item key={i._id} xs={12} sm={6} md={4}>
               <Card className={classes.card}>
                  <CardHeader title={i.name} align='center' style={{ marginBottom: '5px' }} />
                  <Typography align='center' style={{ marginBottom: '30px' }}>
                     {i.purpose}
                  </Typography>
                  <CardMedia image={i.logo.remoteUrl} className={classes.media} title={i.name} />
                  <CardActionArea></CardActionArea>
                  <br />
                  <div>
                     <Grid container spacing={2} justify='center'>
                        <Grid item>
                           <CardActions className={classes.cardAction}>
                              <Link
                                 href={i.socialLink}
                                 target='_blank'
                                 rel='noopener noreferrer'
                                 underline='none'
                              >
                                 <Button size='large' variant='outlined' color='secondary'>
                                    Visitar sitio
                                 </Button>
                              </Link>
                           </CardActions>
                        </Grid>
                     </Grid>
                  </div>
               </Card>
            </Grid>
         ))}
      </Grid>
   );
};
