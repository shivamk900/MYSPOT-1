'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Star, MapPin, Phone, Mail, Car, Calendar, Search } from 'lucide-react'
import Image from 'next/image'

const agencies = [
  { id: 1, name: "Wanderlust Wheels", phone: "+91 98765 43210", email: "info@wanderlustwheels.com", address: "123 Travel Street, Wanderlust City" },
  { id: 2, name: "City Cruisers", phone: "+91 87654 32109", email: "bookings@citycruisers.com", address: "456 Urban Avenue, Metropolis" },
  { id: 3, name: "EcoRide Rentals", phone: "+91 76543 21098", email: "green@ecoride.com", address: "789 Eco Lane, Greenville" },
]

const vehicles = [
  {
    id: 1,
    name: "Economy Hatchback",
    description: "Compact and fuel-efficient, perfect for city driving.",
    capacity: 4,
    transmission: "Manual",
    fuelType: "Petrol",
    rating: 4.5,
    review: "Great little car for getting around the city. Very fuel efficient!",
    agencies: [
      { agencyId: 1, price: 1500 },
      { agencyId: 2, price: 1600 },
      { agencyId: 3, price: 1450 },
    ]
  },
  {
    id: 2,
    name: "Midsize Sedan",
    description: "Comfortable ride for longer journeys and family trips.",
    capacity: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    rating: 4.7,
    review: "Smooth ride and plenty of space for luggage. Perfect for our family vacation.",
    agencies: [
      { agencyId: 1, price: 2500 },
      { agencyId: 2, price: 2400 },
      { agencyId: 3, price: 2600 },
    ]
  },
  {
    id: 3,
    name: "Luxury SUV",
    description: "Spacious and feature-packed for a premium travel experience.",
    capacity: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    rating: 4.9,
    review: "Absolutely luxurious! Made our road trip so comfortable and enjoyable.",
    agencies: [
      { agencyId: 1, price: 5000 },
      { agencyId: 2, price: 5200 },
      { agencyId: 3, price: 4800 },
    ]
  },
  {
    id: 4,
    name: "7-Seater MPV",
    description: "Ideal for large families or group travel.",
    capacity: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    rating: 4.6,
    review: "Plenty of space for our entire family and all our luggage. Very practical.",
    agencies: [
      { agencyId: 1, price: 3500 },
      { agencyId: 2, price: 3600 },
      { agencyId: 3, price: 3400 },
    ]
  },
  {
    id: 5,
    name: "Convertible Sports Car",
    description: "Feel the wind in your hair with this stylish convertible.",
    capacity: 2,
    transmission: "Automatic",
    fuelType: "Petrol",
    rating: 4.8,
    review: "What an experience! Perfect car for a romantic getaway along the coast.",
    agencies: [
      { agencyId: 1, price: 6000 },
      { agencyId: 2, price: 6200 },
      { agencyId: 3, price: 5800 },
    ]
  },
  {
    id: 6,
    name: "Electric Compact Car",
    description: "Eco-friendly option for environmentally conscious travelers.",
    capacity: 4,
    transmission: "Automatic",
    fuelType: "Electric",
    rating: 4.7,
    review: "Loved driving an electric car. Very quiet and smooth, plus we saved on fuel!",
    agencies: [
      { agencyId: 1, price: 2000 },
      { agencyId: 2, price: 2100 },
      { agencyId: 3, price: 1900 },
    ]
  }
]

export function VehicleSearch() {
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles)

  const handleSearch = () => {
    const filtered = vehicles.filter(vehicle => 
      vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.fuelType.toLowerCase().includes(searchTerm.toLowerCase())
    ).filter(vehicle => 
      vehicle.agencies.some(agency => agency.price >= priceRange[0] && agency.price <= priceRange[1])
    )
    setFilteredVehicles(filtered)
  }

  return (
    <div className="container mx-auto py-8 bg-gradient-to-br from-blue-100 to-pink-100 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Vehicle Rental Marketplace</h1>
        <p className="text-xl text-pink-600">Find Your Perfect Ride Across Multiple Agencies</p>
      </header>

      <section className="mb-12">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">AI-Powered Vehicle Search</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <Input 
              placeholder="Search vehicles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600 text-white">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
          <div className="mb-4">
            <Label htmlFor="price-range" className="text-blue-600 mb-2 block">Price Range (₹ per day)</Label>
            <Slider
              id="price-range"
              min={0}
              max={10000}
              step={100}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-blue-600">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-700">Available Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-48">
                <Image
                  src={`/placeholder.svg?height=192&width=384`}
                  alt={`${vehicle.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardHeader className="bg-gradient-to-r from-blue-200 to-pink-200">
                <CardTitle className="text-xl font-semibold text-blue-700">{vehicle.name}</CardTitle>
                <CardDescription className="text-pink-600">{vehicle.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <p className="text-lg font-semibold text-blue-600">
                    From ₹{Math.min(...vehicle.agencies.map(a => a.price))} per day
                  </p>
                </div>
                <div className="space-y-2 text-sm text-blue-600">
                  <div className="flex items-center">
                    <Car className="w-4 h-4 mr-2 text-pink-500" />
                    <span>Capacity: {vehicle.capacity} persons</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-4 h-4 mr-2 text-pink-500" />
                    <span>Transmission: {vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-4 h-4 mr-2 text-pink-500" />
                    <span>Fuel Type: {vehicle.fuelType}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="font-bold text-blue-600">{vehicle.rating}</span>
                    <span className="text-sm text-pink-600 ml-2">/ 5</span>
                  </div>
                  <p className="text-sm italic text-pink-600">"{vehicle.review}"</p>
                </div>
              </CardContent>
              <CardFooter className="bg-gradient-to-r from-blue-200 to-pink-200">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={() => setSelectedVehicle(vehicle)}>View Offers</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] bg-gradient-to-br from-blue-100 to-pink-100">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-blue-700">{selectedVehicle?.name} Offers</DialogTitle>
                      <DialogDescription className="text-pink-600">
                        Compare prices from different agencies and book your preferred option.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {selectedVehicle?.agencies.map(offer => {
                          const agency = agencies.find(a => a.id === offer.agencyId)
                          return (
                            <div key={offer.agencyId} className="p-4 bg-white rounded-lg shadow">
                              <h3 className="font-semibold text-blue-700 mb-2">{agency.name}</h3>
                              <p className="text-pink-600 text-lg font-bold mb-2">₹{offer.price} per day</p>
                              <div className="text-sm text-blue-600 mb-2">
                                <p><span className="font-semibold">Phone:</span> {agency.phone}</p>
                                <p><span className="font-semibold">Email:</span> {agency.email}</p>
                              </div>
                              <Button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white">Book Now</Button>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Partner Agencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agencies.map(agency => (
            <div key={agency.id} className="p-4 bg-gradient-to-r from-blue-100 to-pink-100 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">{agency.name}</h3>
              <div className="text-sm text-pink-600">
                <p className="flex items-center"><Phone className="w-4 h-4 mr-2" />{agency.phone}</p>
                <p className="flex items-center"><Mail className="w-4 h-4 mr-2" />{agency.email}</p>
                <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{agency.address}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}