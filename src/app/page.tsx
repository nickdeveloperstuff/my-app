"use client";

import { PricingBasic } from "./code.demo";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { HomeIcon, Settings, UserIcon, Bell } from "lucide-react";
import { Footerdemo } from "@/components/ui/footer-section";
import { Hero } from "@/components/ui/animated-hero";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { TestimonialSection } from "@/components/ui/testimonial-section";
import { FeatureSectionWithCardGradient } from "@/components/blocks/feature-section-with-card-gradient";
import { Timeline } from "@/components/ui/timeline";

const navigationItems = [
  {
    name: "Home",
    url: "/",
    icon: HomeIcon
  },
  {
    name: "Profile",
    url: "/",
    icon: UserIcon
  },
  {
    name: "Settings",
    url: "/",
    icon: Settings
  },
  {
    name: "Notifications",
    url: "/",
    icon: Bell
  }
];

const demoPlans = [
  {
    name: "STARTER",
    price: "50",
    yearlyPrice: "40",
    period: "per month",
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "48-hour support response time",
      "Limited API access",
      "Community support",
    ],
    description: "Perfect for individuals and small projects",
    buttonText: "Start Free Trial",
    href: "/sign-up",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response time",
      "Full API access",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "299",
    yearlyPrice: "239",
    period: "per month",
    features: [
      "Everything in Professional",
      "Custom solutions",
      "Dedicated account manager",
      "1-hour support response time",
      "SSO Authentication",
      "Advanced security",
      "Custom contracts",
      "SLA agreement",
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

const timelineData = [
  {
    title: "2024",
    content: (
      <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
        <h4 className="text-xl font-bold mb-2">Latest Innovations</h4>
        <p className="text-neutral-600 dark:text-neutral-400">
          Introducing cutting-edge features and revolutionary improvements to enhance your experience.
        </p>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
        <h4 className="text-xl font-bold mb-2">Major Milestones</h4>
        <p className="text-neutral-600 dark:text-neutral-400">
          Achieved significant growth and implemented groundbreaking technologies.
        </p>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
        <h4 className="text-xl font-bold mb-2">Foundation</h4>
        <p className="text-neutral-600 dark:text-neutral-400">
          Started our journey with a vision to transform the industry.
        </p>
      </div>
    ),
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NavBar items={navigationItems} className="mb-8" />
      <Hero />
      <div className="-mt-20">
        <Timeline data={timelineData} />
      </div>
      <TestimonialSection />
      <FeaturesSectionWithHoverEffects />
      <FeatureSectionWithCardGradient />
      <PricingBasic />
      <Footerdemo />
    </main>
  );
}
