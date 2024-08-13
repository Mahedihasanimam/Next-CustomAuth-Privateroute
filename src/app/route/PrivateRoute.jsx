'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
      setIsAuthenticated(false);
    }
  }, [router]);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? <>{children}</> : null;
};

export default PrivateRoute;
