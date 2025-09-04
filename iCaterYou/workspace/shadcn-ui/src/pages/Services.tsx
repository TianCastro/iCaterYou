import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Star, 
  MapPin, 
  Users, 
  Clock, 
  Search,
  Filter,
  Heart,
  ChefHat,
  Calendar,
  Phone,
  Mail
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // Mock data for catering services
  const caterers = [
    {
      id: 1,
      name: "Delicious Delights Catering",
      description: "Premium catering services specializing in Filipino and international cuisine",
      rating: 4.8,
      reviews: 124,
      location: "Jaro, Iloilo City",
      priceRange: "₱300-500",
      minGuests: 50,
      maxGuests: 500,
      specialties: ["Filipino", "International", "Weddings"],
      phone: "+63 123 456 7890",
      email: "info@deliciousdelights.com",
      featured: true
    },
    {
      id: 2,
      name: "Iloilo Flavors Co.",
      description: "Authentic Ilonggo dishes and traditional Filipino favorites",
      rating: 4.6,
      reviews: 89,
      location: "City Proper, Iloilo City",
      priceRange: "₱200-400",
      minGuests: 30,
      maxGuests: 300,
      specialties: ["Ilonggo", "Filipino", "Corporate"],
      phone: "+63 987 654 3210",
      email: "hello@ilongoflavors.com",
      featured: false
    },
    {
      id: 3,
      name: "Elite Events Catering",
      description: "Luxury catering for high-end events and celebrations",
      rating: 4.9,
      reviews: 156,
      location: "Mandurriao, Iloilo City",
      priceRange: "₱500-800",
      minGuests: 100,
      maxGuests: 1000,
      specialties: ["Luxury", "International", "Corporate"],
      phone: "+63 555 123 4567",
      email: "contact@eliteevents.com",
      featured: true
    },
    {
      id: 4,
      name: "Homestyle Kitchen",
      description: "Comfort food and home-cooked meals for intimate gatherings",
      rating: 4.5,
      reviews: 67,
      location: "Molo, Iloilo City",
      priceRange: "₱150-300",
      minGuests: 20,
      maxGuests: 150,
      specialties: ["Homestyle", "Filipino", "Intimate"],
      phone: "+63 333 987 6543",
      email: "orders@homestylekitchen.com",
      featured: false
    },
    {
      id: 5,
      name: "Seafood Paradise Catering",
      description: "Fresh seafood and coastal cuisine specialists",
      rating: 4.7,
      reviews: 98,
      location: "Villa Arevalo, Iloilo City",
      priceRange: "₱400-600",
      minGuests: 40,
      maxGuests: 400,
      specialties: ["Seafood", "Coastal", "Filipino"],
      phone: "+63 777 555 1234",
      email: "info@seafoodparadise.com",
      featured: false
    },
    {
      id: 6,
      name: "Garden Fresh Catering",
      description: "Healthy and organic catering options for health-conscious events",
      rating: 4.4,
      reviews: 45,
      location: "La Paz, Iloilo City",
      priceRange: "₱250-450",
      minGuests: 25,
      maxGuests: 200,
      specialties: ["Healthy", "Organic", "Vegetarian"],
      phone: "+63 444 888 9999",
      email: "hello@gardenfresh.com",
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'filipino', label: 'Filipino Cuisine' },
    { value: 'international', label: 'International' },
    { value: 'seafood', label: 'Seafood' },
    { value: 'healthy', label: 'Healthy Options' },
    { value: 'luxury', label: 'Luxury Catering' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Price Ranges' },
    { value: 'budget', label: '₱150-300 (Budget)' },
    { value: 'mid', label: '₱300-500 (Mid-range)' },
    { value: 'premium', label: '₱500+ (Premium)' }
  ];

  const filteredCaterers = caterers.filter(caterer => {
    const matchesSearch = caterer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caterer.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caterer.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    
    const matchesCategory = selectedCategory === 'all' || 
                           caterer.specialties.some(specialty => 
                             specialty.toLowerCase().includes(selectedCategory)
                           );
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Caterer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover trusted catering services in Iloilo City for all your special events and occasions
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search caterers, cuisines, or specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map(range => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredCaterers.length} caterers in Iloilo City
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">Sort by: Recommended</span>
          </div>
        </div>

        {/* Caterers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCaterers.map((caterer) => (
            <Card key={caterer.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {caterer.featured && (
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold px-3 py-1">
                  FEATURED
                </div>
              )}
              
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                  <ChefHat className="h-16 w-16 text-orange-400" />
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-1">{caterer.name}</CardTitle>
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{caterer.rating}</span>
                      <span className="text-sm text-gray-500">({caterer.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                
                <CardDescription className="text-sm">
                  {caterer.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {caterer.location}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    {caterer.minGuests}-{caterer.maxGuests} guests
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {caterer.specialties.slice(0, 3).map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="font-semibold text-lg text-gray-900">{caterer.priceRange}</span>
                    <span className="text-sm text-gray-500">per person</span>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      View Details
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us and we'll help you find the perfect caterer for your event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <Phone className="h-4 w-4 mr-2" />
              Call Us
            </Button>
            <Button variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}