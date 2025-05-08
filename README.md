# SoftSell - Software License Resale Platform

A modern, responsive marketing website for a fictional software license resale startup. Built with Next.js, TypeScript, and Tailwind CSS.

## Features Implemented

- 🎨 Modern, responsive design with Tailwind CSS
- 🌙 Dark mode support
- ✨ Smooth animations using Framer Motion
- 📱 Mobile-first approach
- 🔍 SEO optimization with meta tags
- 💬 AI-powered chat widget (simulated)
- 📝 Contact form with frontend validation
- ⭐ Customer testimonials
- 🎯 Clear call-to-actions

## Design Choices

- **Color Scheme**: Blue and purple gradient for primary actions, with a clean white/gray background
- **Typography**: Inter font for optimal readability
- **Layout**: Single-page design with clear section hierarchy
- **Animations**: Subtle fade and slide animations for better user engagement
- **Components**: Modular design with reusable components
- **Accessibility**: Semantic HTML and ARIA attributes
- **Responsive Design**: Fluid layouts that work on all screen sizes

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   ├── ContactForm.tsx
│   └── ChatWidget.tsx
└── styles/
    └── globals.css
```

## Time Spent

- Project setup: 30 minutes
- Component development: 4 hours
- Styling and animations: 2 hours
- Testing and optimization: 1 hour
- Documentation: 30 minutes

Total: ~8 hours

## Future Improvements

- Add real backend integration for the contact form
- Implement real LLM integration for the chat widget
- Add more interactive features and animations
- Implement analytics tracking
- Add unit and integration tests
- Set up CI/CD pipeline
