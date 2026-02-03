"use client"

import { motion } from "framer-motion"
// Commented out unused/errored lucide-react icons for now to prevent import error
import { LuInstagram, LuLinkedin } from "react-icons/lu"

import Image from "next/image"

const socialLinks = [
  { icon: LuInstagram, href: "https://www.instagram.com/flufex_connect/", label: "Instagram" },
  { icon: LuLinkedin, href: "https://www.linkedin.com/company/flufex-connect/", label: "LinkedIn" },
  // { icon: Twitter, href: "#", label: "Twitter" },
  // { icon: Youtube, href: "#", label: "YouTube" },
]

const footerLinks = [
  {
    title: "Services",
    links: ["Digital Intellectual Properties", "Influencer Marketing", "Talent Management", "End to End Edutainment Content Production"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Process", "Contact"],
  },
  // {
  //   title: "Legal",
  //   links: ["Privacy Policy", "Terms of Service", "GST Details"],
  // },
]

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tight">
             <Image src="/logo.JPEG" alt="Flufex" width={60} height={60} className="rounded-full"/>
            </a>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              Digital marketing solutions for brands that want to make an impact.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-foreground mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} BRIDGEIT MARKETING PVT. LTD. All rights reserved.
              </div>
            </div>
            <div className="text-xs text-muted-foreground hidden lg:block">MCA Registered</div>
          </div>
        </div>

        {/* Large Brand Text */}
        <div className=" overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            transition={{ duration: 1 }}
            className="text-[6rem] md:text-[12rem] lg:text-[16rem] font-bold  whitespace-nowrap select-none"
          >
            FLUFEX
          </motion.div>
        </div>
      </div>
    </footer>
  )
}