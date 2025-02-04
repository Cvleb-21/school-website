import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CreditCard, Phone } from 'lucide-react';
import PaymentMethodSelector from '../../components/payment/PaymentMethodSelector';
import MpesaPaymentForm from '../../components/payment/MpesaPaymentForm';
import PayPalPaymentForm from '../../components/payment/PayPalPaymentForm';

const CheckoutPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<'mpesa' | 'paypal'>('mpesa');

  // Mock course data - In a real app, fetch this based on courseId
  const course = {
    id: courseId,
    title: 'Complete Web Development Bootcamp',
    price: 99.99,
    instructor: 'John Doe'
  };

  const handlePaymentSuccess = () => {
    // In a real app, verify payment and enroll user
    navigate('/dashboard/courses');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Course Summary */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Checkout</h2>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
              <p className="mt-1 text-sm text-gray-600">by {course.instructor}</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">${course.price}</p>
            </div>
          </div>

          {/* Payment Method Selection */}
          <PaymentMethodSelector
            selectedMethod={selectedMethod}
            onMethodSelect={setSelectedMethod}
          />

          {/* Payment Forms */}
          <div className="px-6 py-4">
            {selectedMethod === 'mpesa' ? (
              <MpesaPaymentForm onSuccess={handlePaymentSuccess} amount={course.price} />
            ) : (
              <PayPalPaymentForm onSuccess={handlePaymentSuccess} amount={course.price} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;