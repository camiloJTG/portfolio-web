import React from 'react';
import { Dashboard } from '../components/listAllProject/ListCategories';
import { ListProduct } from '../components/listAllProject/ListProject';
import { Loading } from '../components/loading/Loading';
import { useProject } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

export const ListProject = () => {
   const { page } = useParams();
   const getPage = page.replace(':', '');
   const { loading, tools, projects } = useProject(getPage);
   if (loading) {
      return <Loading />;
   } else {
      return (
         <div>
            <Dashboard categories={tools} />
            <ListProduct projects={projects} />
         </div>
      );
   }
};
