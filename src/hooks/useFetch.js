import config from '../configs/configs';
import { callServices } from '../utils/callServices';
import { useEffect, useState } from 'react';
import { getSixProject, getLastProject } from '../selectors/projects';
import { getGithubAndLinkedin, getPrioritySocials } from '../selectors/socials';

const { apis } = config;
const { hostBase, pathAccount, pathProject, pathSocial } = apis;

export const useHome = () => {
   const [state, setState] = useState({
      prioritySocial: [],
      linkSocial: [],
      presentation: [],
      sixProject: [],
      lastProject: [],
      loading: true
   });

   useEffect(() => {
      const fetchData = async () => {
         // Call services
         const project = await callServices(hostBase, `${pathProject}${'?limit=6&page=1'}`, 'GET');
         const social = await callServices(hostBase, pathSocial, 'GET');
         const presentation = await callServices(hostBase, pathAccount, 'GET');

         // call selectors
         const getLast = getLastProject(project.message.findData);
         const getSix = getSixProject(project.message.findData);
         const getLink = getGithubAndLinkedin(social.message);
         const getSocial = getPrioritySocials(social.message);

         // Set state
         setState({
            prioritySocial: getSocial,
            linkSocial: getLink,
            presentation: presentation.message,
            sixProject: getSix,
            lastProject: getLast,
            loading: false
         });
      };
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return state;
};

export const useSocial = () => {
   const [state, setState] = useState({ socials: [], loading: true });

   useEffect(() => {
      const allSocial = async () => {
         const socials = await callServices(hostBase, pathSocial, 'GET');
         setState({
            socials: socials.message,
            loading: false
         });
      };
      allSocial();
   });
   return state;
};

export const useProject = (page = 1) => {
   const [state, setState] = useState({ projects: [], tools: [], loading: true });

   useEffect(() => {
      const fetchData = async () => {
         // Call services
         const project = await callServices(
            hostBase,
            // cantidad total 18
            `${pathProject}${`?limit=45&page=${page}`}`,
            'GET'
         );
         const tool = await callServices(hostBase, `${pathProject}/tools`, 'GET');

         // Set state
         setState({
            projects: project.message,
            tools: tool.message,
            loading: false
         });
      };
      fetchData();
   }, [page]);
   return state;
};

export const useFilter = (name = 'null', page = 1) => {
   const [state, setState] = useState({ projects: [], tools: [], loading: true });

   useEffect(() => {
      const fetchData = async () => {
         // Call services
         const tool = await callServices(hostBase, `${pathProject}/tools`, 'GET');
         const project = await callServices(
            hostBase,
            `${pathProject}/filter/${name}?limit=45&page=${page}`,
            'GET'
         );
         // Set state
         setState({
            projects: project.message,
            tools: tool.message,
            loading: false
         });
      };
      fetchData();
   }, [name, page]);
   return state;
};

export const useDetail = (id = '') => {
   const [state, setState] = useState({ project: [], loading: true });

   useEffect(() => {
      const fetchData = async () => {
         const project = await callServices(hostBase, `${pathProject}/${id}`, 'GET');
         setState({
            project: project.message,
            loading: false
         });
      };
      fetchData();
   }, [id]);
   return state;
};
