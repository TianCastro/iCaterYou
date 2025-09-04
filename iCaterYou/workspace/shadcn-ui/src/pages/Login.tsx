import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChefHat, User, Building } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('client');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, this would call an API
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
            <CardTitle className="text-2xl font-bold text-gray-900">Welcome Back</CardTitle>
            <CardDescription className="text-gray-600">
              Sign in to your account to continue
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
                <div className="text-center text-sm text-gray-600 mb-4">
                  Sign in as a client to book catering services
                </div>
              </TabsContent>
              
              <TabsContent value="provider" className="space-y-4 mt-6">
                <div className="text-center text-sm text-gray-600 mb-4">
                  Sign in as a catering service provider
                </div>
              </TabsContent>
            </Tabs>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-orange-600 hover:text-orange-700">
                  Forgot password?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
              >
                Sign In
              </Button>
            </form>

            <div className="text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <Link to="/signup" className="text-orange-600 hover:text-orange-700 font-medium">
                Sign up
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