"use client"

import React, { useState } from "react"
import { FadeIn } from "@/components/animations/fade-in"
import { Phone, Mail, MapPin, Clock, Send, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    sujet: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const emailBody = `Nouvelle demande de contact depuis le site web:\n
Nom: ${formData.nom}
Entreprise: ${formData.entreprise}
Email: ${formData.email}
Téléphone: ${formData.telephone}

Sujet: ${formData.sujet}

Message:
${formData.message}`

    const mailtoLink = `mailto:doupaenergie@gmail.com?subject=Contact Site Web - ${formData.sujet}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="pt-32 pb-20 relative">
      {/* Background Glow */}
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Discutons de votre <span className="text-gradient">Projet</span></h1>
            <p className="text-xl text-muted-foreground">
              Notre équipe d'experts est à votre disposition pour étudier vos besoins et vous proposer des solutions techniques adaptées.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <FadeIn delay={0.2}>
              <div className="glass-card p-8 rounded-3xl border-l-4 border-l-primary h-full">
                <h3 className="text-2xl font-bold mb-8">Coordonnées</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">Téléphone</p>
                      <a href="tel:+221778084203" className="text-lg font-bold hover:text-primary transition-colors">+221 77 808 42 03</a>
                      <p className="text-xs text-muted-foreground mt-1">Ligne d'urgence 24/7 disponible</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                      <a href="mailto:doupaenergie@gmail.com" className="text-lg font-bold hover:text-secondary transition-colors">doupaenergie@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">Siège Social</p>
                      <p className="text-lg font-bold">Dakar, Sénégal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">Heures d'ouverture</p>
                      <p className="text-base font-medium">Lun - Ven : 8h00 - 18h00</p>
                      <p className="text-base font-medium text-muted-foreground">Sam : 8h00 - 12h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.4}>
              <div className="glass p-8 md:p-10 rounded-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <Zap className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">Demande de devis</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Nom complet *</label>
                      <input 
                        required
                        type="text" 
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full h-12 bg-black/20 border border-white/10 rounded-xl px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-white/20"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Entreprise</label>
                      <input 
                        type="text" 
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                        className="w-full h-12 bg-black/20 border border-white/10 rounded-xl px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-white/20"
                        placeholder="Société S.A."
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Email *</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-12 bg-black/20 border border-white/10 rounded-xl px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-white/20"
                        placeholder="jean@exemple.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Téléphone *</label>
                      <input 
                        required
                        type="tel" 
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full h-12 bg-black/20 border border-white/10 rounded-xl px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-white/20"
                        placeholder="+221 ..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Service concerné *</label>
                    <select 
                      required
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      className="w-full h-12 bg-black/20 border border-white/10 rounded-xl px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white appearance-none"
                    >
                      <option value="" disabled className="bg-background text-muted-foreground">Sélectionnez un service</option>
                      <option value="Réseaux Aériens" className="bg-background">Réseaux Aériens</option>
                      <option value="Réseaux Souterrains" className="bg-background">Réseaux Souterrains</option>
                      <option value="Postes de Transformation" className="bg-background">Postes de Transformation</option>
                      <option value="Branchements" className="bg-background">Branchements Électriques</option>
                      <option value="Autre" className="bg-background">Autre demande</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Description du projet *</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-black/20 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-white/20 resize-none"
                      placeholder="Décrivez vos besoins..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl">
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer la demande
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  )
}
