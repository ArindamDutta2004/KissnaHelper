import { Menu, X, Sprout, User, Bell } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const notificationRef = useRef(null);

  useEffect(() => {
    setNotifications([
      { id: "1", title: "New User Registration", message: "A new farmer has registered.", timestamp: "2024-03-20T10:30:00", read: false },
      { id: "2", title: "System Update", message: "New features added.", timestamp: "2024-03-19T15:45:00", read: false },
      { id: "3", title: "Payment Received", message: "Premium subscription payment received.", timestamp: "2024-03-18T09:20:00", read: true }
    ]);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-bold text-white">KissanHelper</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-green-500">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-green-500">About</Link>
            <Link to="/join" className="text-gray-300 hover:text-green-500">View Plans</Link>
            <Link to="/learn" className="text-gray-300 hover:text-green-500">Learn More</Link>
            <Link to="/auth" className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600">Login/Register</Link>

            {/* User and Notification Section */}
            <div className="flex items-center space-x-2">
              <Link to="/user" className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition">
                <User className="h-5 w-5 text-green-500" />
              </Link>

              <div className="relative" ref={notificationRef}>
                <button onClick={() => setShowNotifications(!showNotifications)} className="relative p-2 text-gray-400 hover:text-white">
                  <Bell className="h-6 w-6" />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
                <AnimatePresence>
                  {showNotifications && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute right-0 mt-2 w-80 bg-gray-900 rounded-lg shadow-lg border border-gray-800 z-50">
                      <div className="p-4 border-b border-gray-800 flex justify-between">
                        <h3 className="text-lg font-semibold text-white">Notifications</h3>
                        <Link to="/notifications" className="text-sm text-green-500 hover:text-green-400" onClick={() => setShowNotifications(false)}>
                          View All
                        </Link>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.length > 0 ? (
                          notifications.slice(0, 5).map(notification => (
                            <Link key={notification.id} to={`/notifications/${notification.id}`} className={`block p-4 hover:bg-gray-800 ${!notification.read ? 'bg-gray-800/50' : ''}`} onClick={() => setShowNotifications(false)}>
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                                  <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                                </div>
                                {!notification.read && <span className="w-2 h-2 bg-green-500 rounded-full"></span>}
                              </div>
                            </Link>
                          ))
                        ) : (
                          <div className="p-4 text-center text-gray-400">No notifications</div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gray-900 absolute w-full top-16 left-0 flex flex-col space-y-4 px-6 py-4 border-t border-gray-700">
            <Link to="/" className="text-gray-300 hover:text-green-500" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-green-500" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/join" className="text-gray-300 hover:text-green-500" onClick={() => setIsOpen(false)}>View Plans</Link>
            <Link to="/learn" className="text-gray-300 hover:text-green-500" onClick={() => setIsOpen(false)}>Learn More</Link>
            <Link to="/auth" className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600 text-center" onClick={() => setIsOpen(false)}>Login/Register</Link>

            {/* Mobile User and Notification Section */}
            <div className="flex items-center justify-between px-4">
              <Link to="/user" className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition">
                <User className="h-5 w-5 text-green-500" />
              </Link>
              <button onClick={() => setShowNotifications(!showNotifications)} className="relative p-2 text-gray-400 hover:text-white">
                <Bell className="h-6 w-6" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
