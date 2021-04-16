export const getPrioritySocials = (data) => {
   const result = data.filter((x) => x.priority === 1);
   return result;
};

export const getGithubAndLinkedin = (data) => {
   const getGithub = data.filter((x) => x.name.toUpperCase() === 'GITHUB');
   const getLinkedin = data.filter((x) => x.name.toUpperCase() === 'LINKEDLN');
   return {
      github: getGithub[0].socialLink,
      linkedin: getLinkedin[0].socialLink
   };
};
