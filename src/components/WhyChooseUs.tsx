'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, DollarSign, Users } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Bank-level security for all license transfers and payments'
  },
  {
    icon: Clock,
    title: 'Quick Process',
    description: 'Complete the entire process in as little as 3 business days'
  },
  {
    icon: DollarSign,
    title: 'Best Value',
    description: 'Get up to 80% of retail value for your unused licenses'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated team to guide you through every step'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Why Choose SoftSell
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
              <p className="text-gray-700 dark:text-gray-200">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 