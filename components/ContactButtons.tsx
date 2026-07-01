import { clinic } from "@/lib/data";

const actions = [
  {
    label: "WhatsApp",
    detail: clinic.contact.whatsappDisplay,
    href: clinic.contact.whatsappHref,
    external: true,
    icon: (
      <path
        d="M5 19L6.2 14.9C5.3 13.4 4.8 11.7 4.8 10C4.8 5.6 8.4 2 12.8 2C17.2 2 20.8 5.6 20.8 10C20.8 14.4 17.2 18 12.8 18C11.3 18 9.9 17.6 8.6 16.9L5 19Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Telefone",
    detail: clinic.contact.whatsappDisplay,
    href: clinic.contact.phoneHref,
    external: false,
    icon: (
      <path
        d="M4 5C4 4.4 4.4 4 5 4H8L10 9L7.5 10.5C8.5 12.7 10.3 14.5 12.5 15.5L14 13L19 15V18C19 18.6 18.6 19 18 19C10.3 19 4 12.7 4 5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "E-mail",
    detail: clinic.contact.email,
    href: `mailto:${clinic.contact.email}`,
    external: false,
    icon: (
      <path
        d="M4 6H20V18H4V6Z M4 6L12 13L20 6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    ),
  },
  {
    label: "Localização",
    detail: clinic.address.full,
    href: clinic.address.mapsShareUrl,
    external: true,
    icon: (
      <path
        d="M12 21C12 21 19 14.6 19 10C19 6.1 15.9 3 12 3C8.1 3 5 6.1 5 10C5 14.6 12 21 12 21Z M12 12.5C13.4 12.5 14.5 11.4 14.5 10C14.5 8.6 13.4 7.5 12 7.5C10.6 7.5 9.5 8.6 9.5 10C9.5 11.4 10.6 12.5 12 12.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    ),
  },
];

export function ContactButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${className}`}>
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
          className="group flex items-center gap-5 rounded-sm border border-line bg-paper p-6 transition-colors duration-500 ease-editorial hover:border-champagne-deep dark:border-line-dark dark:bg-ink-soft dark:hover:border-champagne"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-graphite/20 text-graphite transition-colors duration-500 group-hover:border-champagne-deep group-hover:text-champagne-deep dark:border-paper/20 dark:text-paper dark:group-hover:border-champagne dark:group-hover:text-champagne">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              {action.icon}
            </svg>
          </span>
          <span>
            <span className="eyebrow mb-1 block">{action.label}</span>
            <span className="block text-sm text-graphite dark:text-paper">
              {action.detail}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
