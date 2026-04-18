import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-32 bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 relative bg-background/50 rounded-full p-1 border border-primary/20">
                <Image
                  src="/images/logo_doupa_energie.png"
                  alt="Doupa Énergie Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">Doupa Énergie</h3>
                <p className="text-xs text-primary font-medium tracking-wider uppercase mt-1">Innovation & Fiabilité</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Votre partenaire de confiance pour la conception, l'installation et la maintenance de réseaux électriques HTA/BT au Sénégal.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Accueil</Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-muted-foreground hover:text-primary transition-colors text-sm">À Propos</Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Nos Services</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Expertise</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground text-sm flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Réseaux Aériens
              </li>
              <li className="text-muted-foreground text-sm flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Réseaux Souterrains
              </li>
              <li className="text-muted-foreground text-sm flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Distribution HTA/BT
              </li>
              <li className="text-muted-foreground text-sm flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Branchements
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+221778084203" className="hover:text-white transition-colors">+221 77 808 42 03</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:doupaenergie@gmail.com" className="hover:text-white transition-colors">doupaenergie@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Doupa Énergie. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
