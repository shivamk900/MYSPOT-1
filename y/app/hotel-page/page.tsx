'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Building, Phone, IndianRupee, Star, Calendar, Users, MapPin, Wifi, Coffee, Dumbbell, Utensils } from "lucide-react"

const hotels = [
  {
    id: 1,
    name: "Luxury Palace Hotel",
    description: "5-star luxury hotel with panoramic city views",
    location: "Mumbai, Maharashtra",
    pricePerNight: 15000,
    contact: "+91 98765 43210",
    rating: 4.8,
    reviews: 530,
    rooms: "200 rooms and suites",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Spa", "24/7 Room Service"],
    specialities: ["Business Center", "Rooftop Restaurant", "Wedding Venue"]
  },
  {
    id: 2,
    name: "Green Valley Resort",
    description: "Eco-friendly resort nestled in lush greenery",
    location: "Coorg, Karnataka",
    pricePerNight: 12000,
    contact: "+91 87654 32109",
    rating: 4.6,
    reviews: 420,
    rooms: "150 cottages",
    amenities: ["Free Wi-Fi", "Organic Farm", "Yoga Center", "Nature Trails"],
    specialities: ["Ayurvedic Spa", "Coffee Plantation Tours", "Adventure Activities"]
  },
  {
    id: 3,
    name: "Royal Heritage Haveli",
    description: "Restored royal residence turned boutique hotel",
    location: "Jaipur, Rajasthan",
    pricePerNight: 18000,
    contact: "+91 76543 21098",
    rating: 4.9,
    reviews: 380,
    rooms: "80 heritage rooms",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Royal Spa", "Guided Tours"],
    specialities: ["Cultural Performances", "Cooking Classes", "Vintage Car Collection"]
  },
  {
    id: 4,
    name: "Mountain View Lodge",
    description: "Cozy mountain retreat with stunning Himalayan views",
    location: "Manali, Himachal Pradesh",
    pricePerNight: 8000,
    contact: "+91 65432 10987",
    rating: 4.7,
    reviews: 290,
    rooms: "100 rooms and suites",
    amenities: ["Free Wi-Fi", "Bonfire Area", "Indoor Games", "Trekking Gear"],
    specialities: ["Ski Packages", "Mountain Biking", "Local Handicraft Shop"]
  }
]

export default function Component() {
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [nights, setNights] = useState(1)

  const calculateTotalPrice = (pricePerNight, nights) => {
    return pricePerNight * nights
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Hotel Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {hotels.map((hotel) => (
          <Card key={hotel.id} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{hotel.name}</span>
                <Building className="h-6 w-6 text-purple-500" />
              </CardTitle>
              <CardDescription>{hotel.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                <span>{hotel.location}</span>
              </div>
              <div className="flex items-center">
                <IndianRupee className="h-4 w-4 mr-2 text-gray-500" />
                <span>₹{hotel.pricePerNight.toLocaleString('en-IN')} per night</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                <span>{hotel.contact}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-400" />
                <span>{hotel.rating} ({hotel.reviews} reviews)</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-gray-500" />
                <span>{hotel.rooms}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {hotel.amenities.map((amenity, index) => (
                  <span key={index} className="flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {amenity.includes('Wi-Fi') && <Wifi className="h-3 w-3 mr-1" />}
                    {amenity.includes('Swimming') && <Coffee className="h-3 w-3 mr-1" />}
                    {amenity.includes('Spa') && <Dumbbell className="h-3 w-3 mr-1" />}
                    {amenity.includes('Room Service') && <Utensils className="h-3 w-3 mr-1" />}
                    {amenity}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white" onClick={() => setSelectedHotel(hotel)}>
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Book at {selectedHotel?.name}</DialogTitle>
                    <DialogDescription>
                      Fill in the details to book your stay.
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
                      <Label htmlFor="roomType" className="text-right">
                        Room Type
                      </Label>
                      <Select>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard Room</SelectItem>
                          <SelectItem value="deluxe">Deluxe Room</SelectItem>
                          <SelectItem value="suite">Suite</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="nights" className="text-right">
                        Nights
                      </Label>
                      <Input 
                        id="nights" 
                        type="number" 
                        min="1" 
                        value={nights}
                        onChange={(e) => setNights(parseInt(e.target.value) || 1)}
                        className="col-span-3" 
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="checkIn" className="text-right">
                        Check-in
                      </Label>
                      <Input id="checkIn" type="date" className="col-span-3" />
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
                      <Textarea id="message" placeholder="Any special requests?" className="col-span-3" />
                    </div>
                  </form>
                  <DialogFooter className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-0">
                      Total Price: ₹{calculateTotalPrice(selectedHotel?.pricePerNight || 0, nights).toLocaleString('en-IN')}
                    </div>
                    <Button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white">Confirm Booking</Button>
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
