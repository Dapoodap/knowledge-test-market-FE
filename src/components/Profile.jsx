import { Dashboard } from '../pages/Dashboard';
import male from '../assets/male.svg'
import female from '../assets/female.svg'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByID } from '../redux/actions/userAction';

const Profile = () => {
  const nav = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user); 
  const isAuthenticated = useSelector(state => state.user.isAuthenticated); 

  useEffect(() => {
    // Mengambil data pengguna id dan token dari storage
    const id = sessionStorage.getItem('id');
    const token = sessionStorage.getItem('token');
    if (id && token) {
      dispatch(getUserByID(id)) //dsipatch fungsi redux untuk get by id setiap halaman dimuat
    }
    else{
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('user')
      nav('/')
    }
  }, []);
  return (
    <Dashboard>
      {console.log(isAuthenticated)}
      <div className="flex flex-col items-center h-full gap-8 p-4 bg-white rounded-lg shadow-md">
        <div className='flex flex-col items-center justify-center gap-3'>
        <img src={user?.jenisKelamin === 'laki-laki' ? male : female} loading='lazy' className='rounded-full' width={100} alt="" />
        <h1 className='text-4xl font-semibold'>{user?.name}</h1>
        <div className='flex flex-col items-center '>
          <p className='text-lg font-medium'>{user?.email}</p>
          <p className='text-lg font-medium'>{user?.jenisKelamin}</p>
        </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Profile;
