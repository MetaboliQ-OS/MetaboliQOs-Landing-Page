import type { ReactNode, SVGProps } from "react";

/** Line icons in one consistent style (1.8 stroke, currentColor) for labelled signals. */
function Icon({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export const LabIcon = () => (
  <Icon>
    <path d="M9 3h6M10 3v6L5 19a1.5 1.5 0 0 0 1.3 2h11.4A1.5 1.5 0 0 0 19 19l-5-10V3" />
    <path d="M7.5 14h9" />
  </Icon>
);
export const BodyIcon = () => (
  <Icon>
    <circle cx="12" cy="5" r="2.2" />
    <path d="M8 22l1.5-8L7 10.5 12 9l5 1.5-2.5 3.5L16 22M12 9v5" />
  </Icon>
);
export const FoodIcon = () => (
  <Icon>
    <path d="M3 13h18a9 9 0 0 1-18 0zM7 9c0-2 2-2 2-4M12 9c0-2 2-2 2-4M17 9c0-2-2-2-2-4" />
  </Icon>
);
export const SleepIcon = () => (
  <Icon>
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
  </Icon>
);
export const StressIcon = () => (
  <Icon>
    <path d="M3 12h3l2.5-6 4 12 3-9 2 3H21" />
  </Icon>
);
export const MoveIcon = () => (
  <Icon>
    <circle cx="14" cy="4.5" r="2" />
    <path d="M8 21l3-6 3 2v4M6 12l4-4 3 2 2 3h3" />
  </Icon>
);
export const RecoveryIcon = () => (
  <Icon>
    <path d="M20.5 12a8.5 8.5 0 1 1-2.5-6M20.5 4v4h-4" />
  </Icon>
);
export const PillIcon = () => (
  <Icon>
    <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-35 12 12)" />
    <path d="M9.5 8.5l5 7" />
  </Icon>
);
export const ChatIcon = () => (
  <Icon>
    <path d="M21 12a8 8 0 0 1-11.7 7.1L4 20.5l1.4-4.6A8 8 0 1 1 21 12z" />
    <path d="M8.5 11h7M8.5 14h4" />
  </Icon>
);
export const DnaIcon = () => (
  <Icon>
    <path d="M7 3c0 6 10 6 10 12s-10 3-10 6M17 3c0 6-10 6-10 12s10 3 10 6M8 7h8M8 17h8" />
  </Icon>
);
export const DeviceIcon = () => (
  <Icon>
    <rect x="7" y="2.5" width="10" height="19" rx="3" />
    <path d="M10 6h4M11 18h2" />
  </Icon>
);
export const MemoryIcon = () => (
  <Icon>
    <path d="M12 3a4 4 0 0 0-4 4 3.5 3.5 0 0 0-3 5.5A3.5 3.5 0 0 0 8 18a4 4 0 0 0 4 3V3z" />
    <path d="M12 3a4 4 0 0 1 4 4 3.5 3.5 0 0 1 3 5.5A3.5 3.5 0 0 1 16 18a4 4 0 0 1-4 3" />
  </Icon>
);
