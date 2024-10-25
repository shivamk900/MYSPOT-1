'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Phone, IndianRupee, Star, Calendar, Users, MapPin, Image, Video, Award, Zap } from "lucide-react"

const photographers = [
  {
    id: 1,
    name: "Aisha Sharma",
    description: "Award-winning wedding and portrait photographer",
    location: "Mumbai, Maharashtra",
    pricePerHour: 5000,
    contact: "+91 98765 43210",
    rating: 4.9,
    reviews: 230,
    experience: "10+ years",
    specialities: ["Wedding Photography", "Portrait Sessions", "Fashion Shoots"],
    equipment: ["DSLR Cameras", "Studio Lighting", "Drone"]
  },
  {
    id: 2,
    name: "Rahul Verma",
    description: "Specializing in wildlife and nature photography",
    location: "Bengaluru, Karnataka",
    pricePerHour: 4000,
    contact: "+91 87654 32109",
    rating: 4.7,
    reviews: 180,
    experience: "8 years",
    specialities: ["Wildlife Photography", "Landscape Shots", "Nature Documentaries"],
    equipment: ["Telephoto Lenses", "All-Terrain Gear", "Underwater Camera"]
  },
  {
    id: 3,
    name: "Priya Patel",
    description: "Creative food and product photographer",
    location: "Delhi, NCR",
    pricePerHour: 3500,
    contact: "+91 76543 21098",
    rating: 4.8,
    reviews: 150,
    experience: "6 years",
    specialities: ["Food Photography", "Product Shoots", "Commercial Advertising"],
    equipment: ["Macro Lenses", "Light Boxes", "Color Calibration Tools"]
  },
  {
    id: 4,
    name: "Vikram Singh",
    description: "Experienced event and corporate photographer",
    location: "Hyderabad, Telangana",
    pricePerHour: 4500,
    contact: "+91 65432 10987",
    rating: 4.6,
    reviews: 200,
    experience: "12 years",
    specialities: ["Corporate Events", "Conference Coverage", "Headshot Sessions"],
    equipment: ["Multiple Camera Bodies", "Wide-Angle Lenses", "Professional Flash Systems"]
  }
]

export default function Component() {
  const [selectedPhotographer, setSelectedPhotographer] = useState(null)
  const [hours, setHours] = useState(1)

  const calculateTotalPrice = (pricePerHour, hours) => {
    return pricePerHour * hours
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Photography Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {photographers.map((photographer) => (
          <Card key={photographer.id} className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{photographer.name}</span>
                <Camera className="h-6 w-6 text-purple-500" />
              </CardTitle>
              <CardDescription>{photographer.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                <span>{photographer.location}</span>
              </div>
              <div className="flex items-center">
                <IndianRupee className="h-4 w-4 mr-2 text-gray-500" />
                <span>₹{photographer.pricePerHour.toLocaleString('en-IN')} per hour</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                <span>{photographer.contact}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-400" />
                <span>{photographer.rating} ({photographer.reviews} reviews)</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-gray-500" />
                <span>{photographer.experience} experience</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {photographer.specialities.map((speciality, index) => (
                  <span key={index} className="flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {speciality.includes('Wedding') && <Image className="h-3 w-3 mr-1" />}
                    {speciality.includes('Wildlife') && <Camera className="h-3 w-3 mr-1" />}
                    {speciality.includes('Food') && <Zap className="h-3 w-3 mr-1" />}
                    {speciality.includes('Corporate') && <Award className="h-3 w-3 mr-1" />}
                    {speciality}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {photographer.equipment.map((item, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white" onClick={() => setSelectedPhotographer(photographer)}>
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Book {selectedPhotographer?.name}</DialogTitle>
                    <DialogDescription>
                      Fill in the details to book your photography session.
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
                          {selectedPhotographer?.specialities.map((speciality, index) => (
                            <SelectItem key={index} value={speciality.toLowerCase()}>{speciality}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="hours" className="text-right">
                        Hours
                      </Label>
                      <Input 
                        id="hours" 
                        type="number" 
                        min="1" 
                        value={hours}
                        onChange={(e) => setHours(parseInt(e.target.value) || 1)}
                        className="col-span-3" 
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="date" className="text-right">
                        Date
                      </Label>
                      <Input id="date" type="date" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="location" className="text-right">
                        Location
                      </Label>
                      <Input id="location" placeholder="Event location" className="col-span-3" />
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
                      Total Price: ₹{calculateTotalPrice(selectedPhotographer?.pricePerHour || 0, hours).toLocaleString('en-IN')}
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
