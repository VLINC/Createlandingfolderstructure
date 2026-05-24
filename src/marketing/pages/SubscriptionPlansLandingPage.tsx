import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  CreditCard,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

// ----- Toggle this to true/false to demo active/inactive subscription view
const hasActiveSubscription = true; // Set to false for inactive subscription demo

// ----- Mock subscription for demo
const mockSubscription = {
  subscriptionId: 'demo_sub_1234',
  subscriptionStatus: 'active',
  subscriptionPriceId: 'price_monthly_99',
  frequency: 'monthly',
  amount: 99,
  monthlyPrice: 99,
  subscriptionUpdatedAt: new Date(),
};

function formatFrequency(freq: string) {
  if (!freq) return 'N/A';
  if (freq === 'biweekly') return 'Bi-weekly';
  return freq.charAt(0).toUpperCase() + freq.slice(1);
}

function getNextPaymentDate(freq: string) {
  if (!freq) return null;
  const today = new Date();
  const nextDate = new Date(today);

  if (freq === 'weekly') {
    nextDate.setDate(today.getDate() + 7);
  } else if (freq === 'biweekly') {
    nextDate.setDate(today.getDate() + 14);
  } else {
    nextDate.setMonth(today.getMonth() + 1);
  }

  return nextDate.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric' 
  });
}

function getBillingInterval(freq: string) {
  if (freq === 'weekly') return '/week';
  if (freq === 'biweekly') return '/2 weeks';
  return '/month';
}

export default function SubscriptionsPageLanding() {
  // Static; no loading state needed
  if (!hasActiveSubscription) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pb-24 pt-28">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <AlertCircle className="w-7 h-7 text-[#D91429]" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            No Active Subscription
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to unlimited cleanings for one low price.
          </p>
          <button
            className="w-full bg-[#D91429] text-white px-5 py-2.5 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            disabled
            style={{ opacity: 0.7, cursor: 'not-allowed' }}
            title="Demo - Plans not available"
          >
            View Plans
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // ------ Active Subscription Demo ------
  const subscription = mockSubscription;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-24">
      <div className="max-w-4xl mx-auto p-3 space-y-3">
        
        {/* Success Banner */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-900 text-sm">Subscription Active</h3>
              <p className="text-xs text-green-700">Unlimited cleanings • Cancel anytime</p>
            </div>
          </div>
        </div>

        {/* Main Subscription Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#D91429] to-[#B71023] p-4 text-white">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <h2 className="text-lg font-bold">Your Plan</h2>
              </div>
              <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs font-semibold">
                {subscription.subscriptionStatus.toUpperCase()}
              </span>
            </div>
            <p className="text-white/90 text-xs">{formatFrequency(subscription.frequency)} unlimited cleanings</p>
          </div>

          {/* Pricing */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-baseline gap-1.5 mb-0.5">
              <span className="text-3xl font-bold text-gray-900">
                ${subscription.amount || subscription.monthlyPrice}
              </span>
              <span className="text-base text-gray-500">
                {getBillingInterval(subscription.frequency)}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Billed {subscription.frequency === 'weekly'  'weekly' : subscription.frequency === 'biweekly'  'every 2 weeks' : 'monthly'}
            </p>
          </div>

          {/* Details Grid */}
          <div className="p-4 grid md:grid-cols-2 gap-3 border-b border-gray-200">
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-[#D91429]" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Next Payment</p>
                <p className="font-semibold text-gray-900 text-sm">
                  {getNextPaymentDate(subscription.frequency)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-4 h-4 text-[#D91429]" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Frequency</p>
                <p className="font-semibold text-gray-900 text-sm">
                  {formatFrequency(subscription.frequency)}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="p-4 flex gap-2">
            <button
              className="flex-1 py-2 px-3 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold"
              disabled
              style={{ opacity: 0.7, cursor: 'not-allowed' }}
              title="Demo - payment management not available"
            >
              Manage Payment
            </button>
            <button
              className="flex-1 py-2 px-3 bg-[#D91429] text-white rounded-lg text-sm font-semibold"
              disabled
              style={{ opacity: 0.7, cursor: 'not-allowed' }}
              title="Demo - switching plan not available"
            >
              Change Plan
            </button>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="font-bold text-gray-900 mb-3 text-sm">What's Included</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              'Unlimited booking requests',
              'All property types & sizes',
              'Standard & deep cleaning',
              '$3 booking fee per service',
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700 text-xs">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cancel Section */}
        <div className="bg-white rounded-xl shadow-md p-4 text-center">
          <p className="text-xs text-gray-600 mb-2">
            Need to cancel You can do so anytime with no penalties.
          </p>
          <button
            className="text-xs font-medium text-red-600 underline"
            disabled
            style={{ opacity: 0.7, cursor: 'not-allowed' }}
            title="Demo - cancel not available"
          >
            Cancel Subscription
          </button>
        </div>
      </div>
    </div>
  );
}












