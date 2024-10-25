'use client'

import { useState } from 'react'
import { Star, Phone, Mail, MapPin, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const hotels = [
  {
    id: 1,
    name: "Taj Lake Palace",
    description: "Luxury hotel floating on Lake Pichola",
    address: "Lake Pichola, Udaipur, Rajasthan 313001",
    phone: "+91 294 242 8800",
    email: "lakepalace.udaipur@tajhotels.com",
    price: 35000,
    rating: 4.8,
    reviews: 2150,
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 2,
    name: "The Oberoi Amarvilas",
    description: "Luxury resort with views of the Taj Mahal",
    address: "Taj East Gate Road, Agra, Uttar Pradesh 282001",
    phone: "+91 562 223 1515",
    email: "reservations@oberoihotels.com",
    price: 42000,
    rating: 4.9,
    reviews: 1876,
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 3,
    name: "The Leela Palace Chennai",
    description: "Seaside luxury hotel with panoramic views",
    address: "Adyar Seaface, Chennai, Tamil Nadu 600028",
    phone: "+91 44 3366 1234",
    email: "reservations.chennai@theleela.com",
    price: 28000,
    rating: 4.7,
    reviews: 1589,
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 4,
    name: "Wildflower Hall, Shimla",
    description: "Luxury mountain retreat in the Himalayas",
    address: "Chharabra, Shimla, Himachal Pradesh 171012",
    phone: "+91 177 264 8585",
    email: "reservations@oberoihotels.com",
    price: 32000,
    rating: 4.8,
    reviews: 1352,
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 5,
    name: "Rambagh Palace",
    description: "Former royal residence turned luxury hotel",
    address: "Bhawani Singh Road, Jaipur, Rajasthan 302005",
    phone: "+91 141 238 5700",
    email: "rambagh.jaipur@tajhotels.com",
    price: 38000,
    rating: 4.9,
    reviews: 2103,
    image: "/placeholder.svg?height=200&width=300"
  }
]

export function IndianHotelListingsComponent() {
  const [selectedHotel, setSelectedHotel] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Luxury Indian Hotel Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <Card key={hotel.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-900">{hotel.name}</CardTitle>
              <CardDescription className="text-pink-700">{hotel.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <div className="space-y-2">
                <div className="flex items-center text-blue-800">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{hotel.address}</span>
                </div>
                <div className="flex items-center text-blue-800">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">{hotel.phone}</span>
                </div>
                <div className="flex items-center text-blue-800">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">{hotel.email}</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="font-bold text-blue-900">{hotel.rating}</span>
                  <span className="text-sm text-gray-600 ml-1">({hotel.reviews} reviews)</span>
                </div>
                <div className="text-2xl font-bold text-pink-700">₹{hotel.price.toLocaleString('en-IN')}<span className="text-sm font-normal">/night</span></div>
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setSelectedHotel(hotel)}>Book Now</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Book {selectedHotel?.name}</DialogTitle>
                    <DialogDescription>
                      Enter your details to book your stay at {selectedHotel?.name}. We'll send you a confirmation email shortly.
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
                      <Label htmlFor="check-in" className="text-right">
                        Check-in
                      </Label>
                      <Input id="check-in" type="date" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="check-out" className="text-right">
                        Check-out
                      </Label>
                      <Input id="check-out" type="date" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="guests" className="text-right">
                        Guests
                      </Label>
                      <Select>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5">5+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </form>
                  <DialogFooter>
                    <Button type="submit">Confirm Booking</Button>
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