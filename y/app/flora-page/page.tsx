'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Flower, Phone, IndianRupee, Star, Calendar } from "lucide-react"

const flowerShops = [
  {
    id: 1,
    name: "Blooming Bliss",
    description: "Specializing in wedding and corporate event floral arrangements",
    contact: "+91 98765 43210",
    priceRange: "₹5,000 - ₹50,000",
    rating: 4.8,
    reviews: 120,
    events: ["Weddings", "Corporate", "Birthdays"]
  },
  {
    id: 2,
    name: "Petal Paradise",
    description: "Eco-friendly flower arrangements for all occasions",
    contact: "+91 87654 32109",
    priceRange: "₹3,000 - ₹30,000",
    rating: 4.6,
    reviews: 95,
    events: ["Weddings", "Festivals", "Home Decor"]
  },
  {
    id: 3,
    name: "Floral Fantasies",
    description: "Luxury floral designs for high-end events",
    contact: "+91 76543 21098",
    priceRange: "₹10,000 - ₹100,000",
    rating: 4.9,
    reviews: 150,
    events: ["Celebrity Weddings", "Fashion Shows", "Gala Dinners"]
  },
  {
    id: 4,
    name: "Green Thumb Florists",
    description: "Sustainable and locally sourced flower arrangements",
    contact: "+91 65432 10987",
    priceRange: "₹2,000 - ₹20,000",
    rating: 4.7,
    reviews: 80,
    events: ["Eco-Weddings", "Corporate", "Local Festivals"]
  }
]

export default function Component() {
  const [selectedShop, setSelectedShop] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Flower Service Agencies</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {flowerShops.map((shop) => (
          <Card key={shop.id} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{shop.name}</span>
                <Flower className="h-6 w-6 text-pink-500" />
              </CardTitle>
              <CardDescription>{shop.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                <span>{shop.contact}</span>
              </div>
              <div className="flex items-center">
                <IndianRupee className="h-4 w-4 mr-2 text-gray-500" />
                <span>{shop.priceRange}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-400" />
                <span>{shop.rating} ({shop.reviews} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {shop.events.map((event, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {event}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white" onClick={() => setSelectedShop(shop)}>
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Book with {selectedShop?.name}</DialogTitle>
                    <DialogDescription>
                      Fill in the details to book your floral arrangement.
                    </DialogDescription>
                  </DialogHeader>
                  <form className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input id="email" type="email" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="event" className="text-right">
                        Event Type
                      </Label>
                      <Select>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedShop?.events.map((event, index) => (
                            <SelectItem key={index} value={event.toLowerCase()}>{event}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="date" className="text-right">
                        Event Date
                      </Label>
                      <Input id="date" type="date" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="budget" className="text-right">
                        Budget
                      </Label>
                      <Input id="budget" type="number" placeholder="Enter your budget" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="message" className="text-right">
                        Message
                      </Label>
                      <Textarea id="message" placeholder="Any special requests?" className="col-span-3" />
                    </div>
                  </form>
                  <DialogFooter>
                    <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white">Book Appointment</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
