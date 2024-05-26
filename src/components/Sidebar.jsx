import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaShoppingCart, FaBars, FaTimes,FaSignOutAlt } from 'react-icons/fa';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex" style={{ minHeight:'130vh' }}>
      {/* Overlay for mobile view */}
      <div className={`fixed inset-0 z-20 bg-black opacity-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>
      <div className={`fixed z-30 lg:relative lg:z-auto lg:translate-x-0 transform h-full w-64 bg-gray-800 text-white transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 bg-gray-900">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col p-4">
          <Link to="/dashboard" className="flex items-center p-2 mb-2 text-gray-300 rounded hover:bg-gray-700 hover:text-white">
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link to="/dashboard/profile" className="flex items-center p-2 mb-2 text-gray-300 rounded hover:bg-gray-700 hover:text-white">
            <FaUser className="mr-2" />
            Profile
          </Link>
          <Link to="/dashboard/products" className="flex items-center p-2 mb-2 text-gray-300 rounded hover:bg-gray-700 hover:text-white">
            <FaShoppingCart className="mr-2" />
            Products
          </Link>
          <Link to="/" className="flex items-center p-2 mb-2 text-gray-300 rounded hover:bg-gray-700 hover:text-white">
            <FaSignOutAlt className="mr-2" />
            Exit
          </Link>
          {/* Add more links as needed */}
        </nav>
      </div>
      <div className="flex-1 p-4 lg:hidden">
        <button className="p-2 mb-4 text-gray-700 bg-gray-200 rounded-lg" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
