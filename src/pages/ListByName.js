import React from 'react';
import { Loading } from '../components/loading/Loading';
import { ProjectByName } from '../components/listProjectByName/ProjectByName';
import { useFilter } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

export const ListByName = () => {
   const { name, page } = useParams();
   const getName = name.replace(':', '');
   const getPage = page.replace(':', '');
   const { tools, projects, loading } = useFilter(getName, getPage);
   if (loading) {
      return <Loading />;
   } else {
      return <ProjectByName categories={tools} products={projects} />;
   }
};
