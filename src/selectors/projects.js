export const getSixProject = (data) => {
   const result = data.splice(0, 5);
   return result;
};

export const getLastProject = (data) => {
   const { tools, title, subtitle } = data[0];
   const firstTools = tools.filter((x) => x.priority === 1);
   return { title, subtitle, firstTools };
};
