"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export function PageTransition({ children }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return <div className={`page-transition ${visible ? "is-visible" : ""}`}>{children}</div>;
}

export function TransitionLink({ href, children, className = "" }) {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (leaving) return;
    setLeaving(true);
    window.setTimeout(() => router.push(href), 180);
  };

  return <a href={href} onClick={handleClick} className={`${className} ${leaving ? "page-link-leaving" : ""}`}>{children}</a>;
}
