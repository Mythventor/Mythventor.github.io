import React, { useState, useEffect, useRef } from 'react';
import { Mail, User, Phone, MessageSquare, Send, Check, AlertTriangle } from 'lucide-react';

const InputField = ({ label, type, name, icon: Icon, value, onChange, error }) => (
  <div className="flex flex-col space-y-2">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      <Icon className="h-4 w-4 text-blue-600" />
      {label}
    </label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border px-4 py-3 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
          error ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white focus:border-blue-500'
        }`}
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
      {error && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
          <AlertTriangle className="h-5 w-5" />
        </div>
      )}
    </div>
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Successfully submitted
      setSubmitStatus('success');
      setFormState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Animation for section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="contact" className="mx-auto max-w-7xl px-4 py-24">
      {/* Header Section */}
      <div ref={sectionRef} className="mb-16 text-center opacity-0 translate-y-10 transition-all duration-700">
        <div className="flex items-center justify-center gap-3 text-blue-600">
          <MessageSquare className="h-6 w-6" />
          <h2 className="text-lg font-semibold uppercase tracking-wider">
            Get In Touch
          </h2>
        </div>
        <h1 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Contact Me
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          Feel free to reach out using the form below.
        </p>
      </div>

      {/* Contact Form */}
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="relative p-8">
            {/* Success overlay */}
            {submitStatus === 'success' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
                <div className="rounded-full bg-green-100 p-4">
                  <Check className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">Message Sent!</h3>
                <p className="mt-2 text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            )}
            
            {/* Error overlay */}
            {submitStatus === 'error' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
                <div className="rounded-full bg-red-100 p-4">
                  <AlertTriangle className="h-12 w-12 text-red-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">Something went wrong</h3>
                <p className="mt-2 text-gray-600">Please try again later or email me directly.</p>
              </div>
            )}
            
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name and Phone Grid */}
              <div className="grid gap-6 md:grid-cols-2">
                <InputField
                  label="Name"
                  type="text"
                  name="name"
                  icon={User}
                  value={formState.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <InputField
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  icon={Phone}
                  value={formState.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
              </div>

              {/* Email */}
              <InputField
                label="Email"
                type="email"
                name="email"
                icon={Mail}
                value={formState.email}
                onChange={handleChange}
                error={errors.email}
              />

              {/* Subject */}
              <InputField
                label="Subject"
                type="text"
                name="subject"
                icon={MessageSquare}
                value={formState.subject}
                onChange={handleChange}
                error={errors.subject}
              />

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    rows="6"
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                      errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white focus:border-blue-500'
                    }`}
                    placeholder="Write your message here..."
                  ></textarea>
                  {errors.message && (
                    <div className="absolute right-3 top-8 text-red-500">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                  )}
                </div>
                {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-lg bg-blue-600 px-4 py-4 text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:bg-blue-400"
              >
                <div className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <Send className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  )}
                  <span className="font-medium">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;