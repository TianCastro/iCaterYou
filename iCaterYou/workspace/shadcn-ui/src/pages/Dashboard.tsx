import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Users, 
  Star, 
  Clock, 
  ChefHat,
  Plus,
  Eye,
  Edit,
  Trash2,
  MapPin,
  Phone,
  Mail,
  DollarSign,
  TrendingUp,
  Package
} from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Dashboard() {
  const [userType, setUserType] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserType = localStorage.getItem('userType');
    
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    
    setUserType(storedUserType || 'client');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
    navigate('/');
  };

  // Mock data for client bookings
  const clientBookings = [
    {
      id: 1,
      caterer: "Delicious Delights Catering",
      event: "Wedding Reception",
      date: "2024-01-15",
      guests: 150,
      status: "confirmed",
      total: "₱75,000"
    },
    {
      id: 2,
      caterer: "Iloilo Flavors Co.",
      event: "Birthday Party",
      date: "2024-01-22",
      guests: 50,
      status: "pending",
      total: "₱25,000"
    }
  ];

  // Mock data for provider services
  const providerServices = [
    {
      id: 1,
      name: "Premium Wedding Package",
      description: "Complete catering service for weddings",
      price: "₱500/person",
      status: "active",
      bookings: 12
    },
    {
      id: 2,
      name: "Corporate Event Package",
      description: "Professional catering for business events",
      price: "₱350/person",
      status: "active",
      bookings: 8
    }
  ];

  const providerBookings = [
    {
      id: 1,
      client: "Maria Santos",
      event: "Wedding Reception",
      date: "2024-01-15",
      guests: 150,
      status: "confirmed",
      total: "₱75,000"
    },
    {
      id: 2,
      client: "John Dela Cruz",
      event: "Corporate Meeting",
      date: "2024-01-18",
      guests: 30,
      status: "pending",
      total: "₱15,000"
    }
  ];

  if (!userType) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {userType === 'client' ? 'My Dashboard' : 'Provider Dashboard'}
            </h1>
            <p className="text-gray-600 mt-1">
              {userType === 'client' 
                ? 'Manage your catering bookings and events' 
                : 'Manage your catering services and bookings'
              }
            </p>
          </div>
          <div className="flex space-x-3 mt-4 sm:mt-0">
            {userType === 'provider' && (
              <Link to="/services/new">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Service
                </Button>
              </Link>
            )}
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userType === 'client' ? (
            <>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                      <p className="text-2xl font-bold text-gray-900">12</p>
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
                      <p className="text-2xl font-bold text-gray-900">3</p>
                    </div>
                    <Clock className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Spent</p>
                      <p className="text-2xl font-bold text-gray-900">₱150K</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Favorite Caterers</p>
                      <p className="text-2xl font-bold text-gray-900">5</p>
                    </div>
                    <Star className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                      <p className="text-2xl font-bold text-gray-900">₱285K</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Bookings</p>
                      <p className="text-2xl font-bold text-gray-900">8</p>
                    </div>
                    <Calendar className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Services Listed</p>
                      <p className="text-2xl font-bold text-gray-900">6</p>
                    </div>
                    <Package className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Rating</p>
                      <p className="text-2xl font-bold text-gray-900">4.8</p>
                    </div>
                    <Star className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {userType === 'client' ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>My Bookings</span>
                  </CardTitle>
                  <CardDescription>
                    Track your catering reservations and events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {clientBookings.map((booking) => (
                      <div key={booking.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{booking.event}</h3>
                          <Badge variant={booking.status === 'confirmed' ? 'default' : 'secondary'}>
                            {booking.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{booking.caterer}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{booking.date}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{booking.guests} guests</span>
                            </span>
                          </div>
                          <span className="font-semibold text-gray-900">{booking.total}</span>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link to="/services">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                        <Plus className="h-4 w-4 mr-2" />
                        Book New Event
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Tabs defaultValue="bookings" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="bookings">Bookings</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                </TabsList>
                
                <TabsContent value="bookings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Bookings</CardTitle>
                      <CardDescription>
                        Manage your customer bookings and reservations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {providerBookings.map((booking) => (
                          <div key={booking.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-gray-900">{booking.event}</h3>
                              <Badge variant={booking.status === 'confirmed' ? 'default' : 'secondary'}>
                                {booking.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">Client: {booking.client}</p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center space-x-4">
                                <span className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{booking.date}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Users className="h-4 w-4" />
                                  <span>{booking.guests} guests</span>
                                </span>
                              </div>
                              <span className="font-semibold text-gray-900">{booking.total}</span>
                            </div>
                            <div className="flex space-x-2 mt-3">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                              {booking.status === 'pending' && (
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  Confirm
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="services">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Services</CardTitle>
                      <CardDescription>
                        Manage your catering service offerings
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {providerServices.map((service) => (
                          <div key={service.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-gray-900">{service.name}</h3>
                              <Badge variant="default">
                                {service.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <span className="font-semibold text-gray-900">{service.price}</span>
                              <span>{service.bookings} bookings</span>
                            </div>
                            <div className="flex space-x-2 mt-3">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="h-4 w-4 mr-1" />
                                Delete
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {userType === 'client' ? (
                  <>
                    <Link to="/services">
                      <Button className="w-full justify-start" variant="outline">
                        <ChefHat className="h-4 w-4 mr-2" />
                        Browse Caterers
                      </Button>
                    </Link>
                    <Link to="/bookings">
                      <Button className="w-full justify-start" variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        View All Bookings
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/services/new">
                      <Button className="w-full justify-start" variant="outline">
                        <Plus className="h-4 w-4 mr-2" />
                        Add New Service
                      </Button>
                    </Link>
                    <Link to="/bookings">
                      <Button className="w-full justify-start" variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Manage Bookings
                      </Button>
                    </Link>
                  </>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">New booking confirmed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Profile updated</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">New review received</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}