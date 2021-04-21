import React from 'react';
import { BaseBanner } from '../components/bannerLastProject/Index';
import { Presentation } from '../components/bannerPersonal/Index';
import { BaseSocial } from '../components/threeSocialMedia/Index';
import { BaseCard } from '../components/listSixProjects/Index';
import { Footer } from '../components/footers/Index';
import { Loading } from '../components/loading/Loading';
import { useHome } from '../hooks/useFetch';

export const Home = () => {
   const { lastProject, sixProject, linkSocial, prioritySocial, loading, presentation } = useHome();

   if (loading) {
      return <Loading />;
   } else {
      return (
         <>
            <BaseBanner
               id={lastProject._id}
               subtitle={lastProject.subtitle}
               title={lastProject.title}
               tools={lastProject.firstTools}
            />
            <BaseCard projects={sixProject} />
            <Presentation presentation={presentation} socials={linkSocial} />
            <BaseSocial socials={prioritySocial} />
            <Footer />
         </>
      );
   }
};
