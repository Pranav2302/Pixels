import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../Logo';

function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col h-full justify-between">
              <div className="flex items-center space-x-2 mb-6">
                <Logo width="40px" />
                <span className="text-xl font-bold text-textPrimary">Pixels</span>
              </div>
              <p className="text-sm text-textSecondary">
                Capture and share your moments with the world.
              </p>
              <p className="text-xs text-textSecondary mt-6">
                &copy; {new Date().getFullYear()} Pixels. All Rights Reserved.
              </p>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {['About Us', 'Features', 'Pricing', 'Press Kit'].map((item) => (
                <li key={item}>
                  <Link
                    className="text-textSecondary hover:text-primary transition-colors"
                    to="/"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {['Help Center', 'Community', 'Contact Us', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <Link
                    className="text-textSecondary hover:text-primary transition-colors"
                    to="/"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy', 'Licenses'].map((item) => (
                <li key={item}>
                  <Link
                    className="text-textSecondary hover:text-primary transition-colors"
                    to="/"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="mt-12 pt-6 border-t border-border">
          {/* <div className="flex justify-center space-x-6">
            {['Twitter', 'Instagram', 'GitHub', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="text-textSecondary hover:text-primary">
                <span className="sr-only">{social}</span>
                <div className="h-6 w-6 rounded-full bg-card flex items-center justify-center">
                  {social.charAt(0)}
                </div>
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer