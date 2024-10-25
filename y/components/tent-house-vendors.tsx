'use client'

import React from 'react'
import { Star, MapPin, DollarSign, Users, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const tentVendors = [
  {
    id: 1,
    name: "Elegant Canopies",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 120,
    location: "Mumbai, Maharashtra",
    priceRange: "₹10,000 - ₹50,000",
    capacity: "50-500 guests",
    specialties: ["Wedding Tents", "Mandap Decor", "Lighting"],
  },
  {
    id: 2,
    name: "Royal Marquees",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 95,
    location: "Delhi, NCR",
    priceRange: "₹15,000 - ₹75,000",
    capacity: "100-1000 guests",
    specialties: ["Luxury Tents", "Air-Conditioned Setups", "Customized Themes"],
  },
  {
    id: 3,
    name: "Eco-Friendly Shelters",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 80,
    location: "Bangalore, Karnataka",
    priceRange: "₹8,000 - ₹40,000",
    capacity: "30-300 guests",
    specialties: ["Sustainable Materials", "Garden Weddings", "Bohemian Setups"],
  },
  {
    id: 4,
    name: "Majestic Pavilions",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 110,
    location: "Jaipur, Rajasthan",
    priceRange: "₹20,000 - ₹100,000",
    capacity: "200-2000 guests",
    specialties: ["Royal Themes", "Multi-day Events", "Traditional Decor"],
  },
]

export function TentHouseVendorsComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Tent House Vendors</h1>
        
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Label htmlFor="search">Search</Label>
            <Input id="search" placeholder="Search vendors..." />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Select>
              <SelectTrigger id="location">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="jaipur">Jaipur</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="price-range">Price Range</Label>
            <Select>
              <SelectTrigger id="price-range">
                <SelectValue placeholder="Select price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="budget">Budget (₹5,000 - ₹20,000)</SelectItem>
                <SelectItem value="mid-range">Mid-range (₹20,000 - ₹50,000)</SelectItem>
                <SelectItem value="luxury">Luxury (₹50,000+)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="capacity">Capacity</Label>
            <Select>
              <SelectTrigger id="capacity">
                <SelectValue placeholder="Select capacity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small (Up to 100 guests)</SelectItem>
                <SelectItem value="medium">Medium (100-500 guests)</SelectItem>
                <SelectItem value="large">Large (500+ guests)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tentVendors.map((vendor) => (
            <Card key={vendor.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={vendor.image} alt={vendor.name} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{vendor.name}</CardTitle>
                <CardDescription className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>{vendor.rating} ({vendor.reviews} reviews)</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{vendor.location}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{vendor.priceRange}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{vendor.capacity}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {vendor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary">{specialty}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Details</Button>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Check Availability
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}