//form.tsx
"use client"
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Badge } from './ui/badge'
import { AlertCircle, CheckCircle, Loader2, UserPlus } from 'lucide-react'
import { Alert, AlertDescription } from './ui/alert'
import AddLeads from '@/actions/AddLead'

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    job_title: '',
    industry: '',
    lead_source: '',
    pain_point: '',
    need_score: '',
    message: ''
  })

  const FormSubmission = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const result = await AddLeads(formData)
      
      if (result.error) {
        setSubmitStatus('error')
      } else {
        setSubmitStatus('success')
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          company: '',
          job_title: '',
          industry: '',
          lead_source: '',
          pain_point: '',
          need_score: '',
          message: ''
        })
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail',
    'Education', 'Real Estate', 'Marketing', 'Consulting', 'Other'
  ]

  const leadSources = [
    'LinkedIn', 'Website', 'Email Campaign', 'Cold Call', 'Referral',
    'Event', 'Social Media', 'Google Ads', 'Trade Show', 'Other'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <UserPlus className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Add New Lead</h1>
          </div>
          <p className="text-gray-600">Capture and manage your sales prospects with ease</p>
        </div>

        {/* Status Alerts */}
        {submitStatus === 'success' && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Lead added successfully! Ready to send automated emails.
            </AlertDescription>
          </Alert>
        )}

        {submitStatus === 'error' && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              Sorry, an error occurred while adding the lead. Please try again.
            </AlertDescription>
          </Alert>
        )}

        {/* Form Card */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Lead Information</CardTitle>
            <CardDescription className="text-blue-100">
              Fill in the details below to add a new lead to your pipeline
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            <form action={FormSubmission} className="space-y-6">
              {/* Personal Information Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter full name"
                    className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter email address"
                    className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Company Information Section */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Company Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                      Company Name *
                    </Label>
                    <Input
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Enter company name"
                      className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="job_title" className="text-sm font-semibold text-gray-700">
                      Job Title *
                    </Label>
                    <Input
                      name="job_title"
                      id="job_title"
                      value={formData.job_title}
                      onChange={(e) => handleInputChange('job_title', e.target.value)}
                      placeholder="Enter job title"
                      className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-sm font-semibold text-gray-700">
                      Industry *
                    </Label>
                    <Select name="industry" value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                      <SelectTrigger className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lead_source" className="text-sm font-semibold text-gray-700">
                      Lead Source *
                    </Label>
                    <Select name="lead_source" value={formData.lead_source} onValueChange={(value) => handleInputChange('lead_source', value)}>
                      <SelectTrigger className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select lead source" />
                      </SelectTrigger>
                      <SelectContent>
                        {leadSources.map((source) => (
                          <SelectItem key={source} value={source}>
                            {source}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Lead Details Section */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Lead Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="pain_point" className="text-sm font-semibold text-gray-700">
                      Pain Point *
                    </Label>
                    <Input
                      name="pain_point"
                      id="pain_point"
                      value={formData.pain_point}
                      onChange={(e) => handleInputChange('pain_point', e.target.value)}
                      placeholder="What challenge are they facing?"
                      className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="need_score" className="text-sm font-semibold text-gray-700">
                      Need Score (1-10) *
                    </Label>
                    <Input
                      name="need_score"
                      id="need_score"
                      type="number"
                      min="1"
                      max="10"
                      value={formData.need_score}
                      onChange={(e) => handleInputChange('need_score', e.target.value)}
                      placeholder="Rate urgency (1-10)"
                      className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 mt-6">
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                    Additional Notes
                  </Label>
                  <Textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Any additional information about this lead..."
                    rows={4}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 h-12 text-lg font-semibold shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Adding Lead...
                    </>
                  ) : (
                    <>
                      <UserPlus className="mr-2 h-5 w-5" />
                      Add Lead
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Form