"use client"
import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started',
      features: [
        '5 design projects',
        'Basic templates',
        'Standard resolution downloads',
        'Community support'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$12',
      description: 'Best for professionals',
      features: [
        'Unlimited design projects',
        'Premium templates',
        'High-resolution downloads',
        'Priority support',
        'Brand kit access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Team',
      price: '$24',
      description: 'Perfect for teams',
      features: [
        'Everything in Pro',
        'Advanced team features',
        'Brand management',
        'Analytics dashboard',
        'Custom templates',
        'API access'
      ],
      popular: false
    }
  ];

  return (
    <section id='pricing' className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent mb-4">
            <Sparkles size={16} />
            <span className="text-sm font-semibold uppercase tracking-wider">Pricing Plans</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free and scale as you grow. All plans come with a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                plan.popular ? 'ring-2 ring-[#8A3FFC] scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white hover:shadow-lg'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-[#8A3FFC] hover:text-[#8A3FFC]'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
