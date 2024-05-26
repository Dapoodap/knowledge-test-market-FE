import { useEffect} from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'

function PrivateRoute() {
  const nav = useNavigate()
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      // diarahkan ke home jika tidak punya token alias tidak bisa akses
      nav('/');
    }
  }, []);

  return <Outlet />;
}

export default PrivateRoute