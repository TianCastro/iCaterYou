import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { ChefHat, User, Building, CheckCircle } from 'lucide-react';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    businessName: '',
    description: ''
  });
  const [userType, setUserType] = useState('client');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Simulate signup - in real app, this would call an API
    localStorage.setItem('userType', userType);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              iCATERYou
            </span>
          </Link>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-bold text-gray-900">Join iCATERYou</CardTitle>
            <CardDescription className="text-gray-600">
              Create your account to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs value={userType} onValueChange={setUserType} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="client" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Client</span>
                </TabsTrigger>
                <TabsTrigger value="provider" className="flex items-center space-x-2">
                  <Building className="h-4 w-4" />
                  <span>Provider</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="client" className="space-y-4 mt-6">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 text-blue-800 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Book catering services for your events</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="provider" className="space-y-4 mt-6">
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-800 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Offer your catering services to customers</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{userType === 'provider' ? 'Contact Person' : 'Full Name'}</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="h-11"
                />
              </div>

              {userType === 'provider' && (
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    type="text"
                    placeholder="Enter your catering business name"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="h-11"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="h-11"
                />
              </div>

              {userType === 'provider' && (
                <div className="space-y-2">
                  <Label htmlFor="description">Business Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe your catering services..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="h-11"
                />
              </div>

              <div className="flex items-start space-x-2 text-sm">
                <input type="checkbox" required className="mt-1 rounded border-gray-300" />
                <span className="text-gray-600">
                  I agree to the{' '}
                  <Link to="/terms" className="text-orange-600 hover:text-orange-700">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-orange-600 hover:text-orange-700">
                    Privacy Policy
                  </Link>
                </span>
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
              >
                Create Account
              </Button>
            </form>

            <div className="text-center">
              <span className="text-gray-600">Already have an account? </span>
              <Link to="/login" className="text-orange-600 hover:text-orange-700 font-medium">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link to="/" className="text-gray-600 hover:text-gray-800 text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}