import React from "react";
import { useId } from "react";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { FiDatabase, FiLock, FiRefreshCcw, FiServer, FiUserPlus, FiZap } from "react-icons/fi";

const features = [
  {
    title: "Lightning Fast Performance",
    description: "Experience blazing-fast load times and smooth interactions across all devices.",
    icon: FiZap,
  },
  {
    title: "Scalable Infrastructure",
    description: "Built on a robust architecture that grows with your business needs.",
    icon: FiServer,
  },
  {
    title: "Real-time Sync",
    description: "Keep your data synchronized across all devices in real-time.",
    icon: FiRefreshCcw,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and security measures to protect your data.",
    icon: FiLock,
  },
  {
    title: "Team Collaboration",
    description: "Seamlessly work together with your team members in real-time.",
    icon: FiUserPlus,
  },
  {
    title: "Data Management",
    description: "Powerful tools to organize and analyze your data effectively.",
    icon: FiDatabase,
  },
];

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconType;
}

function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-background/20 to-muted/20 p-8 hover:shadow-lg transition-all duration-500 hover:bg-gradient-to-b hover:from-background/40 hover:to-muted/40">
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-primary/30 to-primary/50">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
      </div>
    </div>
  );
}

interface FeatureSectionWithCardGradientProps {
  className?: string;
}

export function FeatureSectionWithCardGradient({ className }: FeatureSectionWithCardGradientProps) {
  return (
    <section className={cn("py-24 bg-background", className)}>
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-muted-foreground">
            Everything you need to manage your business, all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-background/30 to-muted/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay fill-border stroke-border"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
