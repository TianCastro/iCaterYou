import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ChefHat, 
  Calendar, 
  Users, 
  Star, 
  Clock, 
  Shield, 
  Smartphone,
  CheckCircle,
  ArrowRight,
  MapPin,
  Utensils
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Landing() {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-orange-500" />,
      title: "Easy Booking",
      description: "Book catering services in just a few clicks with real-time availability"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Diverse Options",
      description: "Choose from a wide variety of caterers and cuisines in Iloilo City"
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Trusted Providers",
      description: "All caterers are verified and reviewed by our community"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-orange-500" />,
      title: "Mobile Friendly",
      description: "Access our platform anywhere, anytime from any device"
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Event Organizer",
      content: "iCATERYou made planning my daughter's wedding so much easier. Found the perfect caterer in minutes!",
      rating: 5
    },
    {
      name: "John Dela Cruz",
      role: "Business Owner",
      content: "As a catering provider, this platform has helped me reach more customers and grow my business.",
      rating: 5
    },
    {
      name: "Ana Rodriguez",
      role: "Family Event Planner",
      content: "The variety of options and transparent pricing made choosing a caterer stress-free.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                  <MapPin className="h-3 w-3 mr-1" />
                  Serving Iloilo City
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                    Delicious Catering
                  </span>
                  <br />
                  <span className="text-gray-900">Made Simple</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect with trusted catering services in Iloilo City. From intimate gatherings to grand celebrations, 
                  find the perfect caterer for your special event.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg">
                    Browse Caterers
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg">
                    Join as Provider
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Verified Caterers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600">Happy Events</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                        <ChefHat className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Premium Catering</h3>
                        <p className="text-sm text-gray-500">Wedding Package</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Available</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Serves 100-150 guests</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">5-course Filipino menu</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Professional service staff</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">₱45,000</span>
                      <span className="text-sm text-gray-500 ml-1">starting</span>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 animate-bounce">
                <Star className="h-6 w-6 text-yellow-800" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-400 rounded-full p-3 animate-pulse">
                <Utensils className="h-6 w-6 text-blue-800" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose iCATERYou?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've revolutionized the catering booking experience in Iloilo City with our innovative platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-orange-50 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get your event catered in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Browse & Compare",
                description: "Explore verified caterers, menus, and pricing options tailored to your event needs"
              },
              {
                step: "2", 
                title: "Book & Customize",
                description: "Select your preferred caterer, customize your menu, and schedule your event date"
              },
              {
                step: "3",
                title: "Enjoy Your Event",
                description: "Relax while professional caterers handle everything for your perfect event"
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-orange-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Make Your Event Unforgettable?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of satisfied customers who trust iCATERYou for their catering needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Start Browsing
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg">
                Join as Caterer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}