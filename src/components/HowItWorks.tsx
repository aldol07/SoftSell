'use client'

import { motion } from 'framer-motion'
import { Upload, DollarSign, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Upload License',
    description: 'Submit your software license details through our secure platform'
  },
  {
    icon: DollarSign,
    title: 'Get Valuation',
    description: 'Receive a fair market value assessment within 24 hours'
  },
  {
    icon: CheckCircle,
    title: 'Get Paid',
    description: 'Accept the offer and receive payment within 3 business days'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 