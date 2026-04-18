"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, ShieldCheck, Activity, ArrowRight, Network, Cable, Building, ShoppingCart, Snowflake } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { TextRotate } from "@/components/animations/text-rotate"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="pt-16 pb-16">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] py-20 flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-auto md:right-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-secondary/15 rounded-full blur-[100px] md:blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
              <Zap className="w-4 h-4 animate-pulse text-yellow-500" />
              <span>L'énergie de demain, aujourd'hui.</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <div className="flex flex-col text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6 sm:mb-8 leading-tight">
              <h1 className="relative z-0">
                Infrastructures
              </h1>
              <span
                className="text-gradient inline-block px-4 -mt-8 sm:-mt-12 md:-mt-16 relative z-10 font-normal tracking-normal capitalize text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "var(--font-amalfi)",
                  lineHeight: "2",
                  paddingTop: "0.5em",
                  paddingBottom: "0.5em",
                }}
              >
                <TextRotate words={["électriques", "solaires", "résilientes"]} />
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Nous concevons, installons et maintenons des réseaux de distribution électrique HTA et BT avec une précision d'ingénierie et une fiabilité absolue.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(var(--primary),0.4)] text-lg rounded-xl">
                  Démarrer un projet
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 border-white/10 hover:bg-white/5 text-lg rounded-xl glass">
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATS / TRUST SECTION */}
      <section className="py-20 border-y border-white/5 bg-black/20">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <StaggerItem>
              <div className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-2">8+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Années d'expertise</div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">80+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Projets Réussis</div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-4xl md:text-5xl font-serif font-bold text-gradient-electric mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Conformité Sécurité</div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Support Client</div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <FadeIn>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6">Expertise <span className="text-primary">Technique</span></h2>
                <p className="text-lg text-muted-foreground">Une maîtrise complète de la chaîne de distribution électrique, du réseau aérien jusqu'au raccordement final.</p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2} direction="left">
              <Link href="/services">
                <Button variant="ghost" className="group text-primary hover:text-primary/80 hover:bg-transparent -ml-4 md:ml-0">
                  Voir tous les services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <StaggerItem>
              <div className="glass-card rounded-2xl p-8 h-full group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <Network className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Réseaux Aériens</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Déploiement et maintenance de lignes électriques aériennes Haute et Basse Tension avec des matériaux de pointe.
                </p>
              </div>
            </StaggerItem>

            {/* Service 2 */}
            <StaggerItem>
              <div className="glass-card rounded-2xl p-8 h-full group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                    <Cable className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Réseaux Souterrains</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Solutions d'enfouissement sécurisées pour une distribution électrique urbaine discrète et résiliente.
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* Service 3 */}
            <StaggerItem>
              <div className="glass-card rounded-2xl p-8 h-full group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <Building className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Postes HTA/BT</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Installation de postes de transformation et raccordements complexes pour industriels et promoteurs.
                </p>
              </div>
            </StaggerItem>
            {/* Service 4 */}
            <StaggerItem>
              <div className="glass-card rounded-2xl p-8 h-full group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Vente de Matériel</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Fourniture d'équipements électriques professionnels de haute qualité pour tous vos besoins d'installation.
                </p>
              </div>
            </StaggerItem>

            {/* Service 5 */}
            <StaggerItem>
              <div className="glass-card rounded-2xl p-8 h-full group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    <Snowflake className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Froid & Climatisation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Solutions de climatisation industrielles et résidentielles avec installation et maintenance garanties.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/10 text-sm font-medium mb-6">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  <span className="text-secondary">Notre Engagement</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">L'Excellence comme <br /> Standard.</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Chez Doupa Énergie, nous ne faisons aucun compromis sur la sécurité et la qualité. Chaque projet est traité avec la plus grande rigueur technique.
                </p>
              </FadeIn>

              <StaggerContainer className="space-y-6">
                <StaggerItem className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Performance Continue</h4>
                    <p className="text-muted-foreground">Des infrastructures conçues pour durer et supporter les montées en charge de demain.</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Sécurité Maximale</h4>
                    <p className="text-muted-foreground">Respect strict des normes en vigueur pour protéger vos installations et vos équipes.</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <div className="relative">
              <FadeIn direction="left">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden relative glass border-white/50 p-2">
                  <div className="w-full h-full backdrop-blur-md rounded-2xl flex items-center justify-center relative overflow-hidden">

                    {/* Image avec effet de flottement (bounce doux) */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="absolute -inset-4 bg-[url('/images/Doupa_energie_agent_1.png')] bg-cover bg-center" 
                    />

                    {/* Overlay sombre (optionnel - ajustez l'opacité) */}
                    <div className="absolute inset-0 bg-black/20 bottom-0" />

                    {/* Texte - au dessus de tout */}
                    <div className="text-center z-10 p-8 absolute bottom-0 left-0 right-0">
                      <h3 className="text-3xl font-serif font-bold text-white mb-2 drop-shadow-lg">Innovation & Énergie</h3>
                      <p className="text-white/80 drop-shadow">Notre équipe dévouée sur le terrain.</p>
                    </div>

                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-[#1a052b] to-cyan-950 opacity-85 z-10 bg-[length:200%_200%] animate-gradient backdrop-blur-[10px]" />
              <div className="absolute inset-0 bg-[url('/images/panneau_solaire.jpg')] bg-cover bg-center mix-blend-screen opacity-100 z-0" />

              <div className="relative z-20 px-8 py-20 text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Prêt à électrifier votre avenir ?</h2>
                <p className="text-xl text-white/80 mb-10">
                  Contactez nos experts pour une étude personnalisée de vos besoins en infrastructures électriques.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 bg-white text-primary hover:bg-white/90 text-lg rounded-xl">
                      Demander un devis
                    </Button>
                  </Link>
                  <a href="tel:+221779045959">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 border-white/30 hover:bg-white/10 text-white text-lg rounded-xl">
                      Nous appeler
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
