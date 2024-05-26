import { Dashboard } from '../pages/Dashboard'

export const WelcomingDashboard = () => {
  return (
    <Dashboard>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
        <p className="mt-4 text-gray-600">Ini dashboard utama.</p>
      </div>
    </Dashboard>
  )
}
