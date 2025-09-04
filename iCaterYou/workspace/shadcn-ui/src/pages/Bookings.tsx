import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  Eye,
  Edit,
  Trash2,
  Plus,
  Download,
  Filter,
  Search
} from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Bookings() {
  const [activeTab, setActiveTab] = useState('all');

  // Mock booking data
  const bookings = [
    {
      id: 1,
      eventName: "Maria's Wedding Reception",
      caterer: "Delicious Delights Catering",
      date: "2024-01-15",
      time: "6:00 PM - 11:00 PM",
      guests: 150,
      location: "Grand Ballroom, Iloilo City",
      status: "confirmed",
      total: "₱75,000",
      paymentStatus: "paid",
      menu: "Premium Wedding Package",
      notes: "Vegetarian options for 10 guests"
    },
    {
      id: 2,
      eventName: "Corporate Annual Meeting",
      caterer: "Elite Events Catering",
      date: "2024-01-18",
      time: "12:00 PM - 3:00 PM",
      guests: 80,
      location: "Conference Center, Mandurriao",
      status: "confirmed",
      total: "₱28,000",
      paymentStatus: "pending",
      menu: "Business Lunch Package",
      notes: "Audio/visual equipment needed"
    },
    {
      id: 3,
      eventName: "Birthday Celebration",
      caterer: "Iloilo Flavors Co.",
      date: "2024-01-22",
      time: "2:00 PM - 6:00 PM",
      guests: 50,
      location: "Private Residence, Jaro",
      status: "pending",
      total: "₱25,000",
      paymentStatus: "unpaid",
      menu: "Filipino Fiesta Package",
      notes: "Birthday cake included"
    },
    {
      id: 4,
      eventName: "Graduation Party",
      caterer: "Homestyle Kitchen",
      date: "2024-02-05",
      time: "5:00 PM - 9:00 PM",
      guests: 35,
      location: "Garden Venue, Molo",
      status: "confirmed",
      total: "₱15,750",
      paymentStatus: "paid",
      menu: "Comfort Food Package",
      notes: "Outdoor setup preferred"
    },
    {
      id: 5,
      eventName: "Company Christmas Party",
      caterer: "Seafood Paradise Catering",
      date: "2023-12-20",
      time: "7:00 PM - 12:00 AM",
      guests: 120,
      location: "Hotel Ballroom, City Proper",
      status: "completed",
      total: "₱60,000",
      paymentStatus: "paid",
      menu: "Seafood Feast Package",
      notes: "Live band entertainment"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'default';
      case 'pending': return 'secondary';
      case 'completed': return 'outline';
      case 'cancelled': return 'destructive';
      default: return 'secondary';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'unpaid': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredBookings = bookings.filter(booking => {
    if (activeTab === 'all') return true;
    if (activeTab === 'upcoming') return new Date(booking.date) > new Date();
    if (activeTab === 'past') return new Date(booking.date) < new Date();
    return booking.status === activeTab;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
            <p className="text-gray-600 mt-1">
              Manage all your catering reservations and events
            </p>
          </div>
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Link to="/services">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                <Plus className="h-4 w-4 mr-2" />
                New Booking
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                  <p className="text-2xl font-bold text-gray-900">{bookings.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Upcoming Events</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {bookings.filter(b => new Date(b.date) > new Date()).length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Confirmed</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {bookings.filter(b => b.status === 'confirmed').length}
                  </p>
                </div>
                <Users className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Spent</p>
                  <p className="text-2xl font-bold text-gray-900">₱203K</p>
                </div>
                <MapPin className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-6">
            {/* Bookings List */}
            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <Card key={booking.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      {/* Event Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {booking.eventName}
                            </h3>
                            <p className="text-sm text-gray-600">{booking.caterer}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Badge variant={getStatusColor(booking.status)}>
                              {booking.status}
                            </Badge>
                            <Badge className={getPaymentStatusColor(booking.paymentStatus)}>
                              {booking.paymentStatus}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{booking.date} • {booking.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4" />
                            <span>{booking.guests} guests</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>{booking.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Menu & Notes */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Menu Package</h4>
                        <p className="text-sm text-gray-600 mb-3">{booking.menu}</p>
                        
                        {booking.notes && (
                          <>
                            <h4 className="font-medium text-gray-900 mb-2">Special Notes</h4>
                            <p className="text-sm text-gray-600">{booking.notes}</p>
                          </>
                        )}
                      </div>

                      {/* Actions & Total */}
                      <div className="flex flex-col justify-between">
                        <div className="text-right mb-4">
                          <p className="text-sm text-gray-600">Total Amount</p>
                          <p className="text-2xl font-bold text-gray-900">{booking.total}</p>
                        </div>
                        
                        <div className="flex flex-col space-y-2">
                          <Button size="sm" variant="outline" className="w-full">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                          
                          {booking.status === 'pending' && (
                            <Button size="sm" variant="outline" className="w-full">
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Booking
                            </Button>
                          )}
                          
                          {booking.status !== 'completed' && booking.status !== 'cancelled' && (
                            <Button size="sm" variant="outline" className="w-full text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Cancel
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredBookings.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
                <p className="text-gray-600 mb-6">
                  {activeTab === 'all' 
                    ? "You haven't made any bookings yet." 
                    : `No ${activeTab} bookings found.`
                  }
                </p>
                <Link to="/services">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Make Your First Booking
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}