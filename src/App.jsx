import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { routes } from './routes/routes';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
        <Routes>
          {[...new Set(routes.map(r => r.layout))].map((Layout, idx) => {
            const layoutRoutes = routes.filter(r => r.layout === Layout);
            const publicRoutes = layoutRoutes.filter(r => !r.protected);
            const protectedRoutes = layoutRoutes.filter(r => r.protected);

            return (
              <Route key={idx} element={<Layout />}>
                {publicRoutes.map((route, i) => {
                  const Page = route.component;
                  return <Route key={`public-${i}`} path={route.path} element={<Page />} />;
                })}
                
                {protectedRoutes.length > 0 && (
                  <Route element={<ProtectedRoute allowedRoles={['user']} />}>
                    {protectedRoutes.map((route, i) => {
                      const Page = route.component;
                      return <Route key={`protected-${i}`} path={route.path} element={<Page />} />;
                    })}
                  </Route>
                )}
              </Route>
            );
          })}
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
