import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Learn from "./pages/Learn";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import NPKAnalysis from "./pages/features/NPKAnalysis";
import SoilSeedSelection from "./pages/features/SoilSeedSelection";
import SeasonalMedicines from "./pages/features/SeasonalMedicines";
import DetectSoil from "./pages/features/DetectSoil";
import CropYieldDetection from "./pages/features/CropYieldDetection";
import DiseaseDetection from "./pages/features/DiseaseDetection";
import WaterIrrigation from "./pages/features/WaterIrrigation";
import JoinNow from "./pages/JoinNow";
import GovernmentPolicies from "./pages/features/GovernmentPolicies";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Admin Pages
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminPolicies from "./pages/admin/AdminPolicies";
import AdminPayments from "./pages/admin/AdminPayments";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminMaintenance from "./pages/admin/AdminMaintenance";

// Media Pages
import Feed from "./pages/media/Feed";
import Tutorials from "./pages/media/Tutorials";
import Community from "./pages/media/Community";
import Notifications from "./pages/media/Notifications";
import Media from "./pages/media/Media";

// Notifications
import NotificationList from "./pages/notifications/NotificationList";

// User Pages
import UserDashboard from "./users/pages/UserDashboard";
import UserProfile from "./users/pages/UserProfile";
import UserTransactions from "./users/pages/UserTransactions";
import UserPlans from "./users/pages/UserPlans";
import UserNotes from "./users/pages/UserNotes";
import UserLayout from "./users/components/UserLayout";

// Mock user data for testing
const mockUser = {
  id: 1,
  name: "Kissan",
  email: "kissanhelper@example.com",
  profilePic: " ",
  joinedDate: "2024-01-15",
  currentPlan: "Premium",
  planExpiry: "2025-01-15",
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Main Routes with Navbar and Footer */}
        <Route
          path="/*"
          element={
            <div className="flex flex-col min-h-screen bg-black">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="home" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="learn" element={<Learn />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="auth" element={<Auth />} />
                  <Route path="npk-analysis" element={<NPKAnalysis />} />
                  <Route path="soil-seed-selection" element={<SoilSeedSelection />} />
                  <Route path="seasonal-medicines" element={<SeasonalMedicines />} />
                  <Route path="detect-soil" element={<DetectSoil />} />
                  <Route path="crop-yield" element={<CropYieldDetection />} />
                  <Route path="irrigation" element={<WaterIrrigation />} />
                  <Route path="policies" element={<GovernmentPolicies />} />
                  <Route path="terms" element={<Terms />} />
                  <Route path="privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="disease-detection" element={<DiseaseDetection />} />
                  <Route path="join" element={<JoinNow />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />

        {/* User Routes */}
        <Route path="/user/*" element={<UserLayout user={mockUser} />}>
          <Route index element={<UserDashboard user={mockUser} />} />
          <Route path="profile" element={<UserProfile user={mockUser} />} />
          <Route path="transactions" element={<UserTransactions user={mockUser} />} />
          <Route path="plans" element={<UserPlans user={mockUser} />} />
          <Route path="notes" element={<UserNotes user={mockUser} />} />
        </Route>

        {/* Media Routes */}
        <Route path="/media" element={<Media />}>
          <Route path="feed" element={<Feed />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="community" element={<Community />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* Notification */}
        <Route path="/notifications" element={<NotificationList />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="policies" element={<AdminPolicies />} />
          <Route path="payments" element={<AdminPayments />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="maintenance" element={<AdminMaintenance />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
