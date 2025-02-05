import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';

interface PayPalPaymentFormProps {
  onSuccess: () => void;
  amount: number;
}

const PayPalPaymentForm: React.FC<PayPalPaymentFormProps> = ({ onSuccess, amount }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayPalCheckout = async () => {
    setIsLoading(true);

    try {
      // In a real app, integrate with PayPal SDK here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      onSuccess();
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 px-4 py-3 rounded-md">
        <p className="text-sm text-gray-700">
          Amount to pay: <span className="font-medium">${amount.toFixed(2)} USD</span>
        </p>
      </div>

      <button
        onClick={handlePayPalCheckout}
        disabled={isLoading}
        className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        <CreditCard className="h-5 w-5 mr-2" />
        {isLoading ? 'Processing...' : 'Pay with PayPal'}
      </button>

      <p className="mt-2 text-sm text-gray-500 text-center">
        You will be redirected to PayPal to complete your payment securely.
      </p>
    </div>
  );
};

export default PayPalPaymentForm;