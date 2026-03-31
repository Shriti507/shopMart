import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address format';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a message';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success state after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#1b2316] to-[#121a10] min-h-screen text-gray-100 font-sans selection:bg-[#D4AF37] selection:text-[#1b2316]">
      <Navigation />

      <section className="relative py-32 overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-8 relative z-10 flex flex-col items-center">
          <div className="text-center mb-20 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Get in <span className="text-[#D4AF37]">Touch</span>
            </h1>
            <p className="text-lg text-gray-400 font-medium leading-relaxed">
              Have a question or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          {/* Centered Contact Form */}
          <div className="w-full max-w-[800px]">
            <div className="bg-white/[0.02] p-10 md:p-14 rounded-[20px] border border-white/[0.05] shadow-[0_30px_100px_rgba(0,0,0,0.3)] relative overflow-hidden backdrop-blur-sm">
              {status === 'success' && (
                <div className="absolute inset-0 z-50 bg-[#111827]/98 backdrop-blur-xl flex flex-col items-center justify-center text-center p-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-8 border border-[#D4AF37]/20">
                      <CheckCircle2 size={40} className="text-[#D4AF37]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Message Sent Successfully!</h3>
                  <p className="text-gray-400 font-medium max-w-sm mb-10 leading-relaxed">
                      Thank you for reaching out. We've received your message and will respond within 24 hours.
                  </p>
                  <button 
                      onClick={() => setStatus('idle')}
                      className="bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#111827] px-10 py-4 rounded-full font-bold tracking-wide hover:scale-105 transition-all shadow-xl active:scale-95"
                  >
                      Send Another Message
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label htmlFor="name" className="text-sm font-bold text-white ml-1">Your Name</label>
                    <div className={`relative bg-[#111827] border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl overflow-hidden focus-within:border-[#D4AF37] transition-all duration-300`}>
                      <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe" 
                          className="w-full bg-transparent px-6 py-5 text-[#E5E7EB] outline-none placeholder-gray-600 font-medium"
                      />
                    </div>
                    {errors.name && <p className="text-red-400 text-xs font-medium mt-2 ml-1 flex items-center gap-1.5"><AlertCircle size={14}/> {errors.name}</p>}
                  </div>

                  <div className="space-y-4">
                    <label htmlFor="email" className="text-sm font-bold text-white ml-1">Email Address</label>
                    <div className={`relative bg-[#111827] border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl overflow-hidden focus-within:border-[#D4AF37] transition-all duration-300`}>
                      <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com" 
                          className="w-full bg-transparent px-6 py-5 text-[#E5E7EB] outline-none placeholder-gray-600 font-medium"
                      />
                    </div>
                    {errors.email && <p className="text-red-400 text-xs font-medium mt-2 ml-1 flex items-center gap-1.5"><AlertCircle size={14}/> {errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-4">
                  <label htmlFor="message" className="text-sm font-bold text-white ml-1">Your Message</label>
                  <div className={`relative bg-[#111827] border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl overflow-hidden focus-within:border-[#D4AF37] transition-all duration-300`}>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6" 
                      placeholder="How can we help you?" 
                      className="w-full bg-transparent px-6 py-5 text-[#E5E7EB] outline-none placeholder-gray-600 resize-none font-medium leading-relaxed"
                    ></textarea>
                  </div>
                  {errors.message && <p className="text-red-400 text-xs font-medium mt-2 ml-1 flex items-center gap-1.5"><AlertCircle size={14}/> {errors.message}</p>}
                </div>

                <button 
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] disabled:opacity-50 text-[#111827] font-bold py-6 rounded-full tracking-wider uppercase flex items-center justify-center gap-4 transition-all shadow-[0_20px_40px_rgba(212,175,55,0.2)] hover:shadow-[0_25px_50px_rgba(212,175,55,0.3)] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={24} className="animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
