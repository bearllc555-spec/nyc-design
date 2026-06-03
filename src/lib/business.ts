/** Google Business Profile — New Empire Corp */
export const business = {
  /** Hero nav wordmark only */
  brandName: "Empire Corp",
  name: "New Empire Corp",
  displayName: "Empire Corp",
  locationLabel: "NYC",
  address: "570 Lexington Ave, Suite 2000A\nNew York, NY 10022",
  addressLine: "570 Lexington Ave, Suite 2000A, New York, NY 10022",
  phone: "(212) 991-8187",
  phoneHref: "tel:+12129918187",
} as const;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(business.addressLine)}&hl=en&z=17&ie=UTF8&t=k&output=embed`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(business.addressLine)}`;
