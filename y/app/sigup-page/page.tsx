import React from 'react'
import { Mail, Lock, User, ArrowRight } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
            Myspot
          </h2>
          <p className="mt-2 text-center text-sm text-violet-600">
            Create your account and start planning your dream wedding
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Label htmlFor="full-name" className="sr-only">
                Full Name
              </Label>
              <Input
                id="full-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-violet-300 placeholder-violet-500 text-violet-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div>
              <Label htmlFor="email-address" className="sr-only">
                Email address
              </Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-violet-300 placeholder-violet-500 text-violet-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-violet-300 placeholder-violet-500 text-violet-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <Label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-violet-300 placeholder-violet-500 text-violet-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup defaultValue="buyer" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="buyer" id="buyer" />
                <Label htmlFor="buyer">I'm a Buyer</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="vendor" id="vendor" />
                <Label htmlFor="vendor">I'm a Vendor</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center">
            <Checkbox id="terms" required />
            <Label
              htmlFor="terms"
              className="ml-2 block text-sm text-violet-900"
            >
              I agree to the{' '}
              <a href="#" className="font-medium text-violet-600 hover:text-violet-500">
                Terms and Conditions
              </a>
            </Label>
          </div>

          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <User className="h-5 w-5 text-violet-300 group-hover:text-violet-200" aria-hidden="true" />
              </span>
              Sign up
            </Button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-violet-600">
            Already have an account?{' '}
            <a href="/vendor-page" className="font-medium text-violet-600 hover:text-violet-500">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
