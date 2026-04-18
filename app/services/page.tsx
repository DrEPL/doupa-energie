"use client"

import React from "react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Network, Cable, Building, Zap, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "reseaux-aeriens",
      icon: Network,
      color: "text-primary",
      bgColor: "bg-primary/20",
      title: "Réseaux Aériens HTA/BT",
      description: "Construction et maintenance de lignes électriques aériennes. Nous utilisons des supports et conducteurs de haute qualité pour garantir la résilience du réseau face aux intempéries.",
      features: ["Pose de poteaux béton et bois", "Tirage de câbles", "Entretien préventif", "Dépannage d'urgence"]
    },
    {
      id: "reseaux-souterrains",
      icon: Cable,
      color: "text-secondary",
      bgColor: "bg-secondary/20",
      title: "Réseaux Souterrains",
      description: "Travaux d'enfouissement de réseaux électriques. Une solution discrète et hautement sécurisée pour les environnements urbains denses et les zones industrielles.",
      features: ["Tranchées et pose de fourreaux", "Déroulage de câbles HTA/BT", "Confection de boîtes de jonction", "Essais diélectriques"]
    },
    {
      id: "postes-transformation",
      icon: Building,
      color: "text-accent",
      bgColor: "bg-accent/20",
      title: "Postes de Transformation",
      description: "Installation complète de postes de livraison et de transformation HTA/BT. Conception sur mesure adaptée à la puissance requise par vos installations.",
      features: ["Postes cabines maçonnés", "Postes préfabriqués", "Équipement cellules HTA", "Tableaux généraux basse tension (TGBT)"]
    },
    {
      id: "branchements",
      icon: Zap,
      color: "text-white",
      bgColor: "bg-white/20",
      title: "Branchements Électriques",
      description: "Raccordement final des abonnés au réseau de distribution. Nous assurons la liaison entre le réseau public et les installations privées en toute sécurité.",
      features: ["Branchements souterrains", "Branchements aéro-souterrains", "Coffrets de comptage", "Mise en conformité"]
    }
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Nos <span className="text-gradient">Expertises</span></h1>
            <p className="text-xl text-muted-foreground">
              Des solutions complètes pour le transport, la distribution et le raccordement électrique, exécutées avec précision et conformité.
            </p>
          </FadeIn>
        </div>

        {/* Services List */}
        <div className="space-y-24 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <FadeIn direction={isEven ? "right" : "left"}>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden relative glass border-white/10 p-2">
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-card to-background flex items-center justify-center border border-white/5">
                        <Icon className={`w-24 h-24 ${service.color} opacity-50`} />
                      </div>
                    </div>
                  </FadeIn>
                </div>
                
                <div className="w-full md:w-1/2">
                  <FadeIn direction={isEven ? "left" : "right"} delay={0.2}>
                    <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={`/contact?sujet=${encodeURIComponent(service.title)}`}>
                      <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl">
                        Demander un devis
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </FadeIn>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
