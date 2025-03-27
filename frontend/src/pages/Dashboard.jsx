import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { Plane as Plant, FlaskRound as Flask, Sprout, Calendar, LineChart, Droplets, FileText } from "lucide-react";

const features = [
  {
    icon: <Plant className="w-8 h-8" />,
    title: "LeafScan Disease Detector",
    description: "LeafScan Disease Detector is an AI-powered system that captures and analyzes plant leaf images using IoT sensors to detect diseases early. It helps farmers and researchers ensure crop health with real-time scanning, precise diagnosis, and sensor-based monitoring. 🌿📸",
    path: "/disease-detection",
    image: "https://images.unsplash.com/photo-1602574759761-d0d9b471495a?w=600&auto=format&fit=crop&q=60",
  },
  {
    icon: <Flask className="w-8 h-8" />,
    title: "NPK Analyzer",
    description: "NPK Analyzer is an AI-powered system that uses IoT sensors to analyze soil nutrients (Nitrogen, Phosphorus, and Potassium) in real-time. It helps farmers optimize fertilization for healthier crops and higher yields. 🌱📡📊",
    image: "https://media.istockphoto.com/id/1842964949/photo/soil-background-with-npk-letter-digital-nutrients-icon-which-necessary-in-plant-life.webp?a=1&b=1&s=612x612&w=0&k=20&c=XRMBJRFrFYBGjfzmPCwaKIJfhJi4OIIkJfMejVj7Wtk=",
    path: "/npk-analysis"
  },
  {
    icon: <Sprout className="w-8 h-8" />,
    title: "Soil Preparation & Seed Selection",
    description: "SoilSeed Analyzer is an AI-powered IoT system that analyzes soil health and recommends the best seeds for optimal crop growth. It helps farmers make data-driven decisions for higher yields and sustainable farming. 🌱📡",
    image: "https://images.unsplash.com/photo-1615469619480-1a7e77deb56c?q=80&w=2070&auto=format&fit=crop",
    path: "/soil-seed-selection"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Seasonal Medicines",
    description: "MediSeason adjusts medications according to seasonal changes, ensuring optimal health and immunity. It helps individuals stay protected from weather-related illnesses with timely recommendations. 💊🌦",
    image: "https://images.unsplash.com/photo-1633457573560-7d18d03af642?q=80&w=2070&auto=format&fit=crop",
    path: "/seasonal-medicines"
  },

  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Detact The Best Soil For Your Crop",
    description: "SoilCrop is a smart system that detects soil type and recommends the best crops for optimal farming. Using AI and IoT, it helps farmers make informed decisions to improve yield and soil health. 🌱🚜",
    image: "https://plus.unsplash.com/premium_photo-1663100110235-8e2b33c305a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGV0YWN0JTIwVGhlJTIwQmVzdCUyMFNvaWwlMjBGb3IlMjBZb3VyJTIwQ3JvcHxlbnwwfHwwfHx8MA%3D%3D",
    path: "/detect-soil"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Crop Yield Prediction",
    description: "CropYield AI is an advanced system that predicts crop yield using AI and real-time data from IoT sensors. It analyzes soil health, weather patterns, and plant growth to help farmers optimize production and maximize harvests. 🌾📊🚜",
    image: "https://images.unsplash.com/photo-1649848648485-30a50cd79cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENyb3AlMjBZaWVsZHxlbnwwfHwwfHx8MA%3D%3D",
    path: "/crop-yield"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "PlantPulse",
    description: "GrowTrack is a real-time dashboard designed to monitor plant health and growth using AI and IoT sensors. It provides live insights on soil moisture, temperature, nutrient levels, and overall plant condition, helping farmers and researchers optimize crop care for better yields. 🌱📊📡",
    path: "/track-growth",
    image: "https://media.istockphoto.com/id/1321636150/photo/tree-growth-in-nature-and-beautiful-morning.webp?a=1&b=1&s=612x612&w=0&k=20&c=IoN0RujW-jL7acsInwuXXc86OCPDr2XrhoivbvHKTVs=",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Water Irrigation",
    description: "SmartIrrigate is an AI-powered system that optimizes water usage through real-time monitoring and automated irrigation. It uses IoT sensors to track soil moisture and weather conditions, ensuring efficient water distribution for healthier crops and sustainable farming. 💧🌱🚜",
    image: "https://plus.unsplash.com/premium_photo-1661845609789-635c5e35c4ba?w=600&auto=format&fit=crop&q=60",
    path: "/irrigation"
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Government Policies",
    description: "PolicyHub is a comprehensive platform that provides real-time updates on government policies, regulations, and legal guidelines. It helps citizens, businesses, and policymakers stay informed and make better decisions with accurate and accessible policy insights. 🏛📜",
    path: "/policies",
    image: "https://media.istockphoto.com/id/1279241810/photo/india-flag-on-minimal-money-concept-table-coins-and-financial-objects-on-flag-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=ddYLEUaLXeawO4hshmk2zX0JTRsXqK11E3z34uPZRic=",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 mt-7">
      <h1 className="text-3xl sm:text-4xl font-bold text-center p-4">
        Welcome to <span className="text-green-500">Kissan Helper</span>
      </h1>

      <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => navigate(feature.path)}
            className={`flex flex-col sm:flex-row items-center bg-gray-900 rounded-xl p-4 sm:p-6 hover:bg-gray-800 transition-all cursor-pointer ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="flex-1 p-4 sm:p-6 w-full sm:w-auto">
              <div className="bg-gray-800 h-40 sm:h-48 rounded-lg overflow-hidden">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Text Section */}
            <div className="flex-1 p-4 sm:p-6 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                <div className="p-3 bg-green-500 rounded-lg text-black flex-shrink-0">
                  {feature.icon}
                </div>
                <h2 className="text-2xl font-bold">{feature.title}</h2>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}