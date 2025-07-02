// App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import { ToastContainer, toast  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import LoadingScreen from "./components/LoadingScreen";

// Lazy-loaded Components
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));

// Pages - Public
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Learn = lazy(() => import("./pages/learn"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Auth = lazy(() => import("./pages/Auth"));
const JoinNow = lazy(() => import("./pages/JoinNow"));
const Terms = lazy(() => import("./pages/Terms"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

// Features
const NPKAnalysis = lazy(() => import("./pages/features/NPKAnalysis"));
const SoilSeedSelection = lazy(() => import("./pages/features/SoilSeedSelection"));
const SeasonalMedicines = lazy(() => import("./pages/features/SeasonalMedicines"));
const GreenhouseMonitoring = lazy(() => import("./pages/features/GreenhouseMonitoring"));
const DetectSoil = lazy(() => import("./pages/features/DetectSoil"));
const CropYieldDetection = lazy(() => import("./pages/features/CropYieldDetection"));
const DiseaseDetection = lazy(() => import("./pages/features/DiseaseDetection"));
const WaterIrrigation = lazy(() => import("./pages/features/WaterIrrigation"));
const GovernmentPolicies = lazy(() => import("./pages/features/GovernmentPolicies"));

// Admin
const AdminLayout = lazy(() => import("./components/admin/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminUsers = lazy(() => import("./pages/admin/AdminUsers"));
const AdminPolicies = lazy(() => import("./pages/admin/AdminPolicies"));
const AdminPayments = lazy(() => import("./pages/admin/AdminPayments"));
const AdminSettings = lazy(() => import("./pages/admin/AdminSettings"));
const AdminMaintenance = lazy(() => import("./pages/admin/AdminMaintenance"));
const AdminBroadcast = lazy(() => import("./pages/admin/AdminBroadcast"));
const AdminShipment = lazy(() => import("./pages/admin/AdminShipment"));

// Media
const Media = lazy(() => import("./pages/media/Media"));
const Feed = lazy(() => import("./pages/media/Feed"));
const Tutorials = lazy(() => import("./pages/media/Tutorials"));
const Community = lazy(() => import("./pages/media/Community"));
const Notifications = lazy(() => import("./pages/media/Notifications"));

// Notifications Page
const NotificationList = lazy(() => import("./pages/notifications/NotificationList"));

// User Dashboard
const UserLayout = lazy(() => import("./users/components/UserLayout"));
const UserDashboard = lazy(() => import("./users/pages/UserDashboard"));
const UserProfile = lazy(() => import("./users/pages/UserProfile"));
const UserTransactions = lazy(() => import("./users/pages/UserTransactions"));
const UserPlans = lazy(() => import("./users/pages/UserPlans"));
const UserNotes = lazy(() => import("./users/pages/UserNotes"));
const UserSetting = lazy(() => import("./users/pages/UserSetting"));

// Mock user
const mockUser = {
  id: 1,
  name: "Kissan",
  email: "kissanhelper@example.com",
  profilePic: "",
  joinedDate: "2024-01-15",
  currentPlan: "Premium",
  planExpiry: "2025-01-15",
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-600 text-center p-8 text-xl">
          Something went wrong.
        </div>
      );
    }

    return this.props.children;
  }
}

// App Routes
function AppRoutes() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isUserRoute = location.pathname.startsWith("/user");

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingScreen />}>
        <ErrorBoundary>
          {/* Conditional Navbar */}
          {!isAdminRoute && !isUserRoute && <Navbar />}

          {/* Main content */}
          <main className={!isAdminRoute && !isUserRoute ? "pt-[10px]" : ""}>
            <Routes location={location} key={location.pathname}>
              {/* Redirect Root */}
              <Route path="/" element={<Navigate to="/home" replace />} />

              {/* Public Routes */}
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/join" element={<JoinNow />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              {/* Features */}
              <Route path="/npk-analysis" element={<NPKAnalysis />} />
              <Route path="/soil-seed-selection" element={<SoilSeedSelection />} />
              <Route path="/seasonal-medicines" element={<SeasonalMedicines />} />
              <Route path="/greenhouse-monitoring" element={<GreenhouseMonitoring />} />
              <Route path="/detect-soil" element={<DetectSoil />} />
              <Route path="/crop-yield" element={<CropYieldDetection />} />
              <Route path="/disease-detection" element={<DiseaseDetection />} />
              <Route path="/irrigation" element={<WaterIrrigation />} />
              <Route path="/policies" element={<GovernmentPolicies />} />

              {/* Media */}
              <Route path="/media/*" element={<Media />}>
                <Route path="feed" element={<Feed />} />
                <Route path="tutorials" element={<Tutorials />} />
                <Route path="community" element={<Community />} />
                <Route path="notifications" element={<Notifications />} />
              </Route>

              {/* Notifications */}
              <Route path="/notifications" element={<NotificationList />} />

              {/* User Routes */}
              <Route path="/user/*" element={<UserLayout user={mockUser} />}>
                <Route index element={<UserDashboard user={mockUser} />} />
                <Route path="profile" element={<UserProfile user={mockUser} />} />
                <Route path="transactions" element={<UserTransactions user={mockUser} />} />
                <Route path="plans" element={<UserPlans user={mockUser} />} />
                <Route path="notes" element={<UserNotes user={mockUser} />} />
                <Route path="setting" element={<UserSetting user={mockUser} />} />
              </Route>

              {/* Admin Routes */}
              <Route path="/admin/*" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="policies" element={<AdminPolicies />} />
                <Route path="broadcast" element={<AdminBroadcast />} />
                <Route path="shipment" element={<AdminShipment />} />
                <Route path="payments" element={<AdminPayments />} />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="maintenance" element={<AdminMaintenance />} />
              </Route>

              {/* 404 */}
              <Route
                path="*"
                element={
                  <div className="text-white text-center p-8 text-2xl">
                    404 - Page Not Found
                  </div>
                }
              />
            </Routes>
          </main>

          {/* Conditional Footer */}
          {!isAdminRoute && !isUserRoute && <Footer />}
        </ErrorBoundary>
      </Suspense>
    </AnimatePresence>
  );
}

// Main App
export default function App() {
  return (
    <Router>
      <AppRoutes />
      <ToastContainer position="top-center" autoClose={3000} />
    </Router>
  );
}
