'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tent, Phone, IndianRupee, Star, Calendar, Users, MapPin } from "lucide-react"

const tentHouses = [
  {
    id: 1,
    name: "Royal Tents & Events",
    description: "Luxury tents for weddings and corporate events",
    location: "Mumbai, Maharashtra",
    pricePerDay: 15000,
    contact: "+91 98765 43210",
    rating: 4.8,
    reviews: 230,
    capacity: "Up to 500 guests",
    specialities: ["Wedding Tents", "Corporate Events", "Beach Parties"]
  },
  {
    id: 2,
    name: "Green Canopy Solutions",
    description: "Eco-friendly tent options for sustainable events",
    location: "Bangalore, Karnataka",
    pricePerDay: 12000,
    contact: "+91 87654 32109",
    rating: 4.6,
    reviews: 180,
    capacity: "Up to 300 guests",
    specialities: ["Eco-friendly Tents", "Garden Parties", "Music Festivals"]
  },
  {
    id: 3,
    name: "Desert Oasis Tents",
    description: "Specialized in Rajasthani style tents for destination weddings",
    location: "Jaipur, Rajasthan",
    pricePerDay: 18000,
    contact: "+91 76543 21098",
    rating: 4.9,
    reviews: 210,
    capacity: "Up to 400 guests",
    specialities: ["Destination Weddings", "Cultural Events", "Royal Themes"]
  },
  {
    id: 4,
    name: "Mountain View Tents",
    description: "Durable tents for hill station events and camping",
    location: "Shimla, Himachal Pradesh",
    pricePerDay: 10000,
    contact: "+91 65432 10987",
    rating: 4.7,
    reviews: 150,
    capacity: "Up to 200 guests",
    specialities: ["Hill Station Weddings", "Camping Events", "Adventure Retreats"]
  }
]

export default function Component() {
  const [selectedTentHouse, setSelectedTentHouse] = useState(null)
  const [days, setDays] = useState(1)

  const calculateTotalPrice = (pricePerDay, days) => {
    return pricePerDay * days
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-800">Tent House Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {tentHouses.map((tentHouse) => (
          <Card key={tentHouse.id} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{tentHouse.name}</span>
                <Tent className="h-6 w-6 text-orange-500" />
              </CardTitle>
              <CardDescription>{tentHouse.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                <span>{tentHouse.location}</span>
              </div>
              <div className="flex items-center">
                <IndianRupee className="h-4 w-4 mr-2 text-gray-500" />
                <span>₹{tentHouse.pricePerDay.toLocaleString('en-IN')} per day</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                <span>{tentHouse.contact}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-400" />
                <span>{tentHouse.rating} ({tentHouse.reviews} reviews)</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-gray-500" />
                <span>{tentHouse.capacity}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {tentHouse.specialities.map((speciality, index) => (
                  <span key={index} className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {speciality}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" onClick={() => setSelectedTentHouse(tentHouse)}>
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Book with {selectedTentHouse?.name}</DialogTitle>
                    <DialogDescription>
                      Fill in the details to book your tent service.
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
                      <Label htmlFor="phone" className="text-right">
                        Phone
                      </Label>
                      <Input id="phone" type="tel" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="eventType" className="text-right">
                        Event Type
                      </Label>
                      <Select>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedTentHouse?.specialities.map((speciality, index) => (
                            <SelectItem key={index} value={speciality.toLowerCase()}>{speciality}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="days" className="text-right">
                        Number of Days
                      </Label>
                      <Input 
                        id="days" 
                        type="number" 
                        min="1" 
                        value={days}
                        onChange={(e) => setDays(parseInt(e.target.value) || 1)}
                        className="col-span-3" 
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="date" className="text-right">
                        Start Date
                      </Label>
                      <Input id="date" type="date" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="guests" className="text-right">
                        Guests
                      </Label>
                      <Input id="guests" type="number" placeholder="Number of guests" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="message" className="text-right">
                        Message
                      </Label>
                      <Textarea id="message" placeholder="Any special requirements?" className="col-span-3" />
                    </div>
                  </form>
                  <DialogFooter className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-0">
                      Total Price: ₹{calculateTotalPrice(selectedTentHouse?.pricePerDay || 0, days).toLocaleString('en-IN')}
                    </div>
                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">Confirm Booking</Button>
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
