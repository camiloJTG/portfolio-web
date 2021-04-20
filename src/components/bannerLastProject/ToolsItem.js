import React from 'react';
import Grid from '@material-ui/core/Grid';
import ToolTip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';

export const ToolsItem = ({ tools }) => {
   return (
      <div>
         <Grid container spacing={2} justify='center'>
            {tools.map((i) => {
               return (
                  <Grid item key={i._id}>
                     <ToolTip title='Visitar pagina oficial' interactive arrow>
                        <Link
                           href={i.websiteLink}
                           rel='noopener noreferrer'
                           target='_blank'
                           underline='none'
                        >
                           <Chip label={i.name} />
                        </Link>
                     </ToolTip>
                  </Grid>
               );
            })}
         </Grid>
      </div>
   );
};
