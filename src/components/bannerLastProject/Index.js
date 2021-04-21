import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import { Title } from './Title';
import { Description } from './Description';
import { ToolsItem } from './ToolsItem';
import { AccessDetail } from './AccessDetail';

const useStyle = makeStyles((t) => ({
   heroContent: {
      padding: t.spacing(8, 0, 6)
   }
}));

export const BaseBanner = ({ id, title, subtitle, tools }) => {
   const classes = useStyle();
   return (
      <>
         <CssBaseline />
         <main>
            <div className={classes.heroContent}>
               <Container maxWidth={'sm'}>
                  <Title title={title} styles={classes.typografyData} />
                  <Description description={subtitle} />
                  <ToolsItem tools={tools} />
                  <AccessDetail id={id} />
               </Container>
            </div>
         </main>
      </>
   );
};
