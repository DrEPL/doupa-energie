"use client"

import React from "react"
import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { Shield, Zap, Target, Users } from "lucide-react"

export default function AProposPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-primary/30 text-primary text-sm font-medium mb-6">
              Notre Histoire
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4 md:mb-6 leading-tight">L'Expertise au service de <br className="hidden sm:block"/><span className="text-gradient font-normal px-2" style={{
                  fontFamily: "var(--font-amalfi)"
                }}>votre énergie</span>.</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Doupa Énergie s'impose comme un acteur incontournable dans le secteur des réseaux électriques au Sénégal. Guidés par l'excellence et l'innovation, nous construisons les infrastructures de demain.
            </p>
          </FadeIn>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <FadeIn delay={0.2}>
            <div className="glass-card p-10 rounded-3xl h-full border-t-2 border-t-primary/50">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fournir des solutions électriques fiables, sécurisées et innovantes pour accompagner le développement des infrastructures industrielles et urbaines, en garantissant une qualité de service irréprochable.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass-card p-10 rounded-3xl h-full border-t-2 border-t-secondary/50">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Devenir la référence sous-régionale en ingénierie électrique, reconnue pour notre rigueur technique et notre capacité à relever les défis énergétiques les plus complexes de notre époque.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Robert Doupa Section */}
        <section className="mb-24 relative overflow-hidden rounded-3xl glass border-white/10 p-8 md:p-12">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] pointer-events-none" />
          
          <div className="grid md:grid-cols-5 gap-12 items-center relative z-10">
            <div className="md:col-span-2">
              <FadeIn>
                <div className="aspect-square rounded-2xl overflow-hidden relative border-4 border-white/5 mx-auto max-w-[280px] md:max-w-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-overlay z-10" />
                  {/* Image Placeholder */}
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Users className="w-16 h-16 md:w-20 md:h-20 text-white/20" />
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="md:col-span-3">
              <FadeIn delay={0.2} direction="left">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Robert Doupa</h2>
                <p className="text-primary font-medium text-lg mb-6">Managing Partner & Fondateur</p>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                  <p>
                    Fort de plusieurs années d'expérience dans le domaine de la distribution électrique haute et basse tension, Robert a fondé Doupa Énergie avec une vision claire : élever les standards de qualité et de sécurité au Sénégal.
                  </p>
                  <p>
                    Son leadership technique et sa passion pour l'ingénierie se reflètent dans chaque projet entrepris par l'entreprise, garantissant des résultats qui dépassent les attentes des clients.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-secondary" />
                    <span className="font-medium">Expertise Certifiée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="font-medium">Leadership Éprouvé</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
