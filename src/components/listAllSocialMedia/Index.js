import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import { CardMedia, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((t) => ({
   cardGrid: {
      paddingTop: t.spacing(8),
      paddingBottom: t.spacing(8)
   },
   moreSocial: {
      padding: t.spacing(2, 2),
      color: 'white',
      fontWeight: 'bold',
      margin: t.spacing(4, 4)
   },
   typografyData: {
      fontWeight: 'bold'
   },
   media: {
      height: 250,
      width: 250,
      margin: 'auto'
      //paddingTop: '90%' // 16:9
   }
}));

export const AllSocial = ({ socials }) => {
   const classes = useStyles();

   return (
      <Container maxWidth='lg' className='animate__animated animate__bounceInLeft'>
         <Grid container className={classes.cardGrid} spacing={4} justify='center'>
            {socials.map((i) => (
               <Grid item key={i._id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                     <CardHeader title={i.name} align='center' style={{ marginBottom: '5px' }} />
                     <Typography align='center' style={{ marginBottom: '30px' }}>
                        {i.purpose}
                     </Typography>
                     <CardActionArea>
                        <CardMedia
                           image={i.logo.remoteUrl}
                           title={i.name}
                           className={classes.media}
                        />
                        {/*<img src={i.logo.remoteUrl} alt={i.name} height='250' />*/}
                     </CardActionArea>
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
      </Container>
   );
};
