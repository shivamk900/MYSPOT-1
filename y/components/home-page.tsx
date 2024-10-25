'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Send, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export function HomePageComponent() {
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
      <title>Myspot</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .dropdown-content {\n            display: none;\n        }\n        .dropdown:hover .dropdown-content {\n            display: block;\n        }\n    "
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-purple-600">
           Myspot
            </a>

            <nav className="bg-white border-gray-200 dark:bg-gray-900">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src=" " className="h-8" alt="" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> </span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Cart</a>
                    </li>
                    <li>
                      <a href="/login-page" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Profile</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Complaint Box</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Order History</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* Search Section */}
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-violet-800">
              Find Your Perfect Event Vendors
            </h2>
            <p className="text-lg text-violet-600 mb-8">
              Discover top-rated local vendors for your dream Event
            </p>
            <div className="relative">
              <input
                type="search"
                placeholder="Search for vendors, services, or locations..."
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-violet-300 focus:border-violet-500 focus:ring focus:ring-violet-200 focus:outline-none text-lg"
              />
              <i
                data-feather="search"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-violet-400 h-6 w-6"
              />
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
            <h3 className="text-2xl font-bold text-violet-800 mb-4">
              Plan Your Perfect Day with Ease
            </h3>
            <p className="text-lg text-violet-600 mb-8">
              Let our AI-powered assistant help you create the wedding of your
              dreams
            </p>
            <button className="inline-flex items-center bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-violet-600 transition-all duration-300 shadow-lg">
              <i data-feather="heart" className="mr-2 h-5 w-5" />
              Start Planning Now
            </button>
          </div>
        </main>
        {/* Footer */}
        <footer className="bg-violet-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>© 2023 Wedding Wonderland. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ for happy couples</p>
          </div>
        </footer>

        {/* AI Chatbot */}
        <div className="fixed bottom-4 right-4 w-full max-w-md bg-background border border-border rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <h2 className="text-lg font-semibold">Event Planner Assistant</h2>
            <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
          {isOpen && (
            <>
              <ScrollArea className="h-96 p-4">
                {messages.map((message, index) => (
                  <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                      {message.content}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </ScrollArea>
              <div className="p-4 border-t border-border">
                <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow"
                  />
                  <Button type="submit" size="icon">
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