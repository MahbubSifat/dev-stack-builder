function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">
              <span className="gradient-text">Dev</span> Stack
            </h2>

            <p className="text-gray-400 text-sm mt-4 leading-6">
              Build your perfect developer stack with modern
              technologies and tools.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-5">
              <a href="#" className="text-gray-400 hover:text-white">
                GitHub
              </a>

              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>

              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">
              Product
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <a href="#" className="block hover:text-white">
                Technologies
              </a>

              <a href="#" className="block hover:text-white">
                Projects
              </a>

              <a href="#" className="block hover:text-white">
                Features
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <a href="#" className="block hover:text-white">
                About
              </a>

              <a href="#" className="block hover:text-white">
                Contact
              </a>

              <a href="#" className="block hover:text-white">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">
              Legal
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <a href="#" className="block hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-white">
                Terms of Service
              </a>

              <a href="#" className="block hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-500">

          <p>
            © 2026 Dev Stack Builder. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;