import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { 
  BarChart3, 
  Cloud, 
  Code2, 
  Cpu, 
  Globe2, 
  Layers, 
  Shield, 
  Users2 
} from "lucide-react";

export function BentoSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-muted-foreground">
            Everything you need to build and scale your applications, all in one place.
          </p>
        </div>
        <BentoGrid>
          <BentoCard
            name="Global Infrastructure"
            description="Deploy your applications across our worldwide network of data centers for optimal performance."
            className="col-span-3 md:col-span-2"
            Icon={Globe2}
            href="#"
            cta="Learn more"
            background={<BackgroundBeams className="opacity-20" />}
          />
          <BentoCard
            name="Real-time Analytics"
            description="Monitor your system's performance with advanced analytics and insights."
            className="col-span-3 md:col-span-1"
            Icon={BarChart3}
            href="#"
            cta="View analytics"
            background={<BackgroundBeams className="opacity-20" />}
          />
          <BentoCard
            name="Team Collaboration"
            description="Work seamlessly with your team using our built-in collaboration tools."
            className="col-span-3 md:col-span-1"
            Icon={Users2}
            href="#"
            cta="Start collaborating"
            background={<BackgroundBeams className="opacity-20" />}
          />
          <BentoCard
            name="Cloud Storage"
            description="Secure and scalable cloud storage solutions for your data needs."
            className="col-span-3 md:col-span-2"
            Icon={Cloud}
            href="#"
            cta="Explore storage"
            background={<BackgroundBeams className="opacity-20" />}
          />
          <BentoCard
            name="API Integration"
            description="Easy-to-use APIs for seamless integration with your existing systems."
            className="col-span-3 md:col-span-1"
            Icon={Code2}
            href="#"
            cta="View API docs"
            background={<BackgroundBeams className="opacity-20" />}
          />
          <BentoCard
            name="Security First"
            description="Enterprise-grade security features to protect your data and applications."
            className="col-span-3 md:col-span-2"
            Icon={Shield}
            href="#"
            cta="Learn about security"
            background={<BackgroundBeams className="opacity-20" />}
          />
          <BentoCard
            name="Microservices"
            description="Build and deploy scalable microservices architecture with ease."
            className="col-span-3 md:col-span-1"
            Icon={Layers}
            href="#"
            cta="Get started"
            background={<BackgroundBeams className="opacity-20" />}
          />
          <BentoCard
            name="Edge Computing"
            description="Leverage edge computing for faster processing and reduced latency."
            className="col-span-3 md:col-span-1"
            Icon={Cpu}
            href="#"
            cta="Learn more"
            background={<BackgroundBeams className="opacity-20" />}
          />
        </BentoGrid>
      </div>
    </section>
  );
} 