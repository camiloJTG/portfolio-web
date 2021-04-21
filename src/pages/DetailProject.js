import React from 'react';
import { Detail } from '../components/detailProject/Detail';
import { Footer } from '../components/footers/Index';
import { Loading } from '../components/loading/Loading';
import { useDetail } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

export const DetailProject = () => {
   const { projectid } = useParams();
   const getId = projectid.replace(':', '');
   const { project, loading } = useDetail(getId);

   if (loading) {
      return <Loading />;
   } else {
      return (
         <>
            <Detail project={project} />
            <Footer />
         </>
      );
   }
};
