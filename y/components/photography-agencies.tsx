'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Star, MapPin, Phone, Mail, Camera, Calendar, Users, DollarSign } from 'lucide-react'
import Image from 'next/image'

const photographyAgencies = [
  {
    id: 1,
    name: "Capture Moments",
    description: "Specializing in wedding and corporate event photography.",
    address: "123 Shutter Street, Mumbai, Maharashtra",
    phone: "+91 98765 43210",
    email: "info@capturemoments.com",
    rating: 4.8,
    review: "Absolutely stunning photos! They captured every special moment perfectly.",
    priceRange: "₹25,000 - ₹100,000 per event",
    specialties: ["Weddings", "Corporate Events", "Fashion Shows"],
    portfolio: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 2,
    name: "Lens Masters",
    description: "Creative photography for all types of events and occasions.",
    address: "456 Flash Avenue, Delhi, NCR",
    phone: "+91 87654 32109",
    email: "bookings@lensmasters.com",
    rating: 4.9,
    review: "Incredible creativity and professionalism. Our photos are works of art!",
    priceRange: "₹20,000 - ₹80,000 per event",
    specialties: ["Birthdays", "Anniversaries", "Cultural Festivals"],
    portfolio: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 3,
    name: "Candid Clicks",
    description: "Capturing genuine emotions and candid moments at your events.",
    address: "789 Memory Lane, Bangalore, Karnataka",
    phone: "+91 76543 21098",
    email: "hello@candidclicks.com",
    rating: 4.7,
    review: "They have a talent for capturing the most genuine and heartfelt moments!",
    priceRange: "₹15,000 - ₹60,000 per event",
    specialties: ["Engagements", "Baby Showers", "Retirement Parties"],
    portfolio: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 4,
    name: "Pixel Perfect",
    description: "High-end photography services for luxury events and celebrities.",
    address: "101 Glamour Road, Mumbai, Maharashtra",
    phone: "+91 65432 10987",
    email: "info@pixelperfect.com",
    rating: 4.9,
    review: "The go-to photographers for celebrity events. Absolutely world-class!",
    priceRange: "₹50,000 - ₹200,000 per event",
    specialties: ["Celebrity Weddings", "Film Premieres", "Fashion Week"],
    portfolio: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 5,
    name: "Nature's Lens",
    description: "Specializing in outdoor and nature-themed event photography.",
    address: "202 Green View, Shimla, Himachal Pradesh",
    phone: "+91 54321 09876",
    email: "shoot@natureslens.com",
    rating: 4.6,
    review: "They made our outdoor wedding look like a fairytale come true!",
    priceRange: "₹30,000 - ₹120,000 per event",
    specialties: ["Destination Weddings", "Eco-friendly Events", "Adventure Sports"],
    portfolio: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
    image: "/placeholder.svg?height=200&width=400"
  }
]

export function PhotographyAgencies() {
  const [selectedAgency, setSelectedAgency] = useState(null)

  return (
    <div className="container mx-auto py-8 px-4 bg-gradient-to-br from-blue-50 to-pink-50 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Event Photography Agencies</h1>
        <p className="text-xl text-pink-600">Capture Your Special Moments with the Best in the Business</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photographyAgencies.map((agency) => (
          <Card key={agency.id} className="flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-48">
              <Image
                src={agency.image}
                alt={`${agency.name} showcase`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <CardHeader className="bg-gradient-to-r from-blue-100 to-pink-100">
              <CardTitle className="text-xl font-semibold text-blue-700">{agency.name}</CardTitle>
              <CardDescription className="text-pink-600">{agency.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-2 text-sm text-blue-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-pink-500" />
                  <span>{agency.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-pink-500" />
                  <span>{agency.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-pink-500" />
                  <span>{agency.email}</span>
                </div>
                <div className="flex items-center">
                  <Camera className="w-4 h-4 mr-2 text-pink-500" />
                  <span>{agency.specialties.join(", ")}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2 text-pink-500" />
                  <span>{agency.priceRange}</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="font-bold text-blue-600">{agency.rating}</span>
                  <span className="text-sm text-pink-600 ml-2">/ 5</span>
                </div>
                <p className="text-sm italic text-pink-600">"{agency.review}"</p>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-blue-700 mb-2">Portfolio Preview</h4>
                <div className="flex space-x-2">
                  {agency.portfolio.map((image, index) => (
                    <div key={index} className="relative w-20 h-20">
                      <Image
                        src={image}
                        alt={`Portfolio image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gradient-to-r from-blue-100 to-pink-100">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={() => setSelectedAgency(agency)}>Book Now</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] bg-gradient-to-br from-blue-50 to-pink-50">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-blue-700">Book {selectedAgency?.name}</DialogTitle>
                    <DialogDescription className="text-pink-600">
                      Fill out the form below to request a booking. We'll get back to you with confirmation details.
                    </DialogDescription>
                  </DialogHeader>
                  <form className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name" className="text-blue-600">Name</Label>
                        <Input id="name" placeholder="Your full name" className="border-blue-300 focus:border-blue-500" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email" className="text-blue-600">Email</Label>
                        <Input id="email" type="email" placeholder="Your email address" className="border-blue-300 focus:border-blue-500" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="phone" className="text-blue-600">Phone</Label>
                        <Input id="phone" type="tel" placeholder="Your phone number" className="border-blue-300 focus:border-blue-500" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="event-date" className="text-blue-600">Event Date</Label>
                        <Input id="event-date" type="date" className="border-blue-300 focus:border-blue-500" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="event-type" className="text-blue-600">Event Type</Label>
                        <Select>
                          <SelectTrigger className="border-blue-300 focus:border-blue-500">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="birthday">Birthday Party</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="guests" className="text-blue-600">Number of Guests</Label>
                        <Input id="guests" type="number" placeholder="Estimated guest count" className="border-blue-300 focus:border-blue-500" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message" className="text-blue-600">Additional Information</Label>
                      <Textarea id="message" placeholder="Any specific requirements or questions?" className="border-blue-300 focus:border-blue-500" />
                    </div>
                  </form>
                  <DialogFooter>
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">Submit Booking Request</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  )
}