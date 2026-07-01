import { clinic } from "@/lib/data";

export function MapEmbed({ className = "" }: { className?: string }) {
  const query = encodeURIComponent(clinic.address.mapsEmbedQuery);
  const src = `https://maps.google.com/maps?q=${query}&z=16&output=embed`;

  return (
    <div className={`overflow-hidden rounded-sm border border-line dark:border-line-dark ${className}`}>
      <iframe
        title={`Localização — ${clinic.clinicName}`}
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 360, filter: "grayscale(0.15) contrast(1.02)" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
