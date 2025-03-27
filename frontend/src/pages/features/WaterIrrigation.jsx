import { motion } from 'framer-motion';
import { useState } from 'react';
import { Droplets, Cloud, Thermometer, Plane as Plant, ArrowRight } from 'lucide-react';

const seasons = ['spring', 'summer', 'autumn', 'winter'];
const soilTypes = ['sandy', 'clay', 'loamy', 'silt', 'peat'];
const crops = ['rice', 'wheat', 'corn', 'cotton', 'sugarcane'];

export default function WaterIrrigation() {
  const [formData, setFormData] = useState({
    season: 'spring',
    soilType: 'loamy',
    cropType: 'rice',
    soilMoisture: '',
    fieldSize: ''
  });

  const [result, setResult] = useState(null);

  const calculateIrrigation = (e) => {
    e.preventDefault();

    const baseWater = 100; // Base water requirement in liters per square meter
    const moistureFactor = (100 - Number(formData.soilMoisture)) / 100;
    const seasonFactor = {
      summer: 1.4,
      spring: 1.2,
      autumn: 1.0,
      winter: 0.8
    }[formData.season];

    const soilFactor = {
      sandy: 1.3,
      clay: 0.8,
      loamy: 1.0,
      silt: 1.1,
      peat: 0.9
    }[formData.soilType];

    const waterAmount = baseWater * moistureFactor * seasonFactor * soilFactor;

    setResult({
      waterAmount: Math.round(waterAmount * Number(formData.fieldSize)),
      frequency: formData.soilType === 'sandy' ? 'Every 2-3 days' : 'Weekly',
      recommendations: [
        'Water early morning or late evening to minimize evaporation',
        'Monitor soil moisture regularly and adjust irrigation accordingly',
        'Consider using mulch to retain soil moisture',
        'Install rain sensors to avoid over-irrigation'
      ],
      schedule: [
        '5:00 AM - First irrigation cycle',
        '6:30 PM - Second irrigation cycle (if needed)',
        'Skip irrigation on rainy days',
        'Adjust timing based on local weather conditions'
      ]
    });
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1597821324722-16991ac0a1cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGVyJTIwaXJyaWdhdGlvbiUyMGZvciUyMHBsYW50fGVufDB8fDB8fHww"
          alt="Irrigation System"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 mt-15">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 rounded-lg p-8 backdrop-blur-sm opacity-10"
        >
          <div className="flex items-center gap-3 mb-6 ">
            <Droplets className="h-8 w-8 text-green-500" />
            <h1 className="text-3xl font-bold text-white">Water Irrigation Calculator</h1>
          </div>

          <div className="prose prose-invert mb-8">
            <p className="text-gray-300">
              Get precise irrigation recommendations based on your crop, soil type, and environmental conditions.
              Our system calculates optimal water requirements to ensure efficient water usage and healthy crop growth.
            </p>
          </div>

          <form onSubmit={calculateIrrigation} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Season
                </label>
                <div className="relative">
                  <Cloud className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={formData.season}
                    onChange={(e) => setFormData({ ...formData, season: e.target.value })}
                    className="block w-full pl-10 pr-4 py-3 bg-gray-800 border-gray-700 rounded-lg text-white focus:border-green-500 focus:ring-green-500"
                  >
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="autumn">Autumn</option>
                    <option value="winter">Winter</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Soil Type
                </label>
                <div className="relative">
                  <Plant className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={formData.soilType}
                    onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
                    className="block w-full pl-10 pr-4 py-3 bg-gray-800 border-gray-700 rounded-lg text-white focus:border-green-500 focus:ring-green-500"
                  >
                    <option value="sandy">Sandy Soil</option>
                    <option value="clay">Clay Soil</option>
                    <option value="loamy">Loamy Soil</option>
                    <option value="silt">Silt Soil</option>
                    <option value="peat">Peat Soil</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Crop Type
                </label>
                <div className="relative">
                  <Plant className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={formData.cropType}
                    onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
                    className="block w-full pl-10 pr-4 py-3 bg-gray-800 border-gray-700 rounded-lg text-white focus:border-green-500 focus:ring-green-500"
                  >
                    <option value="rice">Rice</option>
                    <option value="wheat">Wheat</option>
                    <option value="corn">Corn</option>
                    <option value="cotton">Cotton</option>
                    <option value="sugarcane">Sugarcane</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Soil Moisture (%)
                </label>
                <div className="relative">
                  <Thermometer className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.soilMoisture}
                    onChange={(e) => setFormData({ ...formData, soilMoisture: e.target.value })}
                    placeholder="Enter soil moisture %"
                    className="block w-full pl-10 pr-4 py-3 bg-gray-800 border-gray-700 rounded-lg text-white focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Field Size (Acres)
                </label>
                <div className="relative">
                  <Plant className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={formData.fieldSize}
                    onChange={(e) => setFormData({ ...formData, fieldSize: e.target.value })}
                    placeholder="Enter field size"
                    className="block w-full pl-10 pr-4 py-3 bg-gray-800 border-gray-700 rounded-lg text-white focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-black rounded-full font-semibold hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                Calculate Water Requirements <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Water Requirements</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400">Required Water Amount</p>
                      <p className="text-2xl font-bold text-green-500">{result.waterAmount} Liters</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Irrigation Frequency</p>
                      <p className="text-white">{result.frequency}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Irrigation Schedule</h3>
                  <ul className="space-y-2">
                    {result.schedule.map((item, index) => (
                      <li key={index} className="text-gray-300 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Recommendations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        <Droplets className="w-5 h-5 text-green-500" />
                      </div>
                      <p className="text-gray-300">{recommendation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}