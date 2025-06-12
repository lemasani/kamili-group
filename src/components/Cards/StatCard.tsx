import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { AnimatedNumber } from '../ui/animated-number';
import { Card, CardContent } from '../ui/card';

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  description: string;
  variants?: Variants;
}

export function StatCard({ icon: Icon, value, suffix, label, description, variants }: StatCardProps) {
  return (
    <motion.div variants={variants}>
      <Card className="text-center bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <div className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl">
                <Icon className="h-8 w-8 text-secondary" />
              </div>
            </div>
            <AnimatedNumber
              value={value}
              suffix={suffix}
              className="text-4xl font-bold text-primary mb-2"
            />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{label}</h4>
            <p className="text-sm text-gray-600 text-center">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}