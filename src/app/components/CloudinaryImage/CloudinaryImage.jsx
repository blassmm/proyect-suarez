"use client";

import { CldImage } from "next-cloudinary";

const hasCloudName = Boolean(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

export default function CloudinaryImage({ alt, className, ...props }) {
  if (hasCloudName) {
    return <CldImage alt={alt} className={className} {...props} />;
  }

  return (
    <div
      className={className}
      role="img"
      aria-label={alt}
      style={{
        display: "grid",
        placeItems: "center",
        background: "linear-gradient(135deg, #111827, #374151)",
        color: "#f9fafb",
        fontSize: "0.875rem",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      {alt}
    </div>
  );
}
