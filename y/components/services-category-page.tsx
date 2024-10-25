'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Star, IndianRupee, MapPin, Phone, Clock } from 'lucide-react'

// Sample vendor data for Mandap Decoration
const mandapDecorationVendors = [
  { id: 1, name: 'Raj Tent House', rating: 4.5, price: 75000, services: ['Mandap Setup', 'Stage Decoration', 'Lighting'], address: 'Mumbai, Maharashtra', phone: '+91 9876543210', experience: 15, availability: 'Mon-Sun, 9 AM - 8 PM' },
  { id: 2, name: 'Royal Decorators', rating: 4.3, price: 85000, services: ['Floral Arrangements', 'Lighting Design', 'Theme Decoration'], address: 'Delhi, NCR', phone: '+91 9876543211', experience: 12, availability: 'Tue-Sun, 10 AM - 9 PM' },
  { id: 3, name: 'Elegant Events', rating: 4.7, price: 95000, services: ['Customized Themes', 'Backdrop Design', 'Entrance Decor'], address: 'Jaipur, Rajasthan', phone: '+91 9876543212', experience: 18, availability: 'Mon-Sat, 9 AM - 7 PM' },
  { id: 4, name: 'Dream Weddings', rating: 4.6, price: 80000, services: ['Mandap Design', 'Floral Decor', 'Seating Arrangement'], address: 'Bangalore, Karnataka', phone: '+91 9876543213', experience: 10, availability: 'Wed-Mon, 10 AM - 8 PM' },
  { id: 5, name: 'Vibrant Vows', rating: 4.8, price: 100000, services: ['Luxury Mandaps', 'LED Setups', 'Themed Decorations'], address: 'Udaipur, Rajasthan', phone: '+91 9876543214', experience: 20, availability: 'Mon-Sun, 8 AM - 10 PM' },
  { id: 6, name: 'Blissful Beginnings', rating: 4.4, price: 70000, services: ['Traditional Decor', 'Modern Themes', 'Eco-friendly Options'], address: 'Chennai, Tamil Nadu', phone: '+91 9876543215', experience: 8, availability: 'Tue-Sun, 9 AM - 8 PM' },
  { id: 7, name: 'Marigold Moments', rating: 4.9, price: 110000, services: ['Premium Floral Decor', 'Customized Mandaps', 'Lighting Solutions'], address: 'Kolkata, West Bengal', phone: '+91 9876543216', experience: 25, availability: 'Mon-Sat, 10 AM - 9 PM' },
  { id: 8, name: 'Radiant Rituals', rating: 4.2, price: 65000, services: ['Budget-friendly Decor', 'DIY Options', 'Rental Services'], address: 'Ahmedabad, Gujarat', phone: '+91 9876543217', experience: 5, availability: 'Wed-Mon, 9 AM - 7 PM' },
  { id: 9, name: 'Opulent Occasions', rating: 4.7, price: 120000, services: ['Celebrity-style Setups', 'Destination Wedding Decor', 'VIP Services'], address: 'Goa', phone: '+91 9876543218', experience: 15, availability: 'Mon-Sun, 24/7' },
  { id: 10, name: 'Timeless Traditions', rating: 4.5, price: 90000, services: ['Regional Theme Specialties', 'Vintage Decor', 'Cultural Fusion Designs'], address: 'Lucknow, Uttar Pradesh', phone: '+91 9876543219', experience: 22, availability: 'Tue-Sun, 8 AM - 8 PM' },
  { id: 11, name: 'Ethereal Elegance', rating: 4.6, price: 105000, services: ['Minimalist Designs', 'Contemporary Setups', 'Artistic Installations'], address: 'Pune, Maharashtra', phone: '+91 9876543220', experience: 13, availability: 'Mon-Sat, 9 AM - 9 PM' },
  { id: 12, name: 'Festive Flair', rating: 4.3, price: 75000, services: ['Seasonal Themes', 'Festival-inspired Decor', 'Color Coordination'], address: 'Hyderabad, Telangana', phone: '+91 9876543221', experience: 9, availability: 'Wed-Mon, 10 AM - 8 PM' },
  { id: 13, name: 'Regal Revelry', rating: 4.8, price: 130000, services: ['Palace-themed Setups', 'Royal Mandaps', 'Luxury Draping'], address: 'Jodhpur, Rajasthan', phone: '+91 9876543222', experience: 30, availability: 'Mon-Sun, 8 AM - 10 PM' },
  { id: 14, name: 'Green Gala', rating: 4.4, price: 85000, services: ['Eco-friendly Decor', 'Sustainable Designs', 'Natural Elements'], address: 'Dehradun, Uttarakhand', phone: '+91 9876543223', experience: 7, availability: 'Tue-Sun, 9 AM - 7 PM' },
  { id: 15, name: 'Starry Soirees', rating: 4.7, price: 115000, services: ['Night-time Specialties', 'Illumination Experts', 'Celestial Themes'], address: 'Chandigarh', phone: '+91 9876543224', experience: 11, availability: 'Mon-Sat, 11 AM - 11 PM' },
]

