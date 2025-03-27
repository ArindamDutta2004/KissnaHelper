import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const handleGoogleLogin = async () => {
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 text-center mt-12">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="text-white block mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
                />
              </div>
            )}
            <div>
              <label className="text-white block mb-1">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>

            <div className="mt-4">
              <label className="text-white block mb-1">Mobile Number</label>
              <input
                type="tel"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
                pattern="[0-9]{10}"
                placeholder="Enter your mobile number"
              />
            </div>

            <div>
              <label className="text-white block mb-1">Password</label>
              <input
                type="password"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>
            {isLogin && (
              <div className="text-right">
                <button className="text-green-500 hover:underline text-sm">Forgot Password?</button>
              </div>
            )}
            <button className="w-full bg-green-500 text-black p-3 rounded font-bold hover:bg-green-600 transition-all">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-400">Or continue with</p>
            <button
              className="w-full mt-4 bg-white hover:bg-gray-100 text-black p-3 rounded font-bold flex items-center justify-center"
              onClick={handleGoogleLogin}
            >
              <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: isLogin ? 100 : -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0"
      >
        <div className="text-center p-6">
          <h3 className="text-2xl font-bold text-white mb-4">
            {isLogin ? "New to Kissan Helper?" : "Already have an account?"}
          </h3>
          <p className="text-gray-400 mb-6">
            {isLogin
              ? "Join our community of farmers and grow together."
              : "Welcome back! Login to continue your journey."}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="border-2 border-green-500 text-green-500 px-6 py-2 rounded-full hover:bg-green-500 hover:text-black transition-all"
          >
            {isLogin ? "Register Now" : "Login"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}