import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Mail, Lock, Code } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Password strength calculation
    if (name === 'password') {
      let strength = 0;
      strength += value.length >= 8 ? 1 : 0;
      strength += /[A-Z]/.test(value) ? 1 : 0;
      strength += /[a-z]/.test(value) ? 1 : 0;
      strength += /[0-9]/.test(value) ? 1 : 0;
      strength += /[^A-Za-z0-9]/.test(value) ? 1 : 0;
      setPasswordStrength(strength);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (passwordStrength < 3) {
      alert("Please choose a stronger password");
      return;
    }

    try {
      const { confirmPassword, ...signupData } = formData;
      // Implement your signup logic here
      // await signup(signupData);
      navigate('/login');
    } catch (err) {
      alert('Signup failed: ' + (err.response?.data?.message || 'Please try again'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#260040] via-[#1F0131] to-[#120020] p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <Code className="w-12 h-12 text-[#FFD700] mr-2" />
            <h2 className="text-3xl font-bold text-white">Codeteria</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                onChange={handleChange}
              />
              <div className="mt-1 flex space-x-1">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      passwordStrength >= level
                        ? 'bg-[#FFD700]'
                        : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#FFD700] hover:bg-[#ffc400] rounded-lg text-[#260040] font-semibold transition transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-gray-400">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-[#FFD700] hover:text-[#ffc400] hover:underline"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;