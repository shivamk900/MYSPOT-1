import React from 'react'
import { Star, MapPin, DollarSign, Users, Calendar, Utensils } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const catererVendors = [
  {
    id: 1,
    name: "Delightful Bites Catering",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 150,
    location: "Mumbai, Maharashtra",
    priceRange: "₹800 - ₹1,500 per plate",
    capacity: "50-500 guests",
    specialties: ["Indian", "Continental", "Live Stations"],
  },
  {
    id: 2,
    name: "Royal Feast Services",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 120,
    location: "Delhi, NCR",
    priceRange: "₹1,000 - ₹2,000 per plate",
    capacity: "100-1000 guests",
    specialties: ["Multi-cuisine", "Theme-based Menus", "Dessert Bars"],
  },
  {
    id: 3,
    name: "Green Gourmet Caterers",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 95,
    location: "Bangalore, Karnataka",
    priceRange: "₹700 - ₹1,300 per plate",
    capacity: "30-300 guests",
    specialties: ["Organic", "Vegan Options", "Farm-to-Table"],
  },
  {
    id: 4,
    name: "Spice Route Catering Co.",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    reviews: 180,
    location: "Jaipur, Rajasthan",
    priceRange: "₹900 - ₹1,800 per plate",
    capacity: "75-750 guests",
    specialties: ["Rajasthani", "North Indian", "International Cuisine"],
  },
]

export default function CatererVendors() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-800">Catering Vendors</h1>
        
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Label htmlFor="search">Search</Label>
            <Input id="search" placeholder="Search caterers..." />
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
            <Label htmlFor="price-range">Price Range (per plate)</Label>
            <Select>
              <SelectTrigger id="price-range">
                <SelectValue placeholder="Select price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="budget">Budget (₹500 - ₹1,000)</SelectItem>
                <SelectItem value="mid-range">Mid-range (₹1,000 - ₹1,500)</SelectItem>
                <SelectItem value="luxury">Luxury (₹1,500+)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="cuisine">Cuisine Type</Label>
            <Select>
              <SelectTrigger id="cuisine">
                <SelectValue placeholder="Select cuisine" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="indian">Indian</SelectItem>
                <SelectItem value="continental">Continental</SelectItem>
                <SelectItem value="multi-cuisine">Multi-cuisine</SelectItem>
                <SelectItem value="organic">Organic</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catererVendors.map((vendor) => (
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
                <Button variant="outline">View Menu</Button>
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
                  <Utensils className="w-4 h-4 mr-2" />
                  Book Tasting
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
