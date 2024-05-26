import Sidebar from "../components/Sidebar"

export const Dashboard = ({ children }) => {
  return (
    <div className="flex h-full">
    <Sidebar />
    <div className="flex-1 p-4 bg-gray-100 h-fit">
      {children}
    </div>
  </div>
  )
}
