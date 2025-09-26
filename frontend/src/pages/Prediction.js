import React, { useState } from 'react';
import { predict } from '../services/api';

function Prediction() {
  const [formData, setFormData] = useState({
    exudates_count: '',
    hemorrhages_count: '',
    microaneurysms_count: '',
    vessel_tortuosity: '',
    faz_area: '',
    macular_thickness: '',
    rnfl_thickness: '',
    deep_feature_1: '',
    deep_feature_2: '',
    deep_feature_3: '',
    age: '',
    systolic_bp: '',
    diastolic_bp: '',
    fasting_glucose: '',
    hba1c: '',
    diabetes_duration: '',
    history_hypertension: '',
    visual_acuity: '',
    retinal_disorder: ''
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await predict(formData);
      setResult(response.data);
    } catch (err) {
      console.error('Prediction failed:', err);
    }
    setLoading(false);
  };

  const getRiskColor = (level) => {
    switch(level) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Diabetic Retinopathy Prediction</h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Patient Data</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Exudates Count"
                className="p-3 border rounded-lg"
                value={formData.exudates_count}
                onChange={(e) => setFormData({...formData, exudates_count: e.target.value})}
              />
              <input
                type="number"
                placeholder="Hemorrhages Count"
                className="p-3 border rounded-lg"
                value={formData.hemorrhages_count}
                onChange={(e) => setFormData({...formData, hemorrhages_count: e.target.value})}
              />
              <input
                type="number"
                placeholder="Microaneurysms Count"
                className="p-3 border rounded-lg"
                value={formData.microaneurysms_count}
                onChange={(e) => setFormData({...formData, microaneurysms_count: e.target.value})}
              />
              <input
                type="number"
                step="0.01"
                placeholder="Vessel Tortuosity"
                className="p-3 border rounded-lg"
                value={formData.vessel_tortuosity}
                onChange={(e) => setFormData({...formData, vessel_tortuosity: e.target.value})}
              />
              <input
                type="number"
                step="0.01"
                placeholder="FAZ Area"
                className="p-3 border rounded-lg"
                value={formData.faz_area}
                onChange={(e) => setFormData({...formData, faz_area: e.target.value})}
              />
              <input
                type="number"
                placeholder="Macular Thickness"
                className="p-3 border rounded-lg"
                value={formData.macular_thickness}
                onChange={(e) => setFormData({...formData, macular_thickness: e.target.value})}
              />
              <input
                type="number"
                placeholder="RNFL Thickness"
                className="p-3 border rounded-lg"
                value={formData.rnfl_thickness}
                onChange={(e) => setFormData({...formData, rnfl_thickness: e.target.value})}
              />
              <input
                type="number"
                placeholder="Age"
                className="p-3 border rounded-lg"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
              />
              <input
                type="number"
                placeholder="Systolic BP"
                className="p-3 border rounded-lg"
                value={formData.systolic_bp}
                onChange={(e) => setFormData({...formData, systolic_bp: e.target.value})}
              />
              <input
                type="number"
                placeholder="Diastolic BP"
                className="p-3 border rounded-lg"
                value={formData.diastolic_bp}
                onChange={(e) => setFormData({...formData, diastolic_bp: e.target.value})}
              />
              <input
                type="number"
                step="0.01"
                placeholder="Fasting Glucose"
                className="p-3 border rounded-lg"
                value={formData.fasting_glucose}
                onChange={(e) => setFormData({...formData, fasting_glucose: e.target.value})}
              />
              <input
                type="number"
                step="0.01"
                placeholder="HbA1c"
                className="p-3 border rounded-lg"
                value={formData.hba1c}
                onChange={(e) => setFormData({...formData, hba1c: e.target.value})}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Predicting...' : 'Predict Risk'}
            </button>
          </form>
        </div>

        {result && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Prediction Result</h3>
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${getRiskColor(result.risk_level)}`}>
                <h4 className="text-lg font-semibold">Risk Level: {result.risk_level}</h4>
                <p>Confidence: {(result.confidence * 100).toFixed(1)}%</p>
              </div>
              <div className="text-sm text-gray-600">
                <p>Prediction Value: {result.prediction}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Prediction;