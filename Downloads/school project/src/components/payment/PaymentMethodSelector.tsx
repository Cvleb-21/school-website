import React from 'react';
import { CreditCard, Phone } from 'lucide-react';

interface PaymentMethodSelectorProps {
  selectedMethod: 'mpesa' | 'paypal';
  onMethodSelect: (method: 'mpesa' | 'paypal') => void;
}

const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  selectedMethod,
  onMethodSelect,
}) => {
  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <h3 className="text-sm font-medium text-gray-900">Payment Method</h3>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <button
          onClick={() => onMethodSelect('mpesa')}
          className={`relative rounded-lg border p-4 flex items-center justify-center text-sm font-medium uppercase hover:border-gray-400 focus:outline-none ${
            selectedMethod === 'mpesa'
              ? 'border-indigo-600 ring-2 ring-indigo-600'
              : 'border-gray-300'
          }`}
        >
          <Phone className="h-5 w-5 mr-2 text-gray-600" />
          M-Pesa
        </button>
        <button
          onClick={() => onMethodSelect('paypal')}
          className={`relative rounded-lg border p-4 flex items-center justify-center text-sm font-medium uppercase hover:border-gray-400 focus:outline-none ${
            selectedMethod === 'paypal'
              ? 'border-indigo-600 ring-2 ring-indigo-600'
              : 'border-gray-300'
          }`}
        >
          <CreditCard className="h-5 w-5 mr-2 text-gray-600" />
          PayPal
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodSelector;