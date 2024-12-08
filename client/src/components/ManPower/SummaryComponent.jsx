import React from "react";
import { useLocation } from "react-router-dom";

const SummaryComponent = () => {
  const { state } = useLocation(); // Retrieve data from the state passed via navigation
  const { submittedData } = state || {}; // Destructure submittedData

  if (!submittedData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-600">No data available.</p>
      </div>
    );
  }


  const perKmCharge = 10; 
  const distanceCharge = submittedData.distance * perKmCharge;

  // Calculate total charge
  const totalCharge = submittedData.vehicle.charge + distanceCharge;

  return (
    <div className="flex items-center justify-center h-[900px] bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6 border-b pb-4">
          Booking Summary
        </h3>
        <table className="w-full text-left border-collapse border border-gray-300">
          <tbody>
            <tr className="border-b">
              <th className="p-4 text-gray-600 font-medium">Date And Time</th>
              <td className="p-4 text-gray-800">
                {submittedData.selectedDate} - {submittedData.selectedTime}
              </td>
              
            </tr>
            <tr className="border-b">
              <th className="p-4 text-gray-600 font-medium">Name</th>
              <td className="p-4 text-gray-800">{submittedData.name}</td>
            </tr>
            <tr className="border-b">
              <th className="p-4 text-gray-600 font-medium">Phone Number</th>
              <td className="p-4 text-gray-800">+{submittedData.phoneNumber}</td>
            </tr>
            <tr className="border-b">
              <th className="p-4 text-gray-600 font-medium">Pickup Location</th>
              <td className="p-4 text-gray-800">{submittedData.pickupLocation}</td>
            </tr>
            <tr className="border-b">
              <th className="p-4 text-gray-600 font-medium">Dropoff Location</th>
              <td className="p-4 text-gray-800">{submittedData.dropoffLocation}</td>
            </tr>
            <tr className="border-b">
              <th className="p-4 text-gray-600 font-medium">Vehicle</th>
              <td className="p-4 text-gray-800">{submittedData.vehicle.label}</td>
            </tr>
            <tr className="border-b">
              <th className="p-4 text-gray-600 font-medium">Vehicle Charge</th>
              <td className="p-4 text-gray-800">
                {submittedData.vehicle.charge.toFixed(2)} KWD
              </td>
            </tr>
            <tr className="border-b">
              <th className="p-4 text-gray-600 font-medium">Distance</th>
              <td className="p-4 text-gray-800">{submittedData.distance.toFixed(2)} km</td>
            </tr>
            <tr className="border-b">
              <th className="p-4 text-gray-600 font-medium">Distance Charge</th>
              <td className="p-4 text-gray-800">{distanceCharge.toFixed(2)} KWD</td>
            </tr>
            <tr>
              <th className="p-4 text-gray-600 font-bold">Total Charge</th>
              <td className="p-4 text-gray-800 font-bold">{totalCharge.toFixed(2)} KWD</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummaryComponent;
