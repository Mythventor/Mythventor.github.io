import React from 'react';
import { Mail, User, Phone, MessageSquare, Send } from 'lucide-react';

const InputField = ({ label, type, name, icon: Icon }) => (
  <div className="flex flex-col space-y-2">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      <Icon className="h-4 w-4 text-blue-600" />
      {label}
    </label>
    <input
      type={type}
      name={name}
      className="rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      placeholder={`Enter your ${label.toLowerCase()}`}
    />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="mx-auto max-w-7xl px-4 py-24">
      {/* Header Section */}
      <div className="mb-16 text-center">
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
          <div className="p-8">
            <form
              action="https://getform.io/f/bejydqla"
              method="POST"
              encType="multipart/form-data"
              className="space-y-6"
            >
              {/* Name and Phone Grid */}
              <div className="grid gap-6 md:grid-cols-2">
                <InputField
                  label="Name"
                  type="text"
                  name="name"
                  icon={User}
                />
                <InputField
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  icon={Phone}
                />
              </div>

              {/* Email */}
              <InputField
                label="Email"
                type="email"
                name="email"
                icon={Mail}
              />

              {/* Subject */}
              <div className="flex flex-col space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="What would you like to discuss?"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  Message
                </label>
                <textarea
                  name="message"
                  rows="6"
                  className="rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-lg bg-blue-600 px-4 py-4 text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <div className="relative flex items-center justify-center gap-2">
                  <Send className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  <span className="font-medium">Send Message</span>
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