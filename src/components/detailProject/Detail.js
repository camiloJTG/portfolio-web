import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ToolTip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Code from '@material-ui/icons/Code';

const useStyles = makeStyles((t) => ({
   cardRoot: {
      marginTop: 40
   },
   cardImage: {
      height: 0,
      paddingTop: '56.25%'
   },
   cardTitle: {
      fontWeight: 'bold'
   },
   cardTools: {
      marginTop: 10
   },
   titles: {
      marginTop: 20
   },
   wrapper: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'auto',
      minHeight: 635,
      maxHeight: 635
   }
}));

export const Detail = ({ project }) => {
   const classes = useStyles();

   return (
      <Container maxWidth='lg'>
         <Grid container spacing={3}>
            <Grid
               item
               xs={12}
               sm={12}
               md={12}
               lg={6}
               xl={6}
               className='animate__animated animate__bounceInLeft'
            >
               <Card className={classes.cardRoot} raised={true}>
                  <CardHeader
                     className={classes.cardTitle}
                     align='center'
                     title={project.title}
                     subheader={`${new Date(project.registrationDate).getDate()} de ${new Date(
                        project.registrationDate
                     ).toLocaleDateString('default', {
                        month: 'long'
                     })}, ${new Date(project.registrationDate).getFullYear()}`}
                  />
                  <CardMedia
                     image={project.image.remoteUrl}
                     className={classes.cardImage}
                     title={project.title}
                  />
                  <CardContent>
                     <Typography component='h2' variant='inherit' align='center' color='initial'>
                        Desarrollos
                     </Typography>
                     <Grid className={classes.cardTools} container spacing={2} justify='center'>
                        {project.developments.map((i) => {
                           return (
                              <Grid item key={i._id}>
                                 <ToolTip title='Visitar repositorio remoto' interactive arrow>
                                    <Link
                                       href={i.urlRepository}
                                       rel='noopener noreferrer'
                                       target='_blank'
                                       underline='none'
                                    >
                                       <Chip label={i.name} color='primary' icon={<Code />} />
                                    </Link>
                                 </ToolTip>
                              </Grid>
                           );
                        })}
                     </Grid>
                     <Typography
                        className={classes.titles}
                        component='h2'
                        variant='inherit'
                        align='center'
                        color='initial'
                     >
                        Herramientas
                     </Typography>
                     <Grid container spacing={2} justify='center' className={classes.cardTools}>
                        {project.tools.map((i) => {
                           return (
                              <Grid item key={i._id}>
                                 <ToolTip title='Visitar página oficial' interactive arrow>
                                    <Link
                                       href={i.websiteLink}
                                       rel='noopener noreferrer'
                                       target='_blank'
                                       underline='none'
                                    >
                                       <Chip
                                          label={i.name}
                                          color='default'
                                          icon={
                                             <img
                                                key={i._id}
                                                src={i.logo.remoteUrl}
                                                alt={i.name}
                                                width='20'
                                             />
                                          }
                                       />
                                    </Link>
                                 </ToolTip>
                              </Grid>
                           );
                        })}
                     </Grid>
                  </CardContent>
               </Card>
            </Grid>
            <Grid
               item
               xs={12}
               sm={12}
               md={12}
               lg={6}
               xl={6}
               className='animate__animated animate__bounceInRight'
            >
               <Card className={classes.cardRoot} raised={true}>
                  <CardHeader className={classes.cardTitle} align='center' title='Descripción' />
                  <CardContent className={classes.wrapper}>
                     <Typography
                        noWrap={false}
                        align='justify'
                        color='textSecondary'
                        display='block'
                        variant='body1'
                     >
                        {project.description}
                     </Typography>
                  </CardContent>
               </Card>
            </Grid>
         </Grid>
      </Container>
   );
};
