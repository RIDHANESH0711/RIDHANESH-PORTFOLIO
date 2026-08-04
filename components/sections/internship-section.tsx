'use client';

import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionWrapper, SectionHeading, FadeInItem } from '@/components/section-wrapper';
import { internship } from '@/lib/data';

export function InternshipSection() {
  return (
    <SectionWrapper id="internship">
      <SectionHeading
        eyebrow="Internship"
        title={<>Professional <span className="gradient-text">experience</span></>}
        subtitle="Where I applied my skills in a real-world environment."
      />

      <FadeInItem>
        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400 sm:left-1/2" />

          {/* Timeline node */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="absolute left-6 top-0 -translate-x-1/2 sm:left-1/2"
          >
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 ring-4 ring-background" />
          </motion.div>

          {/* Card */}
          <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pl-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-purple-500/40 sm:p-8"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/15 to-cyan-500/15 blur-2xl" />

              {/* Company logo placeholder */}
              <div className="relative mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-border/50">
                  <Building2 className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{internship.company}</h3>
                  <p className="text-sm text-purple-400">{internship.role}</p>
                </div>
              </div>

              <div className="relative mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                Completed
              </div>

              <p className="relative text-sm leading-relaxed text-muted-foreground">
                {internship.description}
              </p>

              <div className="relative mt-6">
                <a href={internship.certificate} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 rounded-xl border-purple-500/30 hover:bg-purple-500/10 hover:scale-105 transition-all">
                    <Award className="h-4 w-4 text-purple-400" />
                    View Certificate
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </FadeInItem>
    </SectionWrapper>
  );
}
