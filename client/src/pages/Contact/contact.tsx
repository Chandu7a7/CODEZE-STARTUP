import {
  Mail,
  MapPin,
  Send,
  Code2,

  ArrowRight,
} from "lucide-react";

const Contact = () => {
  return (
 <section className="relative overflow-hidden bg-[#f7faff] pt-16 pb-16">

  {/* Background */}
  <div className="absolute top-0 left-0 w-full h-[380px] bg-gradient-to-r from-blue-50 via-white to-cyan-50" />

  <div className="relative max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">

    {/* Hero */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-white shadow-sm text-blue-600 text-[11px] font-semibold mb-6">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        Response Within 24h · No Commitment Required
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-slate-900">
        Let's Build Something
        <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Remarkable
        </span>
      </h1>

      {/* Description */}
      <p className="mt-5 text-[15px] leading-7 text-slate-600">
        Got an idea, a problem to solve, or a project ready to go?
        We respond within 24 hours — no commitment, no sales pitch.
      </p>
    </div>

    {/* Main Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">

      {/* Left Cards */}
     {/* Left Cards */}
<div className="space-y-4">

  {/* General & Booking */}
<div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
  
  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-4">
    <Mail className="w-5 h-5 text-green-600" />
  </div>

  <h3 className="text-lg font-bold text-slate-900">
    General & Booking
  </h3>

  <p className="mt-2 text-sm text-slate-600 leading-6">
    WhatsApp Support <br />
  </p>

  <a
    href="https://wa.me/919977413362"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-600"
  >
    Chat on WhatsApp
    <ArrowRight className="w-4 h-4" />
  </a>
</div>

  {/* Software & Web Development */}
<div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
  
  <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center mb-4">
    <Code2 className="w-5 h-5 text-cyan-600" />
  </div>

  <h3 className="text-lg font-bold text-slate-900">
    Software Development
  </h3>

  <p className="mt-2 text-sm text-slate-600 leading-6">
    Web Apps • SaaS • MERN • UI/UX <br />
     </p>

 <a
  href="https://wa.me/919302451035"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600"
>
  Chat on WhatsApp
  <ArrowRight className="w-4 h-4" />
</a>
</div>
  {/* Location */}
<div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
  
  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-4">
    <MapPin className="w-5 h-5 text-orange-600" />
  </div>

  <h3 className="text-lg font-bold text-slate-900">
    Our Location
  </h3>

  <p className="mt-2 text-sm text-slate-600 leading-6">
    Vijay Nagar, Indore <br />
    Madhya Pradesh, India
  </p>

  <a
    href="https://maps.google.com/?q=Indore,Madhya+Pradesh"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600"
  >
    View Location
    <ArrowRight className="w-4 h-4" />
  </a>
</div>
</div>
      {/* Form */}
<div className="relative">

  <div className="relative bg-white border border-slate-100 rounded-[32px] p-6 md:p-8 shadow-lg">

    <h2 className="text-3xl font-black text-slate-900">
      Send a Message
    </h2>

    <p className="mt-2 text-sm text-slate-600">
      Fill out the form below and we’ll get back to you promptly.
    </p>

    <form className="mt-8 space-y-5">

      {/* First + Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="text-sm font-semibold text-slate-700">
            First Name
          </label>

          <input
            type="text"
            placeholder="John"
            className="w-full mt-2 px-4 py-3 rounded-2xl border border-slate-200 outline-none text-sm focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Last Name
          </label>

          <input
            type="text"
            placeholder="Doe"
            className="w-full mt-2 px-4 py-3 rounded-2xl border border-slate-200 outline-none text-sm focus:border-blue-500"
          />
        </div>
      </div>

      {/* Email + Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Email Address
          </label>

          <input
            type="email"
            placeholder="john@example.com"
            className="w-full mt-2 px-4 py-3 rounded-2xl border border-slate-200 outline-none text-sm focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Mobile Number
          </label>

          <input
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full mt-2 px-4 py-3 rounded-2xl border border-slate-200 outline-none text-sm focus:border-blue-500"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="text-sm font-semibold text-slate-700">
          Service
        </label>

        <select className="w-full mt-2 px-4 py-3 rounded-2xl border border-slate-200 outline-none text-sm bg-white focus:border-blue-500">
          <option>Select service...</option>
          <option>Frontend Development</option>
          <option>Backend Development</option>
          <option>Full Stack Web App</option>
          <option>Mobile App Development</option>
          <option>Database Development</option>
          <option>UI/UX Design</option>
          <option>AI Integration</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="text-sm font-semibold text-slate-700">
          Message
        </label>

        <textarea
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full mt-2 px-4 py-4 rounded-2xl border border-slate-200 outline-none resize-none text-sm focus:border-blue-500"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300"
      >
        Send Message

        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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