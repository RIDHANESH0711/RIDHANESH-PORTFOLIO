'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Check, ScanFace, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper, SectionHeading, FadeInItem } from '@/components/section-wrapper';
import { TiltCard } from '@/components/tilt-card';
import { featuredProject } from '@/lib/data';

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="Featured Project"
        title={<>Something I&apos;ve <span className="gradient-text">built</span></>}
        subtitle="A showcase of my most impactful AI project."
      />

      <FadeInItem>
        <TiltCard className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/40 backdrop-blur-sm" max={4}>
          {/* Glow */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-gradient-to-br from-blue-500/15 to-fuchsia-500/15 blur-3xl" />

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:p-10">
            {/* Left: visual */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-cyan-500/10">
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ScanFace className="h-24 w-24 text-purple-400/60" strokeWidth={1} />
                  </motion.div>
                </div>
                {/* Scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  animate={{ top: ['10%', '90%', '10%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  Face Recognition Active
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div className="flex flex-col justify-center">
              <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                Featured
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {featuredProject.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {featuredProject.description}
              </p>

              {/* Features */}
              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-2">
                {featuredProject.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-400">
                      <Check className="h-2.5 w-2.5 text-white" />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="mt-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border/60 bg-background/40 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-lg shadow-purple-500/25 hover:scale-105 transition-all">
                    <Github className="h-4 w-4" />
                    GitHub Repository
                  </Button>
                </a>
                <a href={featuredProject.liveDemo}>
                  <Button variant="outline" className="gap-2 rounded-xl border-border/60 hover:scale-105 transition-all" disabled>
                    <ExternalLink className="h-4 w-4" />
                    Live Demo (Coming Soon)
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </TiltCard>
      </FadeInItem>
    </SectionWrapper>
  );
}
