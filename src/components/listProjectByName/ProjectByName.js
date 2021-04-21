import React from 'react';
import { Dashboard } from '../listAllProject/ListCategories';
import { ListProduct } from '../listAllProject/ListProject';

export const ProjectByName = ({ categories, products }) => {
   return (
      <>
         <Dashboard categories={categories} />
         <ListProduct projects={products} />
      </>
   );
};
