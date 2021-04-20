import React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const useStyles = makeStyles((t) => ({
   toolbarLink: {
      padding: t.spacing(1, 6),
      flexShrink: 0
   },
   items: {
      color: 'white'
   }
}));

export const HeaderItems = ({ dataItem }) => {
   const classes = useStyles();
   const history = useHistory();

   return (
      <>
         {dataItem.map((i) => {
            return (
               <Link key={i.id} offset={0} className={classes.toolbarLink}>
                  <Button
                     color='inherit'
                     startIcon={<i.icons />}
                     className={classes.items}
                     size='large'
                     onClick={(e) => {
                        history.push(i.redirect);
                     }}
                  >
                     {i.name}
                  </Button>
               </Link>
            );
         })}
      </>
   );
};
