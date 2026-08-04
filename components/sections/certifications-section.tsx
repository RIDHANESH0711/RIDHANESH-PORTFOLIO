'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper, SectionHeading, FadeInItem } from '@/components/section-wrapper';
import { TiltCard } from '@/components/tilt-card';
import { certifications } from '@/lib/data';

export function CertificationsSection() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title={<>My <span className="gradient-text">achievements</span></>}
        subtitle="Continuous learning through professional certifications."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <FadeInItem key={cert.title}>
            <TiltCard className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-purple-500/40" max={6}>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-purple-500/15 to-cyan-500/15 blur-2xl transition-opacity group-hover:opacity-30" />

              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-border/50">
                    <Award className="h-6 w-6 text-purple-400" />
                  </div>
                  <BadgeCheck className="h-5 w-5 text-green-500/70" />
                </div>

                <h3 className="font-display text-base font-semibold leading-snug">{cert.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cert.platform}</p>

                <div className="mt-auto pt-6">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full gap-2 rounded-xl border-border/60 hover:bg-purple-500/10 hover:scale-105 transition-all">
                      <ExternalLink className="h-3.5 w-3.5" />
                      View Certificate
                    </Button>
                  </a>
                </div>
              </div>
            </TiltCard>
          </FadeInItem>
        ))}
      </div>
    </SectionWrapper>
  );
}
