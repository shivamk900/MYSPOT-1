'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Send, ChevronDown, Heart, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function HomePage() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Namaste! I\'m your Indian Event Planner Assistant. How can I help you plan your special day?' }
  ])
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(true)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      setInput('')
      setTimeout(() => {
        const botReply = getBotReply(input)
        setMessages(prev => [...prev, { role: 'bot', content: botReply }])
      }, 1000)
    }
  }

  const getBotReply = (userInput) => {
    const lowerInput = userInput.toLowerCase()
    if (lowerInput.includes('wedding')) {
      return "Congratulations on your upcoming wedding! In India, weddings are grand celebrations. Would you like suggestions for venues in a particular city? Or shall we discuss themes - traditional or modern?"
    } else if (lowerInput.includes('venue')) {
      return "For venues, it depends on your guest list size and preferred city. In Delhi, Taj Palace is excellent for large gatherings. In Mumbai, Taj Lands End offers beautiful sea views. What's your preferred location?"
    } else if (lowerInput.includes('food')) {
      return "Indian weddings are known for their lavish feasts! Would you prefer a traditional thali-style service or a modern buffet with live counters? We can also arrange for regional specialties based on your preferences."
    } else if (lowerInput.includes('budget')) {
      return "Wedding budgets in India can vary greatly. On average, a middle to upper-middle-class wedding might cost between ₹25 lakhs to ₹70 lakhs. Shall we discuss ways to plan within your specific budget?"
    } else {
      return "That's an interesting aspect of event planning. Could you provide more details about what you're looking for? I'm here to help with all aspects of your special day!"
    }
  }

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Myspot - Indian Wedding & Event Planner</title>
      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-purple-600">
              Myspot
            </a>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-purple-600 hover:text-purple-800">Home</a></li>
                <li><a href="#" className="text-purple-600 hover:text-purple-800">Services</a></li>
                <li><a href="/login-page" className="text-purple-600 hover:text-purple-800">My Profile</a></li>
                <li><a href="#" className="text-purple-600 hover:text-purple-800">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* Search Section */}
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-purple-800">
              Find Your Perfect Event Vendors
            </h2>
            <p className="text-lg text-purple-600 mb-8">
              Discover top-rated local vendors for your dream Event
            </p>
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for vendors, services, or locations..."
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:outline-none text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 h-6 w-6" />
            </div>
          </div>
          {/* Vendor Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Tent House */}
            <a
              href="/tent-page"
              className="flex flex-col items-center justify-center p-4 h-36 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-red-100 hover:bg-red-200"
            >
              <span className="text-4xl mb-2">🏕️</span>
              <span className="text-sm font-medium text-center text-violet-800">
                Tent House
              </span>
            </a>
            {/* Travels */}
            <a
              href="/trav-page"
              className="flex flex-col items-center justify-center p-4 h-36 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-blue-100 hover:bg-blue-200"
            >
              <span className="text-4xl mb-2">🚗</span>
              <span className="text-sm font-medium text-center text-violet-800">
                Travels
              </span>
            </a>
            {/* Photography */}
            <a
              href="/photo-page"
              className="flex flex-col items-center justify-center p-4 h-36 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-green-100 hover:bg-green-200"
            >
              <span className="text-4xl mb-2">📷</span>
              <span className="text-sm font-medium text-center text-violet-800">
                Photography
              </span>
            </a>
            {/* Hotel */}
            <a
              href="/hotel-page"
              className="flex flex-col items-center justify-center p-4 h-36 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-yellow-100 hover:bg-yellow-200"
            >
              <span className="text-4xl mb-2">🏨</span>
              <span className="text-sm font-medium text-center text-violet-800">
                Hotel
              </span>
            </a>
            {/* Caterers */}
            <a
              href="/cate-page"
              className="flex flex-col items-center justify-center p-4 h-36 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-purple-100 hover:bg-purple-200"
            >
              <span className="text-4xl mb-2">🍽️</span>
              <span className="text-sm font-medium text-center text-violet-800">
                Caterers
              </span>
            </a>
            {/* Floral */}
            <a
              href="/flora-page"
              className="flex flex-col items-center justify-center p-4 h-36 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-pink-100 hover:bg-pink-200"
            >
              <span className="text-4xl mb-2">💐</span>
              <span className="text-sm font-medium text-center text-violet-800">
                Floral
              </span>
            </a>
            {/* Card Printing */}
            <a
              href="/card-desi-page"
              className="flex flex-col items-center justify-center p-4 h-36 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-indigo-100 hover:bg-indigo-200"
            >
              <span className="text-4xl mb-2">🖨️</span>
              <span className="text-sm font-medium text-center text-violet-800">
                Card Printing
              </span>
            </a>
            {/* Card Distribution */}
            <a
              href="/card-distribution"
              className="flex flex-col items-center justify-center p-4 h-36 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-orange-100 hover:bg-orange-200"
            >
              <span className="text-4xl mb-2">📮</span>
              <span className="text-sm font-medium text-center text-violet-800">
                Card Distribution
              </span>
            </a>
            {/* Music & DJ */}
            <a
              href="/music-dj"
              className="flex flex-col items-center justify-center p-4 h-36 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-teal-100 hover:bg-teal-200"
            >
              <span className="text-4xl mb-2">🎵</span>
              <span className="text-sm font-medium text-center text-violet-800">
                Music &amp; DJ
              </span>
            </a>
            {/* Makeup Artists */}
            <a
              href="/make-up"
              className="flex flex-col items-center justify-center p-4 h-36 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-rose-100 hover:bg-rose-200"
            >
              <span className="text-4xl mb-2">💄</span>
              <span className="text-sm font-medium text-center text-violet-800">
                Makeup Artists
              </span>
            </a>
            {/* Wedding Planners */}
            <a

              href="/AI-weding"
              className="flex flex-col items-center justify-center p-4 h-36 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-cyan-100 hover:bg-cyan-200"
            >
              <span className="text-4xl mb-2">📋</span>
              <span className="text-sm font-medium text-center text-violet-800">
                AI-Wedding Planners
              </span>
            </a>
            {/* Decorators */}
            <a
              href="/deco-page"
              className="flex flex-col items-center justify-center p-4 h-36 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 bg-lime-100 hover:bg-lime-200"
            >
              <span className="text-4xl mb-2">🎊</span>
              <span className="text-sm font-medium text-center text-violet-800">
                Decorators
              </span>
            </a>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Plan Your Perfect Day with Ease
            </h3>
            <p className="text-lg text-purple-600 mb-8">
              Let our AI-powered assistant help you create the wedding of your dreams
            </p>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg">
              <Heart className="mr-2 h-5 w-5" />
              Start Planning Now
            </Button>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-purple-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>© 2023 Myspot Indian Wedding & Event Planner. All rights reserved.</p>
            <p className="mt-2">Creating unforgettable moments across India</p>
          </div>
        </footer>

        {/* AI Chatbot */}
        <div className="fixed bottom-4 right-4 w-full max-w-md bg-white border border-purple-300 rounded-lg shadow-lg overflow-hidden">
          <div
            className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white flex justify-between items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h2 className="text-lg font-semibold">Event Planner Assistant</h2>
            <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
          {isOpen && (
            <>
              <ScrollArea className="h-96 p-4">
                {messages.map((message, index) => (
                  <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block p-2 rounded-lg ${message.role === 'user'
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                        : 'bg-gray-100 text-purple-800'
                      }`}>
                      {message.content}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </ScrollArea>
              <div className="p-4 border-t border-purple-200">
                <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                  />
                  <Button type="submit" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}