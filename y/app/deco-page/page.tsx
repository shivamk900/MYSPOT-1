import { Star, Phone, Mail, MapPin, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const decorationVendors = [
  {
    name: "Elegant Events Decor",
    description: "Specializing in luxurious wedding and gala decorations",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+1 (555) 123-4567",
    email: "info@elegantevents.com",
    address: "123 Luxury lane , delhi , India",
    rating: 4.9
  },
  {
    name: "Rustic Charm Decorators",
    description: "Creating cozy and charming atmospheres for any occasion",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+1 (555) 234-5678",
    email: "hello@rusticcharm.com",
    address: "456 Barn Road, Mumbai, India",
    rating: 4.7
  },
  {
    name: "Modern Minimalist Designs",
    description: "Clean, sleek decor for contemporary events and spaces",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+1 (555) 345-6789",
    email: "design@modernminimalist.com",
    address: "789 Sleek Street, Banglore, India",
    rating: 4.8
  },
  {
    name: "Bohemian Bliss Decor",
    description: "Free-spirited and eclectic decorations for unique events",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+1 (555) 456-7890",
    email: "boho@bohemianbliss.com",
    address: "101 Gypsy Avenue, Shimla, India",
    rating: 4.6
  },
  {
    name: "Seasonal Splendor",
    description: "Themed decorations for every season and holiday",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+1 (555) 567-8901",
    email: "info@seasonalsplendor.com",
    address: "202 Four Seasons Boulevard, bareily, India",
    rating: 4.7
  },
  {
    name: "Corporate Chic Decor",
    description: "Professional and stylish decorations for business events",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+1 (555) 678-9012",
    email: "events@corporatechic.com",
    address: "303 Business Park Way, Noida, India",
    rating: 4.8
  },
  {
    name: "Whimsical Wonderland",
    description: "Magical and fantastical decorations for children's parties",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+1 (555) 789-0123",
    email: "magic@whimsicalwonderland.com",
    address: "404 Fairytale Road, New Delhi, India",
    rating: 4.9
  },
  {
    name: "Eco-Friendly Embellishments",
    description: "Sustainable and environmentally conscious event decorations",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+1 (555) 890-1234",
    email: "green@ecofriendly.com",
    address: "505 Recycle Way, Bihar, India",
    rating: 4.7
  },
  {
    name: "Vintage Vogue Decor",
    description: "Timeless and elegant vintage-inspired decorations",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+1 (555) 901-2345",
    email: "retro@vintagevogue.com",
    address: "606 Antique Alley, kolkata, India",
    rating: 4.8
  },
  {
    name: "Tech-Savvy Decorators",
    description: "Cutting-edge decorations with LED and interactive elements",
    image: "/placeholder.svg?height=200&width=300",
    phone: "+1 (555) 012-3456",
    email: "future@techsavvy.com",
    address: "707 Silicon Street, Chennai, India",
    rating: 4.6
  }
]

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-12 bg-pink-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Decoration Vendors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {decorationVendors.map((vendor, index) => (
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
                      <Calendar className="w-4 h-4 mr-2" />
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
                      {/* Add a booking form here */}
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
