import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </div>
  )
}