const allVendors = {
  'mandap-decoration': mandapDecorationVendors,
  // Add more categories as needed
}

export function Page({ params }: { params: { category: string } }) {
  const category = params.category.replace('-', ' ')
  const vendors = allVendors[params.category] || []

  const [priceRange, setPriceRange] = useState([0, 200000])
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)

  const allServices = Array.from(new Set(vendors.flatMap(v => v.services)))

  if (!allVendors[params.category]) {
    return (
      <div className="py-10 bg-gradient-to-r from-pink-100 to-orange-100">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-pink-800 mb-8">Category Not Found</h1>
          <p className="text-lg text-gray-600">We're sorry, but we couldn't find any vendors for the category: {category}</p>
          <Link href="/" className="mt-4 inline-block">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">Return to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const filteredVendors = vendors.filter(vendor => 
    vendor.price >= priceRange[0] &&
    vendor.price <= priceRange[1] &&
    (selectedServices.length === 0 || vendor.services.some(service => selectedServices.includes(service))) &&
    vendor.rating >= minRating
  )


  return (
    <div className="py-10 bg-gradient-to-r from-pink-100 to-orange-100">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-pink-800 mb-8 capitalize">{category} Vendors</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters */}
          <div className="md:col-span-1">
            <Card className="bg-white shadow-lg sticky top-4">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-pink-700">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Price Range</h3>
                  <Slider
                    min={0}
                    max={200000}
                    step={5000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0].toLocaleString('en-IN')}</span>
                    <span>₹{priceRange[1].toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Services</h3>
                  {allServices.map(service => (
                    <div key={service} className="flex items-center space-x-2 mb-2">
                      <Checkbox
                        id={`service-${service}`}
                        checked={selectedServices.includes(service)}
                        onCheckedChange={(checked) => {
                          setSelectedServices(
                            checked
                              ? [...selectedServices, service]
                              : selectedServices.filter((s) => s !== service)
                          )
                        }}
                      />
                      <Label htmlFor={`service-${service}`}>{service}</Label>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Minimum Rating</h3>
                  <Slider
                    min={0}
                    max={5}
                    step={0.5}
                    value={[minRating]}
                    onValueChange={(value) => setMinRating(value[0])}
                    className="mb-2"
                  />
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span>{minRating.toFixed(1)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vendor Listings */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 gap-6">
              {filteredVendors.map((vendor) => (
                <Card key={vendor.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-48 md:h-full relative">
                        <Image
                          src="/placeholder.svg"
                          alt={vendor.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <CardHeader>
                        <CardTitle className="text-2xl text-pink-700">{vendor.name}</CardTitle>
                        <CardDescription className="text-orange-600 flex items-center">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-medium">{vendor.rating}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-green-600 mb-2">
                          <IndianRupee className="w-4 h-4 mr-1" />
                          <span className="font-medium">Starting from ₹{vendor.price.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          <strong>Services:</strong> {vendor.services.join(', ')}
                        </div>
                        <div className="text-sm text-gray-600 flex items-center mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {vendor.address}
                        </div>
                        <div className="text-sm text-gray-600 flex items-center mb-2">
                          <Phone className="w-4 h-4 mr-1" />
                          {vendor.phone}
                        </div>
                        <div className="text-sm text-gray-600 flex items-center mb-2">
                          <Clock className="w-4 h-4 mr-1" />
                          {vendor.availability}
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>Experience:</strong> {vendor.experience} years
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/vendors/${vendor.id}`} className="w-full">
                          <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">View Details</Button>
                        </Link>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            {filteredVendors.length === 0 && (
              <p className="text-center text-gray-600 mt-8">No vendors match your current filters. Please adjust your criteria.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}