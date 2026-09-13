import logoText from "../assets/logo-text.png";

function Footer() {
    return (
        <footer className="mt-20 border-t border-gray-200 bg-white text-gray-900">

            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>

                        <div className="flex items-center">
                            <img
                                src={logoText}
                                alt="Dev Stack"
                                className="h-10 w-auto object-contain"
                            />
                        </div>

                        <p className="text-gray-500 text-sm mt-4 leading-6">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        {/* Socials */}
                        <div className="flex gap-4 mt-5">

                            <a
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                            >
                                LinkedIn
                            </a>

                        </div>

                    </div>

                    {/* Product */}
                    <div>

                        <h3 className="font-semibold mb-4 text-black">
                            Product
                        </h3>

                        <div className="space-y-3 text-sm">

                            <a
                                href="#"
                                className="block text-gray-700 hover:text-black"
                            >
                                Home
                            </a>

                            <a
                                href="#"
                                className="block text-gray-700 hover:text-black"
                            >
                                Technologies
                            </a>

                            <a
                                href="#"
                                className="block text-gray-700 hover:text-black"
                            >
                                Projects
                            </a>

                        </div>

                    </div>

                    {/* Company */}
                    <div>

                        <h3 className="font-semibold mb-4 text-black">
                            Company
                        </h3>

                        <div className="space-y-3 text-sm">

                            <a
                                href="#"
                                className="block text-gray-700 hover:text-black"
                            >
                                About
                            </a>

                            <a
                                href="#"
                                className="block text-gray-700 hover:text-black"
                            >
                                Contact
                            </a>

                            <a
                                href="#"
                                className="block text-gray-700 hover:text-black"
                            >
                                Careers
                            </a>

                        </div>

                    </div>

                    {/* Legal */}
                    <div>

                        <h3 className="font-semibold mb-4 text-black">
                            Legal
                        </h3>

                        <div className="space-y-3 text-sm">

                            <a
                                href="#"
                                className="block text-gray-700 hover:text-black"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#"
                                className="block text-gray-700 hover:text-black"
                            >
                                Terms of Service
                            </a>

                        </div>

                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-500">

                    <p>
                        © 2026 Dev Stack Builder. All rights reserved.
                    </p>

                    <div className="flex gap-5">

                        <a
                            href="#"
                            className="hover:text-gray-900"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="hover:text-gray-900"
                        >
                            Terms
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;