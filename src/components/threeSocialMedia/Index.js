import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Social from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { CardItem } from './CardItem';
import config from '../../configs/configs';

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
   }
}));

export const BaseSocial = ({ socials }) => {
   const classes = useStyles();
   const history = useHistory();
   const { paths } = config;

   return (
      <Container className={classes.cardGrid} maxWidth={'md'}>
         <Typography
            component='h1'
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom
            className={classes.typografyData}
         >
            Redes sociales
         </Typography>
         <CardItem cards={socials} />
         <div>
            <Grid container spacing={2} justify='center'>
               <Grid item>
                  <Button
                     color='primary'
                     variant='contained'
                     size='large'
                     startIcon={<Social fontSize='small' />}
                     className={classes.moreSocial}
                     onClick={() => {
                        history.push(`${paths.pathAllSocial}`);
                     }}
                  >
                     Ver todas las redes sociales
                  </Button>
               </Grid>
            </Grid>
         </div>
      </Container>
   );
};
