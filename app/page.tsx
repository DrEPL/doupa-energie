"use client"

import type React from "react"
import Image from "next/image"

import { Phone, Mail, Zap, Building, Cable, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function HomePage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    projet: "",
  })

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create email body with form data
    const emailBody = `Bonjour,

Je souhaite obtenir un devis pour mon projet électrique.

Informations de contact:
- Nom: ${formData.nom}
- Prénom: ${formData.prenom}
- Email: ${formData.email}
- Téléphone: ${formData.telephone}

Description du projet:
${formData.projet}

Cordialement,
${formData.prenom} ${formData.nom}`

    // Open email client with pre-filled information
    const mailtoLink = `mailto:doupaenergie@gmail.com?subject=Demande de devis - ${formData.nom} ${formData.prenom}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/doupa-logo-new.png"
                  alt="Doupa Énergie Logo"
                  width={48}
                  height={48}
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold">Doupa Énergie</h1>
                <p className="text-sm opacity-90">Votre partenaire de confiance en réseaux électrique</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#accueil" className="hover:text-accent transition-colors">
                Accueil
              </a>
              <a href="#apropos" className="hover:text-accent transition-colors">
                À propos
              </a>
              <a href="#services" className="hover:text-accent transition-colors">
                Services
              </a>
              <a href="#contact" className="hover:text-accent transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Expertise en Réseaux Électriques
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Spécialiste en maintenance et installation électrique, nous assurons la fiabilité de vos réseaux de
            distribution électrique HTA et BT au Sénégal.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={scrollToContact}>
            <Phone className="w-5 h-5 mr-2" />
            Contactez-nous
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Nos Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une gamme complète de services pour tous vos besoins en électricité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-serif">Réseaux Aériens</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Travaux de réseaux aériens de distribution électrique HTA et BT</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-serif">Branchement BT</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Branchement électrique basse tension pour particuliers et entreprises</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-serif">Distribution HTA/BT</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Travaux de réseaux de distribution électrique haute et basse tension</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cable className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-serif">Réseaux Souterrains</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Travaux de réseaux souterrains de distribution électrique HTA et BT</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                À Propos de Doupa Énergie
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Dirigée par Robert Doupa, Managing Partner, Doupa Énergie est votre partenaire de confiance pour tous
                vos projets électriques au Sénégal.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Fiabilité</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground font-medium">Expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground font-medium">Sécurité</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-lg p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">RD</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Robert Doupa</h3>
                <p className="text-secondary font-medium mb-4">Managing Partner</p>
                <p className="text-muted-foreground">
                  Expert en réseaux électriques avec une expérience approfondie dans le domaine de la distribution
                  électrique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Contactez-nous</h2>
            <p className="text-lg text-muted-foreground">
              Prêt à démarrer votre projet ? Contactez-nous dès aujourd'hui
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground">Téléphone</h3>
                  <a href="tel:+221778084203" className="text-primary hover:text-primary/80 text-lg font-medium">
                    +221 77 808 42 03
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground">Email</h3>
                  <a
                    href="mailto:doupaenergie@gmail.com"
                    className="text-primary hover:text-primary/80 text-lg font-medium"
                  >
                    doupaenergie@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-lg p-6">
                <h3 className="font-serif font-bold text-foreground mb-2">Horaires d'ouverture</h3>
                <p className="text-muted-foreground">Lundi - Vendredi: 8h00 - 18h00</p>
                <p className="text-muted-foreground">Samedi: 8h00 - 12h00</p>
                <p className="text-muted-foreground">Urgences: 24h/24, 7j/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/images/doupa-logo-new.png"
                    alt="Doupa Énergie Logo"
                    width={40}
                    height={40}
                    className="object-contain rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold">Doupa Énergie</h3>
                  <p className="text-sm opacity-90">Votre partenaire de confiance</p>
                </div>
              </div>
              <p className="text-sm opacity-80">Spécialiste en maintenance et installation électrique au Sénégal</p>
            </div>

            <div>
              <h4 className="font-serif font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Réseaux aériens HTA/BT</li>
                <li>Branchement électrique BT</li>
                <li>Distribution électrique</li>
                <li>Réseaux souterrains</li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>+221 77 808 42 03</p>
                <p>doupaenergie@gmail.com</p>
                <p>Robert Doupa - Managing Partner</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2025 Doupa Énergie. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
