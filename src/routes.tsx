import React from 'react';
import { Route, BrowserRouter as Router, Routes as RouterRoutes } from 'react-router-dom';
import OrderPage from './pages/orderPage';

const Routes: React.FC = () => {
  return (
    <Router>
      <RouterRoutes>
        <Route path="/" element={<OrderPage />} />
      </RouterRoutes>
    </Router>
  );
};

export default Routes;