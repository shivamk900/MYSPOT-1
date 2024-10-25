'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Star, CreditCard, Users } from "lucide-react"

const cardDistributors = [
  {
    id: 1,
    name: "Swift Card Distributors",
    description: "Fast and reliable card distribution across major cities",
    locations: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
    priceRange: "₹2 - ₹5 per card",
    contact: "+91 98765 43210",
    email: "info@swiftcard.com",
    rating: 4.7,
    reviews: 230,
    teamSize: "50+ distributors"
  },
  {
    id: 2,
    name: "PrecisionPost",
    description: "Targeted distribution with advanced tracking systems",
    locations: ["Hyderabad", "Pune", "Kolkata", "Ahmedabad"],
    priceRange: "₹3 - ₹7 per card",
    contact: "+91 87654 32109",
    email: "support@precisionpost.com",
    rating: 4.9,
    reviews: 180,
    teamSize: "30+ distributors"
  },
  {
    id: 3,
    name: "EcoDistribute",
    description: "Eco-friendly distribution solutions for conscious businesses",
    locations: ["Jaipur", "Chandigarh", "Lucknow", "Bhopal"],
    priceRange: "₹4 - ₹8 per card",
    contact: "+91 76543 21098",
    email: "hello@ecodistribute.com",
    rating: 4.5,
    reviews: 150,
    teamSize: "25+ distributors"
  },
  {
    id: 4,
    name: "LocalReach",
    description: "Specialized in reaching remote and rural areas",
    locations: ["Guwahati", "Patna", "Raipur", "Bhubaneswar"],
    priceRange: "₹3 - ₹10 per card",
    contact: "+91 65432 10987",
    email: "contact@localreach.com",
    rating: 4.6,
    reviews: 120,
    teamSize: "40+ distributors"
  }
]

export default function Component() {
  const [selectedDistributor, setSelectedDistributor] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Card Distribution Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {cardDistributors.map((distributor) => (
          <Card key={distributor.id} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{distributor.name}</span>
                <CreditCard className="h-6 w-6 text-blue-500" />
              </CardTitle>
              <CardDescription>{distributor.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                <span>{distributor.locations.join(", ")}</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="h-4 w-4 mr-2 text-gray-500" />
                <span>{distributor.priceRange}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                <span>{distributor.contact}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-500" />
                <span>{distributor.email}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-400" />
                <span>{distributor.rating} ({distributor.reviews} reviews)</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-gray-500" />
                <span>{distributor.teamSize}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={() => setSelectedDistributor(distributor)}>
                    Contact for Service
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Contact {selectedDistributor?.name}</DialogTitle>
                    <DialogDescription>
                      Fill in the details to request card distribution service.
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
                      <Label htmlFor="location" className="text-right">
                        Location
                      </Label>
                      <Select>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedDistributor?.locations.map((location, index) => (
                            <SelectItem key={index} value={location.toLowerCase()}>{location}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="cardCount" className="text-right">
                        Card Count
                      </Label>
                      <Input id="cardCount" type="number" placeholder="Number of cards" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="message" className="text-right">
                        Message
                      </Label>
                      <Textarea id="message" placeholder="Any special requirements?" className="col-span-3" />
                    </div>
                  </form>
                  <DialogFooter>
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">Submit Request</Button>
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
