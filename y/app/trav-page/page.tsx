import React from 'react'
import { Star, MapPin, DollarSign, Users, Calendar, Plane, Car, Train, Ship } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const travelVendors = [
  {
    id: 1,
    name: "Wanderlust Weddings",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 150,
    location: "Mumbai, Maharashtra",
    priceRange: "₹50,000 - ₹2,00,000 per package",
    specialties: ["Destination Weddings", "Honeymoon Packages", "Group Travel"],
    transportModes: ["Plane", "Car"],
  },
  {
    id: 2,
    name: "Royal Rajasthan Tours",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 120,
    location: "Jaipur, Rajasthan",
    priceRange: "₹30,000 - ₹1,50,000 per package",
    specialties: ["Palace Weddings", "Desert Safaris", "Cultural Tours"],
    transportModes: ["Car", "Camel"],
  },
  {
    id: 3,
    name: "Goa Beach Weddings",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 95,
    location: "Panaji, Goa",
    priceRange: "₹40,000 - ₹1,80,000 per package",
    specialties: ["Beach Ceremonies", "Yacht Parties", "Water Sports"],
    transportModes: ["Plane", "Ship"],
  },
  {
    id: 4,
    name: "Himalayan Bliss",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    reviews: 180,
    location: "Shimla, Himachal Pradesh",
    priceRange: "₹35,000 - ₹1,60,000 per package",
    specialties: ["Mountain Retreats", "Adventure Honeymoons", "Scenic Drives"],
    transportModes: ["Car", "Train"],
  },
  {
    id: 5,
    name: "Kerala Backwaters Weddings",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 110,
    location: "Kochi, Kerala",
    priceRange: "₹45,000 - ₹1,90,000 per package",
    specialties: ["Houseboat Ceremonies", "Ayurvedic Spa Retreats", "Eco-Weddings"],
    transportModes: ["Plane", "Boat"],
  },
  {
    id: 6,
    name: "Golden Triangle Tours",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 85,
    location: "Delhi, NCR",
    priceRange: "₹55,000 - ₹2,20,000 per package",
    specialties: ["Multi-City Weddings", "Historical Tours", "Luxury Train Journeys"],
    transportModes: ["Plane", "Train", "Car"],
  },
  {
    id: 7,
    name: "Andaman Island Escapes",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 130,
    location: "Port Blair, Andaman",
    priceRange: "₹60,000 - ₹2,50,000 per package",
    specialties: ["Island Hopping", "Scuba Diving", "Beach Resorts"],
    transportModes: ["Plane", "Ship"],
  },
  {
    id: 8,
    name: "Udaipur Lake Palaces",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    reviews: 200,
    location: "Udaipur, Rajasthan",
    priceRange: "₹70,000 - ₹3,00,000 per package",
    specialties: ["Lake Palace Weddings", "Royal Experiences", "Vintage Car Tours"],
    transportModes: ["Plane", "Car"],
  },
  {
    id: 9,
    name: "Darjeeling Tea Estate Weddings",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 90,
    location: "Darjeeling, West Bengal",
    priceRange: "₹40,000 - ₹1,70,000 per package",
    specialties: ["Tea Garden Ceremonies", "Mountain Railways", "Trekking Honeymoons"],
    transportModes: ["Train", "Car"],
  },
  {
    id: 10,
    name: "Rann of Kutch Adventures",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 105,
    location: "Bhuj, Gujarat",
    priceRange: "₹35,000 - ₹1,50,000 per package",
    specialties: ["Desert Weddings", "Cultural Immersion", "Handicraft Tours"],
    transportModes: ["Plane", "Car"],
  },
  {
    id: 11,
    name: "Mysore Heritage Tours",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 75,
    location: "Mysore, Karnataka",
    priceRange: "₹30,000 - ₹1,40,000 per package",
    specialties: ["Palace Weddings", "Silk Saree Shopping", "Yoga Retreats"],
    transportModes: ["Train", "Car"],
  },
  {
    id: 12,
    name: "Varanasi Spiritual Journeys",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 95,
    location: "Varanasi, Uttar Pradesh",
    priceRange: "₹25,000 - ₹1,20,000 per package",
    specialties: ["Riverside Ceremonies", "Spiritual Tours", "Boat Rides"],
    transportModes: ["Plane", "Boat"],
  },
]

export default function TravelVendors() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-green-100 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Travel Vendors for Weddings</h1>
        
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Label htmlFor="search">Search</Label>
            <Input id="search" placeholder="Search travel vendors..." />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Select>
              <SelectTrigger id="location">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="jaipur">Jaipur</SelectItem>
                <SelectItem value="goa">Goa</SelectItem>
                <SelectItem value="kerala">Kerala</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
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
                <SelectItem value="budget">Budget (Up to ₹50,000)</SelectItem>
                <SelectItem value="mid-range">Mid-range (₹50,000 - ₹1,50,000)</SelectItem>
                <SelectItem value="luxury">Luxury (₹1,50,000+)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="specialty">Specialty</Label>
            <Select>
              <SelectTrigger id="specialty">
                <SelectValue placeholder="Select specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="destination-weddings">Destination Weddings</SelectItem>
                <SelectItem value="honeymoon-packages">Honeymoon Packages</SelectItem>
                <SelectItem value="adventure-tours">Adventure Tours</SelectItem>
                <SelectItem value="cultural-experiences">Cultural Experiences</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelVendors.map((vendor) => (
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
                    {vendor.transportModes.includes('Plane') && <Plane className="w-4 h-4 mr-1 text-blue-500" />}
                    {vendor.transportModes.includes('Car') && <Car className="w-4 h-4 mr-1 text-green-500" />}
                    {vendor.transportModes.includes('Train') && <Train className="w-4 h-4 mr-1 text-red-500" />}
                    {vendor.transportModes.includes('Ship') && <Ship className="w-4 h-4 mr-1 text-purple-500" />}
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
                <Button variant="outline">View Packages</Button>
                <Button className="bg-gradient-to-r from-blue-500 to-teal-600 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
