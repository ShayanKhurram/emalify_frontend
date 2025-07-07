//leads.tsx
"use client"
import React, { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SendData from "@/components/SendData"
import { 
  Search, 
  Filter, 
  Mail, 
  Building, 
  User, 
  Calendar,
  TrendingUp,
  Download,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  Send,
  Users
} from 'lucide-react'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getAllData } from "@/actions/crud"

interface Lead {
  id: number
  name: string
  email: string
  company: string
  job_title: string
  industry: string
  lead_source: string
  pain_point: string
  need_score: number
  message: string
  created_at?: string
}

const Leads = () => {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterIndustry, setFilterIndustry] = useState('all')
  const [filterSource, setFilterSource] = useState('all')
  const [sortBy, setSortBy] = useState('created_at')

  // Load data on component mount
  useEffect(() => {
    const loadLeads = async () => {
      try {
        const results = await getAllData()
        setLeads(results)
      } catch (error) {
        console.error('Error loading leads:', error)
      } finally {
        setLoading(false)
      }
    }

    loadLeads()
  }, [])

  // Get unique industries and sources for filters
  const industries = [...new Set(leads.map(lead => lead.industry))]
  const sources = [...new Set(leads.map(lead => lead.lead_source))]

  // Filter and search logic
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesIndustry = filterIndustry === 'all' || lead.industry === filterIndustry
    const matchesSource = filterSource === 'all' || lead.lead_source === filterSource
    
    return matchesSearch && matchesIndustry && matchesSource
  })

  // Get need score color
  const getNeedScoreColor = (score: number) => {
    if (score >= 8) return 'bg-red-100 text-red-800 border-red-200'
    if (score >= 6) return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    return 'bg-green-100 text-green-800 border-green-200'
  }

  // Get lead source color
  const getSourceColor = (source: string) => {
    const colors = {
      'LinkedIn': 'bg-blue-100 text-blue-800',
      'Website': 'bg-green-100 text-green-800',
      'Email Campaign': 'bg-purple-100 text-purple-800',
      'Event': 'bg-orange-100 text-orange-800',
      'Referral': 'bg-pink-100 text-pink-800',
      'Cold Call': 'bg-gray-100 text-gray-800',
    }
    return colors[source as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  // Action handlers
  const handleViewDetails = (leadId: number) => {
    
    return <SendData lead_id={leadId} />
    // Add your view details logic here
  }

  const handleEditLead = (leadId: number) => {
    console.log('Edit lead:', leadId)
    // Add your edit lead logic here
  }

  const handleDeleteLead = (leadId: number) => {
    console.log('Delete lead:', leadId)
    // Add your delete lead logic here
    if (confirm('Are you sure you want to delete this lead?')) {
      setLeads(leads.filter(lead => lead.id !== leadId))
    }
  }

  // Stats calculation
  const totalLeads = leads.length
  const highPriorityLeads = leads.filter(lead => lead.need_score >= 8).length
  const avgNeedScore = leads.length > 0 ? leads.reduce((sum, lead) => sum + lead.need_score, 0) / leads.length : 0

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading leads...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <Users className="w-8 h-8 text-blue-600" />
                Emailify
              </h1>
              <p className="text-gray-600 mt-2">
                Manage your sales prospects and automated email campaigns
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Send className="w-4 h-4 mr-2" />
                Send Campaign
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Total Leads</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">{totalLeads}</span>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  +12% this week
                </Badge>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">High Priority</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-red-600">{highPriorityLeads}</span>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Need Score ≥8
                </Badge>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Avg Need Score</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-600">{avgNeedScore.toFixed(1)}</span>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Filters & Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search leads by name, email, or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-11"
                  />
                </div>
              </div>
              
              <Select value={filterIndustry} onValueChange={setFilterIndustry}>
                <SelectTrigger className="w-full md:w-48 h-11">
                  <SelectValue placeholder="Filter by industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterSource} onValueChange={setFilterSource}>
                <SelectTrigger className="w-full md:w-48 h-11">
                  <SelectValue placeholder="Filter by source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  {sources.map(source => (
                    <SelectItem key={source} value={source}>
                      {source}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Leads Table */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">
              Lead Database ({filteredLeads.length} leads)
            </CardTitle>
            <CardDescription>
              Click on any lead to view details and send automated emails
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold">Lead Info</TableHead>
                    <TableHead className="font-semibold">Company</TableHead>
                    <TableHead className="font-semibold">Source</TableHead>
                    <TableHead className="font-semibold">Pain Point</TableHead>
                    <TableHead className="font-semibold">Need Score</TableHead>
                    <TableHead className="font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeads.map((lead) => (
                    <TableRow key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900">{lead.name}</div>
                          <div className="text-sm text-gray-500 flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {lead.email}
                          </div>
                          <div className="text-xs text-gray-400">
                            ID: {lead.id}
                          </div>
                        </div>
                      </TableCell>
                      
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900 flex items-center gap-1">
                            <Building className="w-3 h-3" />
                            {lead.company}
                          </div>
                          <div className="text-sm text-gray-500">{lead.job_title}</div>
                          <Badge variant="outline" className="text-xs">
                            {lead.industry}
                          </Badge>
                        </div>
                      </TableCell>
                      
                      <TableCell>
                        <Badge className={getSourceColor(lead.lead_source)}>
                          {lead.lead_source}
                        </Badge>
                      </TableCell>
                      
                      <TableCell>
                        <div className="max-w-40 truncate text-sm text-gray-600" title={lead.pain_point}>
                          {lead.pain_point}
                        </div>
                        {lead.message && (
                          <div className="text-xs text-gray-400 mt-1 max-w-40 truncate" title={lead.message}>
                            Note: {lead.message}
                          </div>
                        )}
                      </TableCell>
                      
                      <TableCell>
                        <Badge className={getNeedScoreColor(lead.need_score)}>
                          {lead.need_score}/10
                        </Badge>
                      </TableCell>
                      
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <SendData lead_id={lead.id} />
                          
                            <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <span  className="bg-green-500  sr-only">Send</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem 
                                className="cursor-pointer"
                                onClick={() => handleViewDetails(lead.id)}
                              >
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                className="cursor-pointer"
                                onClick={() => handleEditLead(lead.id)}
                              >
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Lead
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem 
                                className="cursor-pointer text-red-600"
                                onClick={() => handleDeleteLead(lead.id)}
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete Lead
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {filteredLeads.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No leads found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Leads