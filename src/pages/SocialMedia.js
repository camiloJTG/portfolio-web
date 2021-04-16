import React from 'react';
import { useSocial } from '../hooks/useFetch';
import { AllSocial } from '../components/listAllSocialMedia/Index';
import { Footer } from '../components/footers/Index';
import { Loading } from '../components/loading/Loading';

export const SocialMedia = () => {
   const { socials, loading } = useSocial();

   if (loading) {
      return <Loading />;
   } else {
      return (
         <>
            <AllSocial socials={socials} /> <Footer />
         </>
      );
   }
};
