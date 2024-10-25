import { Star, Phone, Mail, MapPin, Music, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const musicDJVendors = [
  {
    name: "Bollywood Beats",
    description: "Specializing in Bollywood and Punjabi music for weddings and parties",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 98765 43210",
    email: "info@bollywoodbeats.com",
    address: "123 Melody Street, Mumbai, Maharashtra",
    rating: 4.9
  },
  {
    name: "Electro Fusion",
    description: "Blending Indian classical with electronic dance music",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 87654 32109",
    email: "bookings@electrofusion.com",
    address: "456 Techno Lane, Bangalore, Karnataka",
    rating: 4.7
  },
  {
    name: "Desi Rhythms",
    description: "Traditional Indian music with a modern twist for all occasions",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 76543 21098",
    email: "contact@desirhythms.com",
    address: "789 Folk Avenue, Delhi, NCR",
    rating: 4.8
  },
  {
    name: "Trance Tribe",
    description: "Psychedelic trance and Goa-style electronic music specialists",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 65432 10987",
    email: "tribe@trancetribe.com",
    address: "101 Beach Road, Anjuna, Goa",
    rating: 4.6
  },
  {
    name: "Classical Crescendo",
    description: "Hindustani and Carnatic classical music performances",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 54321 09876",
    email: "bookings@classicalcrescendo.com",
    address: "202 Raga Street, Kolkata, West Bengal",
    rating: 4.9
  },
  {
    name: "Bhangra Blast",
    description: "High-energy Punjabi music and dance performances",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 43210 98765",
    email: "party@bhangrablast.com",
    address: "303 Dhol Lane, Chandigarh, Punjab",
    rating: 4.8
  },
  {
    name: "Sufi Soul",
    description: "Soulful Sufi music for spiritual and cultural events",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 32109 87654",
    email: "connect@sufisoul.com",
    address: "404 Qawwali Road, Ajmer, Rajasthan",
    rating: 4.7
  },
  {
    name: "Indie Vibes",
    description: "Showcasing the best of Indian independent music scene",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 21098 76543",
    email: "gigs@indievibes.com",
    address: "505 Hipster Street, Hauz Khas, Delhi",
    rating: 4.5
  },
  {
    name: "Tabla Talks",
    description: "Fusion of tabla with various genres for unique performances",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 10987 65432",
    email: "rhythm@tablatalks.com",
    address: "606 Percussion Lane, Pune, Maharashtra",
    rating: 4.8
  },
  {
    name: "Rockin' Raja",
    description: "Indian rock and metal music for high-octane events",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 09876 54321",
    email: "headbang@rockinraja.com",
    address: "707 Metal Alley, Shillong, Meghalaya",
    rating: 4.6
  }
]

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-12 bg-pink-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Music and DJ Vendors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {musicDJVendors.map((vendor, index) => (
          <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300 border-t-4 border-pink-400">
            <CardHeader className="bg-blue-100">
              <CardTitle className="text-xl text-blue-600">{vendor.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow bg-white">
              <img
                src={vendor.image}
                alt={`${vendor.name} service`}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <p className="text-sm text-gray-600 mb-4">{vendor.description}</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-pink-500" />
                  <span className="text-sm">{vendor.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-pink-500" />
                  <span className="text-sm">{vendor.email}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-pink-500" />
                  <span className="text-sm">{vendor.address}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4 bg-blue-50">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-semibold">{vendor.rating.toFixed(1)}</span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                      <Music className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-white">
                    <DialogHeader>
                      <DialogTitle className="text-blue-600">Book {vendor.name}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500">
                        To book {vendor.name} for your event, please fill out the form below or contact us directly:
                      </p>
                      <ul className="mt-2 space-y-1">
                        <li className="text-sm">Phone: {vendor.phone}</li>
                        <li className="text-sm">Email: {vendor.email}</li>
                      </ul>
                      <form className="mt-4 space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                          <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                          <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                        </div>
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Event Date</label>
                          <input type="date" id="date" name="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                          <textarea id="message" name="message" rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
                        </div>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                          <Calendar className="w-4 h-4 mr-2" />
                          Submit Booking Request
                        </Button>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
