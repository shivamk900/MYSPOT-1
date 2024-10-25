'use client'

import React from 'react'
import { MapPin, DollarSign, User, FileText, Image as ImageIcon, Send, Calendar, Tag, Clock, Users } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export function VendorUploadPageComponent() {
  const [priceRange, setPriceRange] = React.useState([1000, 10000])
  const [availableDates, setAvailableDates] = React.useState<Date[]>([])

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value)
  }

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setAvailableDates(prev => {
        const dateExists = prev.some(d => d.toDateString() === date.toDateString())
        if (dateExists) {
          return prev.filter(d => d.toDateString() !== date.toDateString())
        } else {
          return [...prev, date]
        }
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-white">
          <CardTitle className="text-3xl font-bold">Vendor Details Upload</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <Label htmlFor="vendorTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Vendor Title
            </Label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                name="vendorTitle"
                id="vendorTitle"
                className="pl-10 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Business Name"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </Label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                name="location"
                id="location"
                className="pl-10 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Business Address"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">
              Price Range (₹{priceRange[0]} - ₹{priceRange[1]})
            </Label>
            <Slider
              defaultValue={[1000, 10000]}
              max={50000}
              step={100}
              onValueChange={handlePriceRangeChange}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
              Business Bio
            </Label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                <FileText className="h-5 w-5 text-gray-400" />
              </div>
              <Textarea
                name="bio"
                id="bio"
                rows={4}
                className="pl-10 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Tell us about your business..."
              />
            </div>
          </div>

          <div>
            <Label htmlFor="pictures" className="block text-sm font-medium text-gray-700 mb-1">
              Business Pictures
            </Label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload files</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Available Dates
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Select available dates</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="multiple"
                  selected={availableDates}
                  onSelect={handleDateSelect}
                  className="rounded-md border"
                />
              </PopoverContent>
            </Popover>
            <div className="mt-2 flex flex-wrap gap-2">
              {availableDates.map((date) => (
                <Badge key={date.toISOString()} variant="secondary">
                  {date.toLocaleDateString()}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Services Offered
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="catering" />
                <Label htmlFor="catering">Catering</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="decoration" />
                <Label htmlFor="decoration">Decoration</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="photography" />
                <Label htmlFor="photography">Photography</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="music" />
                <Label htmlFor="music">Music & DJ</Label>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">
              Maximum Capacity
            </Label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="number"
                name="capacity"
                id="capacity"
                className="pl-10 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Maximum number of guests"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
              Tags
            </Label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Tag className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                name="tags"
                id="tags"
                className="pl-10 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., outdoor, rustic, elegant (comma separated)"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
              <Send className="mr-2 h-5 w-5" />
              Finish
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}