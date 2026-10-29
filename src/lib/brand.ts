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
  sameAsUrls: ["https://www.facebook.com/rtolsonplumbing/", "https://www.rtolsonplumbing.com/services/drain-cleaning/", "https://maps.google.com/maps?cid=10311423681587319186", "https://www.yelp.com/biz/rt-olson-plumbing-heating-and-air-conditioning-corona-4", "https://www.bbb.org/us/ca/anaheim/profile/plumber/rt-olson-plumbing-heating-and-air-conditioning-1126-850038253/addressId/777657", "https://www.angi.com/companylist/us/ca/corona/rt-olson-plumbing%2C-heating-and-air-conditioning-reviews-8562287.htm"] as string[],
  awards: [{"name": "Nextdoor Neighborhood Favorite", "year": "2024", "organizer": "Nextdoor", "url": "https://nextdoor.com/pages/rt-olson-p-alton-il/"}] as { name: string; year?: string | number; category?: string; organizer?: string; url?: string; image?: string }[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "4.9",
  gbpReviewCount: "624",
  gbpReviews: [
    { author: "Ye", rating: 5, text: "Talked with the team at RT Olson Plumbing, Heating and Air Conditioning about how to protect a home from water damage. Friendly, knowledgeable and no pressure. Good to know who to call for plumbing.", when: "October 2026" },
    { author: "Anssi", rating: 5, text: "I have been working with Bob for years now and they always come in clutch whether it is a leaky pipe, water heater or garbage disposal. His team is very professional and take pride in their work", when: "October 2026" },
    { author: "Steven", rating: 5, text: "Osborn plumbing has a great team. Amazing response and there work is the best. I have recommended your services to several people on our block and they have had the same amazing experience. You guys are amazing - thank you so much.", when: "October 2026" },
    { author: "Zhenghe", rating: 5, text: "Very professional very friendly", when: "October 2026" },
    { author: "Elaine", rating: 5, text: "Great service. On time and good price. Gave understandable advice so we could make the best choice for us. No pressure.", when: "October 2026" },
    { author: "Rodney", rating: 5, text: "Great service, on time with great communication.", when: "October 2026" },
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
