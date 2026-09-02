import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Interactive Tools | Mindhaven",
  description: "Free interactive tools and reading recommendations to support self-reflection, stress regulation, and personal clarity.",
  alternates: { canonical: "https://mindhaven.uk/resources" },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
