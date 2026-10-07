// Brand config — hydrated at scaffold time by build_site.py from
// plan-input.json and the client record. All {{TOKENS}} are replaced
// by the scaffold step; this file should not be hand-edited after that.

export const brand = {
  slug: "rt-olson-plumbing-heating-and-air-conditioning",
  displayName: "RT Olson Plumbing, Heating and Air Conditioning",
  shortName: "RT Olson Plumbing, Heating and Air Conditioning",
  legalName: "RT Olson Plumbing, Heating and Air Conditioning",
  domain: "rtolsonplumbing.com",
  canonicalUrl: "https://rtolsonplumbing.com",
  phone: "(951) 344-5596",
  phoneRaw: "+19513445596",
  // Sitewide call-tracking number (2026-08-24). When BOTH fields are set,
  // a tiny inline script in BaseLayout swaps every visible phone mention
  // and tel: link to this number AFTER the page renders. The HTML source,
  // the JSON-LD in schema.ts, and anything crawlers/citation-checkers read
  // keep the canonical NAP number above — humans dial the tracked line,
  // Google sees consistent NAP. Empty = feature off (default at scaffold;
  // filled by the call-tracking provisioning step).
  trackingPhone: "(951) 643-8514",
  trackingPhoneRaw: "+19516438514",
  email: "office@rtoplumbing.com",
  hours: "24/7",
  foundedYear: "2014",
  primaryCity: "Corona",
  primaryState: "CA",
  // primaryCity/primaryState = the #1 MARKETING city (headlines, coverage
  // copy). addressCity/addressState = where the business PHYSICALLY is.
  // They are usually the same and often diverge (DISS: Farrell PA office,
  // Youngstown OH target) — only the address pair may go in a PostalAddress.
  addressCity: "Corona",
  addressState: "CA",
  streetAddress: "9064 Pulsar Ct. Suite J",
  postalCode: "92883",
  lat: "33.8752945",
  lng: "-117.566444",
  placeId: "ChIJrwzUDFa23IARkhGQxTSJGY8",
  googleCid: "",
  imagesBase: "https://images.rtolsonplumbing.com",
  googleMapsApiKey: "",
  // Analytics — set post-scaffold (scripts/analytics_set.py / create_ga4.py); no-op if empty
  ga4MeasurementId: "G-D2RXDRWJ8D",
  clarityProjectId: "",
  logoUrl: "/images/logo.png",
  licenseNumbers: ["997337"] as string[],
  licenseAuthority: "",
  // State license-verification page — the footer links the license number here.
  licenseLookupUrl: "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx",
  licenseType: "",
  // Operator-confirmed "licensed & insured" attestation from plan-input.json —
  // lets the TrustStrip show the badge before a license number is on file.
  licensedInsuredAttested: true as boolean,
  certifications: [] as string[],
  trustBadges: ["Licensed & Insured", "24/7 Emergency Service", "Locally Owned & Operated"] as string[],
  jobPhotos: [] as string[],
  sameAsUrls: ["https://www.facebook.com/rtolsonplumbing/", "https://maps.google.com/maps?cid=10311423681587319186", "https://www.rtolsonplumbing.com/services/drain-cleaning/"] as string[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "4.9",
  gbpReviewCount: "615",
  gbpReviews: [
    { author: "Boota", rating: 5, text: "RT OLSON have always been on time and have always done clean work. They did a great job installing my water filtration system", when: "October 2026" },
    { author: "Bob", rating: 5, text: "These guys were on time and they did quality work.", when: "October 2026" },
    { author: "Caroll", rating: 5, text: "I have used their service several times. The technicians have all been very professional and courteous. They find the problem and get it fixed right.", when: "October 2026" },
    { author: "Courtney", rating: 5, text: "My unit was overheating . Mike arrived and could not have been any more wonderful. Mike went above and beyond, He called his supervisor who was a wonderful ,kind man and we worked out an amazing deal way lower than any other Co. would have quoted me . I also was given a membership and they send…", when: "October 2026" },
    { author: "Rajat", rating: 4, text: "They did a very good job in fixing our garage water pipelines and in a timely manner.", when: "October 2026" },
    { author: "Kathleen", rating: 5, text: "RT Olsen did an amazing job on my property. This company responded quickly to my need and delivered the best pricing. Thank you for taking good care of my home", when: "September 2026" },
  ] as { author: string; rating: number; text: string; when: string }[],
  tagline: "Plumbing, heating & air services in Corona, CA.",
  ctaLabel: "24/7 Emergency Line",
  // Vertical trade-identity copy — resolved at scaffold time from
  // templates/{vertical}/vertical-tokens.json (see scripts/verticals.py).
  // Components must use these instead of hardcoding a trade phrase.
  tradeNoun: "plumbing",
  specialistPhrase: "Plumbing, Heating & Air Specialists",
  announcementSuffix: "24/7 Emergency Service",
  homeAboutBlurb: "RT Olson Plumbing, Heating and Air Conditioning serves Corona and the surrounding CA area with full-service plumbing, heating, and air conditioning. From emergency plumbing repairs, drain cleaning, and water heater service to complete AC and furnace installation, our technicians handle it all — and we answer the phone 24/7, so help is on the way the moment something goes wrong.",
} as const;

export const entityId = `${brand.canonicalUrl}/#identity`;
