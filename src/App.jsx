import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import PrivateRoute from './utils/PrivateRoute'
import Profile from './components/Profile'
import { DataProducts } from './components/DataProducts'
import { WelcomingDashboard } from './components/WelcomingDashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        {/* PrivateRoute untuk authorization yang mana hanya yang sudah login dan punya token yang bisa akses route dibawah */}
        <Route element={<PrivateRoute/>} > 
          <Route path='/dashboard' element={<WelcomingDashboard/>}/>
          <Route path='/dashboard/profile' element={<Profile/>}/>
          <Route path='/dashboard/products' element={<DataProducts/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
