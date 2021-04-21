import Home from '@material-ui/icons/Home';
import Code from '@material-ui/icons/Code';
import Config from '../configs/configs';

const { paths } = Config;

export const headerClient = [
   {
      id: 1,
      name: 'Home',
      icons: Home,
      redirect: paths.pathHome
   },
   {
      id: 2,
      name: 'Proyectos',
      icons: Code,
      redirect: `${paths.pathAllProject}/:1`
   }
];
