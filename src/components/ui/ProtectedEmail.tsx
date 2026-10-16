"use client";

import { useEffect, useState, type MouseEventHandler, type ReactNode } from "react";

// The address is never written into the HTML or as one string in the bundle.
// It is assembled in the browser after the page loads, so simple scrapers
// that read page source (the main source of spam) never see it.
// Without JavaScript the link falls back to the contact page.
function assemble(): string {
  return "moc.liamg@kunevahdnim".split("").reverse().join("");
}

function useEmail(): string | null {
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => setEmail(assemble()), []);
  return email;
}

/** The address as text. Shows a neutral label until the browser assembles it. */
export function EmailAddress({ fallback = "Email Erika" }: { fallback?: string }) {
  const email = useEmail();
  return <>{email ?? fallback}</>;
}

/** A mailto link whose address is only added in the browser. */
export function EmailLink({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
}) {
  const email = useEmail();
  return (
    <a href={email ? `mailto:${email}` : "/contact"} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
