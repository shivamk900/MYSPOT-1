'use client'
import { CardFooter } from "@/components/ui/card"; // Make sure this import exists
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Plane, Music, Hotel, Palette, Sparkles, Utensils, Camera, Gift } from "lucide-react"

const services = [
  { id: 'travel', name: 'Travel', icon: Plane, price: 150000 },
  { id: 'music', name: 'Music', icon: Music, price: 75000 },
  { id: 'hotel', name: 'Hotel', icon: Hotel, price: 225000 },
  { id: 'decor', name: 'Decorators', icon: Palette, price: 112500 },
  { id: 'makeup', name: 'Makeup', icon: Sparkles, price: 60000 },
  { id: 'catering', name: 'Catering', icon: Utensils, price: 187500 },
  { id: 'photography', name: 'Photography', icon: Camera, price: 135000 },
  { id: 'gifts', name: 'Wedding Favors', icon: Gift, price: 37500 },
]

export default function Component() {
  const [selectedServices, setSelectedServices] = useState(services.map(s => s.id))
  const [budget, setBudget] = useState(750000)
  const [guests, setGuests] = useState(100)

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  const totalCost = services
    .filter(s => selectedServices.includes(s.id))
    .reduce((sum, service) => sum + service.price, 0)

  const aiSuggestion = () => {
    const remaining = budget - totalCost
    if (remaining > 0) {
      return `Great choices! You have ₹${remaining.toLocaleString('en-IN')} left in your budget. Consider upgrading your ${services.find(s => !selectedServices.includes(s.id))?.name.toLowerCase() || 'services'}.`
    } else if (remaining < 0) {
      return `You're over budget by ₹${Math.abs(remaining).toLocaleString('en-IN')}. Consider removing some services or increasing your budget.`
    } else {
      return "Perfect! You've allocated your entire budget."
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">AI-Powered Wedding Planner</h1>
      
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">Customize Your Wedding</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {services.map((service) => (
            <Card key={service.id} className={`${selectedServices.includes(service.id) ? 'border-purple-500' : 'border-gray-200'}`}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">{service.name}</CardTitle>
                <service.icon className="h-6 w-6 text-purple-500" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Starting from ₹{service.price.toLocaleString('en-IN')}</p>
              </CardContent>
              <CardFooter>
                <Checkbox 
                  id={service.id}
                  checked={selectedServices.includes(service.id)}
                  onCheckedChange={() => toggleService(service.id)}
                />
                <Label htmlFor={service.id} className="ml-2">Select this service</Label>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <Label htmlFor="budget" className="text-lg font-medium mb-2 block">
              Wedding Budget: ₹{budget}
            </Label>
            <Slider
              id="budget"
              min={375000}
              max={3750000}
              step={75000}
              value={[budget]}
              onValueChange={(value) => setBudget(value[0])}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="guests" className="text-lg font-medium mb-2 block">
              Number of Guests: {guests}
            </Label>
            <Input
              id="guests"
              type="number"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 0)}
              min={1}
              max={1000}
            />
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>AI Suggestion</CardTitle>
            <CardDescription>Based on your selections and budget</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{aiSuggestion()}</p>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-purple-800">Total Cost: ₹{totalCost.toLocaleString('en-IN')}</p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Finalize Wedding Plan
          </Button>
        </div>
      </div>
    </div>
  )
}