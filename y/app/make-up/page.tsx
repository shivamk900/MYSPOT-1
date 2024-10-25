'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Phone, IndianRupee, Star, Calendar, Users, MapPin, Palette, Scissors, Award, Droplet } from "lucide-react"

const makeupArtists = [
  {
    id: 1,
    name: "Priya Sharma",
    description: "Celebrity makeup artist specializing in bridal and editorial looks",
    location: "Mumbai, Maharashtra",
    pricePerSession: 15000,
    contact: "+91 98765 43210",
    rating: 4.9,
    reviews: 230,
    experience: "10+ years",
    specialities: ["Bridal Makeup", "Editorial Looks", "Airbrush Technique"],
    brands: ["MAC", "Huda Beauty", "Anastasia Beverly Hills"]
  },
  {
    id: 2,
    name: "Rahul Verma",
    description: "Expert in SFX and theatrical makeup",
    location: "Delhi, NCR",
    pricePerSession: 12000,
    contact: "+91 87654 32109",
    rating: 4.7,
    reviews: 180,
    experience: "8 years",
    specialities: ["SFX Makeup", "Theatrical Makeup", "Body Painting"],
    brands: ["Kryolan", "Mehron", "Ben Nye"]
  },
  {
    id: 3,
    name: "Aisha Patel",
    description: "Specializing in natural, glowing looks for all skin types",
    location: "Bangalore, Karnataka",
    pricePerSession: 10000,
    contact: "+91 76543 21098",
    rating: 4.8,
    reviews: 150,
    experience: "6 years",
    specialities: ["Natural Makeup", "Skincare-Focused Looks", "Inclusive Beauty"],
    brands: ["Fenty Beauty", "NARS", "Glossier"]
  },
  {
    id: 4,
    name: "Vikram Singh",
    description: "Experienced in fashion week and runway makeup",
    location: "Kolkata, West Bengal",
    pricePerSession: 18000,
    contact: "+91 65432 10987",
    rating: 4.6,
    reviews: 200,
    experience: "12 years",
    specialities: ["Runway Makeup", "High Fashion Looks", "Avant-Garde Styles"],
    brands: ["Pat McGrath Labs", "Dior", "Chanel"]
  }
]

export default function Component() {
  const [selectedArtist, setSelectedArtist] = useState(null)
  const [people, setPeople] = useState(1)

  const calculateTotalPrice = (pricePerSession, people) => {
    return pricePerSession * people
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-cyan-200 to-sky-300 p-8">
      <h1 className="text-5xl font-bold text-center mb-12 text-teal-800 drop-shadow-md">Makeup Artist</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {makeupArtists.map((artist) => (
          <Card key={artist.id} className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
              <CardTitle className="flex items-center justify-between text-2xl">
                <span>{artist.name}</span>
                <Sparkles className="h-6 w-6" />
              </CardTitle>
              <CardDescription className="text-teal-100">{artist.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center text-teal-700">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{artist.location}</span>
              </div>
              <div className="flex items-center text-teal-700">
                <IndianRupee className="h-5 w-5 mr-2" />
                <span>₹{artist.pricePerSession.toLocaleString('en-IN')} per session</span>
              </div>
              <div className="flex items-center text-teal-700">
                <Phone className="h-5 w-5 mr-2" />
                <span>{artist.contact}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                <span className="text-teal-700">{artist.rating} ({artist.reviews} reviews)</span>
              </div>
              <div className="flex items-center text-teal-700">
                <Users className="h-5 w-5 mr-2" />
                <span>{artist.experience} experience</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {artist.specialities.map((speciality, index) => (
                  <span key={index} className="flex items-center bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    {speciality.includes('Bridal') && <Sparkles className="h-3 w-3 mr-1" />}
                    {speciality.includes('SFX') && <Palette className="h-3 w-3 mr-1" />}
                    {speciality.includes('Natural') && <Droplet className="h-3 w-3 mr-1" />}
                    {speciality.includes('Runway') && <Scissors className="h-3 w-3 mr-1" />}
                    {speciality}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {artist.brands.map((brand, index) => (
                  <span key={index} className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    {brand}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transition-all duration-300" onClick={() => setSelectedArtist(artist)}>
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white/95 backdrop-blur-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-teal-800">Book {selectedArtist?.name}</DialogTitle>
                    <DialogDescription className="text-teal-600">
                      Fill in the details to book your makeup session.
                    </DialogDescription>
                  </DialogHeader>
                  <form className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right text-teal-700">
                        Name
                      </Label>
                      <Input id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right text-teal-700">
                        Email
                      </Label>
                      <Input id="email" type="email" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="phone" className="text-right text-teal-700">
                        Phone
                      </Label>
                      <Input id="phone" type="tel" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="makeupType" className="text-right text-teal-700">
                        Makeup Type
                      </Label>
                      <Select>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select makeup type" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedArtist?.specialities.map((speciality, index) => (
                            <SelectItem key={index} value={speciality.toLowerCase()}>{speciality}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="people" className="text-right text-teal-700">
                        People
                      </Label>
                      <Input 
                        id="people" 
                        type="number" 
                        min="1" 
                        value={people}
                        onChange={(e) => setPeople(parseInt(e.target.value) || 1)}
                        className="col-span-3" 
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="date" className="text-right text-teal-700">
                        Date
                      </Label>
                      <Input id="date" type="date" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="time" className="text-right text-teal-700">
                        Time
                      </Label>
                      <Input id="time" type="time" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="location" className="text-right text-teal-700">
                        Location
                      </Label>
                      <Input id="location" placeholder="Venue address" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="message" className="text-right text-teal-700">
                        Message
                      </Label>
                      <Textarea id="message" placeholder="Any special requests?" className="col-span-3" />
                    </div>
                  </form>
                  <DialogFooter className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-0 text-lg font-semibold text-teal-800">
                      Total Price: ₹{calculateTotalPrice(selectedArtist?.pricePerSession || 0, people).toLocaleString('en-IN')}
                    </div>
                    <Button type="submit" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transition-all duration-300">Confirm Booking</Button>
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
