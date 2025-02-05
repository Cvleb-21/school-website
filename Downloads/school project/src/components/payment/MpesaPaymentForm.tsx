import React, { useState } from 'react';
import { Phone } from 'lucide-react';

interface MpesaPaymentFormProps {
  onSuccess: () => void;
  amount: number;
}

const MpesaPaymentForm: React.FC<MpesaPaymentFormProps> = ({ onSuccess, amount }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real app, integrate with Mpesa Daraja API here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      onSuccess();
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          M-Pesa Phone Number
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="254700000000"
            required
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Enter the M-Pesa number you want to use for payment
        </p>
      </div>

      <div className="bg-gray-50 px-4 py-3 rounded-md">
        <p className="text-sm text-gray-700">
          Amount to pay: <span className="font-medium">KES {(amount * 150).toFixed(2)}</span>
        </p>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {isLoading ? 'Processing...' : 'Pay with M-Pesa'}
      </button>
    </form>
  );
};

export default MpesaPaymentForm;