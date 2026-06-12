import logo from "../../assets/codeza-logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-[#f8fbff]">

      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.05),transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-7">

        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-slate-100">

          {/* Brand */}
          <div>

         {/* Logo */}
<div className="flex items-center gap-3">

  <img
    src={logo}
    alt="CODEZA Logo"
    className="w-20 h-20 object-contain"
  />
</div>

            {/* Description */}
            <p className="mt-5 text-[14px] leading-7 text-slate-500 max-w-sm">
              Building premium web applications, scalable software,
              AI-powered systems and modern UI/UX experiences for
              startups and businesses.
            </p>
          </div>

          {/* Company */}
          <div>

            <h3 className="text-[15px] font-bold text-slate-800 mb-5">
              Company
            </h3>

            <div className="space-y-3">

              {[
                "About Us",
                "Services",
                "Projects",
                "Contact",
              ].map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="flex items-center gap-2 text-[14px] text-slate-500 hover:text-blue-600 transition-all duration-300"
                >
                  {item} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>

            <h3 className="text-[15px] font-bold text-slate-800 mb-5">
              Services
            </h3>

            <div className="space-y-3">

              {[
                "Web Development",
                "UI/UX Design",
                "AI Solutions",
                "SaaS Platforms",
              ].map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="flex items-center gap-2 text-[14px] text-slate-500 hover:text-cyan-500 transition-all duration-300"
                >
                  {item} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-[15px] font-bold text-slate-800 mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              {/* Location */}
              <div className="flex items-start gap-3">

                <div className="w-11 h-11 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-[16px] shadow-sm">
                  📍
                </div>

                <p className="text-[14px] leading-6 text-slate-500">
                  Vijay Nagar, Indore,
                  <br />
                  Madhya Pradesh, India
                </p>
              </div>
{/* Email */}
<div className="flex items-center gap-3">

  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-[16px] shadow-sm">
    ✉️
  </div>

  <a
    href="mailto:codeza@gmail.com"
    className="text-[14px] text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all duration-300"
  >
    codeza@gmail.com
  </a>
</div>

{/* Phone */}
<div className="flex items-center gap-3">

  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-[16px] shadow-sm">
    📞
  </div>

  <a
    href="tel:+919977413362"
    className="text-[14px] text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all duration-300"
  >
    +91 99774 13362
  </a>
</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">

          <p className="text-[13px] text-slate-400 text-center">
            © {new Date().getFullYear()} CODEZA. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="/"
              className="text-[13px] text-slate-400 hover:text-blue-600 transition-all duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="/"
              className="text-[13px] text-slate-400 hover:text-blue-600 transition-all duration-300"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;