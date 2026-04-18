"use client"

import React, { useState } from "react"
import { FadeIn } from "@/components/animations/fade-in"
import { Phone, Mail, MapPin, Clock, Send, Zap, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
    bot_field: "" // Honeypot field
  })
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset states
    setStatus("loading")
    setErrorMessage("")
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        setStatus("success")
        // Reset form except honeypot
        setFormData({
          nom: "",
          entreprise: "",
          email: "",
          telephone: "",
          sujet: "",
          message: "",
          bot_field: ""
        })
      } else {
        setStatus("error")
        setErrorMessage(data.error || "Une erreur est survenue lors de l'envoi.")
      }
    } catch (error) {
      console.error("Fetch error:", error)
      setStatus("error")
      setErrorMessage("Impossible de joindre le serveur. Veuillez réessayer plus tard.")
    }
  }

  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4 md:mb-6 leading-tight">Discutons de votre <br className="block sm:hidden" /><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Projet</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground">
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
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">Téléphone</p>
                      <div className="flex flex-col gap-1">
                        <a href="tel:+221779045959" className="text-lg font-bold hover:text-primary transition-colors">+221 77 904 59 59</a>
                        <a href="tel:+221784014934" className="text-lg font-bold hover:text-primary transition-colors">+221 78 401 49 34</a>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Ligne d'urgence 24/7 disponible</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                      <a href="mailto:doupaenergie@gmail.com" className="text-lg font-bold hover:text-secondary transition-colors break-all">doupaenergie@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">Siège Social</p>
                      <p className="text-lg font-bold">Dakar, Sénégal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/5 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
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
              <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden">
                <div className="flex items-center gap-3 mb-8">
                  <Zap className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">Demande de devis</h3>
                </div>
                
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center h-[500px]">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Message envoyé !</h4>
                    <p className="text-muted-foreground max-w-md">
                      Merci pour votre message. Notre équipe d'experts vous recontactera dans les plus brefs délais pour étudier votre projet.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-8 border-white/10 hover:bg-white/5"
                      onClick={() => setStatus("idle")}
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === "error" && (
                      <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-200">{errorMessage}</p>
                      </div>
                    )}
                    
                    {/* Honeypot field (hidden from users, stops basic bots) */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="bot_field">Ne pas remplir ce champ si vous êtes humain.</label>
                      <input 
                        type="text" 
                        id="bot_field" 
                        name="bot_field" 
                        value={formData.bot_field} 
                        onChange={handleChange} 
                        tabIndex={-1} 
                        autoComplete="off" 
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Nom complet *</label>
                        <input 
                          required
                          type="text" 
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          disabled={status === "loading"}
                          className="w-full h-12 bg-black/20 border border-white/10 rounded-xl px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-white/20 disabled:opacity-50"
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
                          disabled={status === "loading"}
                          className="w-full h-12 bg-black/20 border border-white/10 rounded-xl px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-white/20 disabled:opacity-50"
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
                          disabled={status === "loading"}
                          className="w-full h-12 bg-black/20 border border-white/10 rounded-xl px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-white/20 disabled:opacity-50"
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
                          disabled={status === "loading"}
                          className="w-full h-12 bg-black/20 border border-white/10 rounded-xl px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-white/20 disabled:opacity-50"
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
                        disabled={status === "loading"}
                        className="w-full h-12 bg-black/20 border border-white/10 rounded-xl px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white appearance-none disabled:opacity-50"
                      >
                        <option value="" disabled className="bg-background text-muted-foreground">Sélectionnez un service</option>
                        <option value="Réseaux Aériens" className="bg-background">Réseaux Aériens</option>
                        <option value="Réseaux Souterrains" className="bg-background">Réseaux Souterrains</option>
                        <option value="Postes de Transformation" className="bg-background">Postes de Transformation</option>
                        <option value="Branchements" className="bg-background">Branchements Électriques</option>
                        <option value="Vente Matériel" className="bg-background">Vente de matériel électrique</option>
                        <option value="Froid et Climatisation" className="bg-background">Froid et climatisation</option>
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
                        disabled={status === "loading"}
                        rows={5}
                        className="w-full bg-black/20 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-white/20 resize-none disabled:opacity-50"
                        placeholder="Décrivez vos besoins..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={status === "loading"}
                      className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl disabled:opacity-70 transition-all"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Envoyer la demande
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Map Section */}
        <FadeIn delay={0.6}>
          <div className="mt-12 rounded-3xl overflow-hidden glass border-white/10 h-[400px] w-full relative group">
            <iframe 
              src="https://maps.google.com/maps?q=Tivaouane%20Peulh,%20Dakar,%20S%C3%A9n%C3%A9gal&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 grayscale-[0.8] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </FadeIn>

      </div>
    </div>
  )
}
