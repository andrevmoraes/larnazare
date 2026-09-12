type IconProps = {
  className?: string;
};

const defaultProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconHospital({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className} aria-hidden="true">
      <path d="M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16" />
      <path d="M14 21V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11" />
      <path d="M2 21h20" />
      <path d="M8 8v6M5 11h6" />
      <path d="M16.5 14.5h2M17.5 13.5v2" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15.5 15.2c2.6.3 4.5 2 4.5 4.8" />
    </svg>
  );
}

export function IconHeart({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className} aria-hidden="true">
      <path d="M12 20s-7-4.4-9.5-9C.7 7.4 2.4 4 5.8 4c1.9 0 3.4 1 4.2 2.5C10.8 5 12.3 4 14.2 4c3.4 0 5.1 3.4 3.3 7-2.5 4.6-9.5 9-9.5 9Z" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className} aria-hidden="true">
      <path d="M12 21s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...defaultProps} className={className} aria-hidden="true">
      <path d="M5 4h3l1.5 4.5L7.5 10a11 11 0 0 0 6.5 6.5l1.5-2L20 16v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />
    </svg>
  );
}
