import { useState, useEffect, useRef } from 'react';
import { Mail, User, Phone, MessageSquare, Send, Check, AlertTriangle, MapPin } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';

const CONTACT_EMAIL = 'Mengpangxing2027@u.northwestern.edu';

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
        className={`w-full rounded-lg border px-4 py-3 shadow-xs transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 ${
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Static site: hand the message to the visitor's email client
    const subject = formState.subject.trim() || `Hello from ${formState.name.trim()}`;
    const body = [
      formState.message.trim(),
      '',
      '—',
      formState.name.trim(),
      formState.email.trim(),
      formState.phone.trim(),
    ].filter((line, i) => i < 3 || line).join('\n');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset status after 6 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 6000);
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
    
    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }
    
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section id="contact" className="relative px-6 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
      <div ref={sectionRef} className="mb-14 text-center opacity-0 translate-y-10 transition-all duration-700">
        <div className="flex items-center justify-center gap-3 text-blue-600">
          <MessageSquare className="h-6 w-6" />
          <h2 className="text-lg font-semibold uppercase">
            Get In Touch
          </h2>
        </div>
        <h1 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">
          Contact Me
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Have a role, project, or engineering idea worth building? Send a note and I will follow up.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.4fr]">
        <aside className="rounded-lg border border-white/80 bg-white/80 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-slate-950">Let&apos;s build something useful.</h3>
          <p className="mt-3 leading-7 text-slate-600">
            I am especially interested in site reliability, cloud infrastructure, LLM agents, and full-stack systems that make real engineering workflows faster and safer.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-blue-700"
            >
              <Mail className="h-5 w-5 text-[#0092ff]" />
              <span className="break-all font-medium">Mengpangxing2027@u.northwestern.edu</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mengpang-xing?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-blue-700"
            >
              <FaLinkedinIn className="h-5 w-5 text-[#0092ff]" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-xs">
              <MapPin className="h-5 w-5 text-[#0092ff]" />
              <span className="font-medium">Chicago / Evanston, IL</span>
            </div>
          </div>
        </aside>

        <div className="overflow-hidden rounded-lg border border-white/80 bg-white/90 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <div className="relative p-6 sm:p-8">
            {submitStatus === 'success' && (
              <div className="fade-in absolute inset-0 z-20 flex flex-col items-center justify-center bg-white px-6 text-center">
                <div className="rounded-full bg-green-100 p-4">
                  <Check className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">Almost there!</h3>
                <p className="mt-2 max-w-sm text-gray-600">Your email app should open with the message ready to send. Thanks for reaching out!</p>
                <p className="mt-4 text-sm text-slate-500">
                  Nothing opened? Email me at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-blue-600 hover:underline">{CONTACT_EMAIL}</a>
                </p>
              </div>
            )}
            
            {/* Error overlay */}
            {submitStatus === 'error' && (
              <div className="fade-in absolute inset-0 z-20 flex flex-col items-center justify-center bg-white px-6 text-center">
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
                    className={`w-full rounded-lg border px-4 py-3 shadow-xs transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 ${
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
                className="group relative w-full overflow-hidden rounded-lg bg-blue-600 px-4 py-4 text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 disabled:bg-blue-400"
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
                    {isSubmitting ? 'Opening email...' : 'Send Message'}
                  </span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
