import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from '@/pages/NotFound';

import routes from './routes';

function Routing(): ReactElement {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.key} path={route.path} element={<route.component />} />
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routing;
