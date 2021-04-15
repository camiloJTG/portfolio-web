export const callServices = async (baseUrl, path, type = 'GET', body = {}, params = '') => {
   try {
      const URL = `${baseUrl}${path}${params}`;
      let RESP = '';
      let DATA = '';
      switch (type) {
         case 'GET':
            RESP = await fetch(URL);
            DATA = RESP.json();
            break;
         case 'POST':
            RESP = await fetch(URL, {
               method: 'POST',
               body: JSON.stringify(body)
            });
            DATA = RESP.json();
            break;
         default:
            console.error('Incorrect value in type parameter');
            break;
      }
      return DATA;
   } catch (e) {
      console.error(e.message);
   }
};
