import { Star, Phone, Mail, MapPin, Calendar, Palette } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const cardDesignVendors = [
  {
    name: "Elegant Designs",
    description: "Luxurious wedding and event card designs with intricate details",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 98765 43210",
    email: "info@elegantdesigns.com",
    address: "123 Wedding Lane, Mumbai, Maharashtra",
    rating: 4.9
  },
  {
    name: "Festival Flair Creations",
    description: "Vibrant and colorful card designs for all types of festivals and celebrations",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 87654 32109",
    email: "hello@festivalflair.com",
    address: "456 Celebration Road, Delhi, NCR",
    rating: 4.7
  },
  {
    name: "Corporate Chic Designs",
    description: "Professional and sleek card designs for corporate events and conferences",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 76543 21098",
    email: "business@corporatechic.com",
    address: "789 Business Park, Bangalore, Karnataka",
    rating: 4.8
  },
  {
    name: "Eco-Friendly Artistry",
    description: "Sustainable and beautiful card designs for environmentally conscious events",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 65432 10987",
    email: "green@ecofriendlyart.com",
    address: "101 Green Street, Pune, Maharashtra",
    rating: 4.6
  },
  {
    name: "Traditional Touches",
    description: "Classic Indian designs for weddings and traditional ceremonies",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 54321 09876",
    email: "info@traditionalcards.com",
    address: "202 Heritage Road, Jaipur, Rajasthan",
    rating: 4.9
  },
  {
    name: "Digital Delights",
    description: "Modern e-card designs and digital solutions for tech-savvy clients",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 43210 98765",
    email: "hello@digitaldelights.com",
    address: "303 Tech Park, Hyderabad, Telangana",
    rating: 4.7
  },
  {
    name: "Bollywood Glamour",
    description: "Dramatic and glamorous card designs inspired by Bollywood",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 32109 87654",
    email: "glam@bollywoodglamour.com",
    address: "404 Starry Lane, Mumbai, Maharashtra",
    rating: 4.8
  },
  {
    name: "Destination Dream Designs",
    description: "Specialized card designs for destination weddings and events",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 21098 76543",
    email: "travel@destinationdream.com",
    address: "505 Paradise Road, Goa",
    rating: 4.5
  },
  {
    name: "Fusion Artworks",
    description: "Unique card designs blending various cultural elements for diverse celebrations",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 10987 65432",
    email: "fusion@fusionartworks.com",
    address: "606 Harmony Street, Kolkata, West Bengal",
    rating: 4.7
  },
  {
    name: "Royal Impressions",
    description: "Opulent and regal card designs for high-end weddings and events",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+91 09876 54321",
    email: "luxury@royalimpressions.com",
    address: "707 Palace Road, Udaipur, Rajasthan",
    rating: 4.9
  }
]

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-12 bg-pink-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Card Design Vendors</h1>
      <p className="text-center text-blue-500 mb-8">Specializing in Events, Festivals, and Weddings</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardDesignVendors.map((vendor, index) => (
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
                      <Palette className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-white">
                    <DialogHeader>
                      <DialogTitle className="text-blue-600">Book {vendor.name}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500">
                        To book {vendor.name} for your event, festival, or wedding card design, please fill out the form below or contact us directly:
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
                          <label htmlFor="event-type" className="block text-sm font-medium text-gray-700">Event Type</label>
                          <select id="event-type" name="event-type" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                            <option>Wedding</option>
                            <option>Festival</option>
                            <option>Corporate Event</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Event Date</label>
                          <input type="date" id="date" name="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                        </div>
                        <div>
                          <label htmlFor="design-style" className="block text-sm font-medium text-gray-700">Preferred Design Style</label>
                          <input type="text" id="design-style" name="design-style" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g., Modern, Traditional, Minimalist" />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Details</label>
                          <textarea id="message" name="message" rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Tell us more about your event and design preferences"></textarea>
                        </div>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                          <Calendar className="w-4 h-4 mr-2" />
                          Submit Design Request
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