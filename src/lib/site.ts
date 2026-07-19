import { media } from "./media";

export const business = {
  name: "JJ Fencing & Construction",
  legalName: "JJ Fencing and Construction LLC",
  since: 2013,
  years: 13,
  phone: "(920) 555-0134", // sample demo number
  phoneHref: "tel:+19205550134",
  email: "jjfencingandconstruction@gmail.com", // sample demo contact
  address: "Appleton, WI 54911",
  hours: [
    { d: "Mon – Fri", h: "7:00 AM – 5:00 PM" },
    { d: "Saturday", h: "By appointment" },
    { d: "Sunday", h: "Closed" },
  ],
  tagline: "Built for Wisconsin. Built to last.",
  primaryLine: "The Fox Valley's Fence & Construction Crew, Since 2013.",
} as const;

export const voiceLines = [
  "Built for Wisconsin. Built to last.",
  "Set below the frost line. Standing straight for good.",
  "Good fences. Great neighbors. Since '13.",
  "Fox Valley tough, family-built.",
];

export const serviceArea = [
  "Appleton",
  "Neenah",
  "Menasha",
  "Kaukauna",
  "Kimberly",
  "Grand Chute",
  "Oshkosh",
];

export const nav = [
  { label: "Styles & Materials", href: "/styles" },
  { label: "Pool & Permits", href: "/pool-code" },
  { label: "Commercial", href: "/commercial" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Story", href: "/about" },
];

export type Material = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
  bestFor: string;
  heightsFt: number[];
  gates: string[];
  addOns: { label: string; note: string }[];
  priceFrom: number; // per linear foot, installed — sample data
  tag?: string;
};

export const materials: Material[] = [
  {
    slug: "wood",
    name: "Wood Privacy",
    blurb:
      "Warm cedar and pressure-treated pine — the Fox Valley backyard standard, hand-set deep below the frost line so it never heaves through a Wisconsin winter.",
    image: media.wood,
    bestFor: "Backyards • Privacy • HOA-friendly looks",
    heightsFt: [4, 6, 8],
    gates: ["Single walk gate", "Double drive gate", "Arched top gate"],
    addOns: [
      { label: "Stain & seal package", note: "Locks out snow-melt + UV" },
      { label: "Decorative post caps", note: "Flat, gothic, or solar-lit" },
      { label: "Lattice topper", note: "+1 ft of style and light" },
    ],
    priceFrom: 28,
    tag: "Most popular",
  },
  {
    slug: "aluminum",
    name: "Aluminum Ornamental",
    blurb:
      "Powder-coated, rust-proof, and pool-code ready. Clean sightlines that shrug off road salt and never rot, warp, or need painting.",
    image: media.pool,
    bestFor: "Pools • Front yards • Views you want to keep",
    heightsFt: [4, 5, 6],
    gates: ["Self-closing pool gate", "Double gate", "Keyed lockable gate"],
    addOns: [
      { label: "Self-closing / self-latching hardware", note: "Meets local pool-barrier code" },
      { label: "Puppy-picket bottom rail", note: "Keeps small pets in" },
      { label: "Decorative finials", note: "Ball, spear, or flat" },
    ],
    priceFrom: 34,
    tag: "Pool favorite",
  },
  {
    slug: "vinyl",
    name: "Vinyl / PVC",
    blurb:
      "Bright, low-maintenance, and built for new-construction subdivisions. Won't crack in the freeze-thaw and wipes clean every spring.",
    image: media.vinyl,
    bestFor: "New builds • Low upkeep • Bright white looks",
    heightsFt: [4, 6],
    gates: ["Matching privacy gate", "Semi-private gate", "Double drive gate"],
    addOns: [
      { label: "Matching post-cap lighting", note: "Solar LED caps" },
      { label: "Semi-private lattice top", note: "Airflow + privacy" },
      { label: "Color-matched hardware", note: "Black, white, or bronze" },
    ],
    priceFrom: 36,
  },
  {
    slug: "chain-link",
    name: "Chain Link",
    blurb:
      "Tough, affordable, and fast. Galvanized or black-vinyl-coated for yards, pets, and property lines.",
    image: media.commercial,
    bestFor: "Pets • Property lines • Budget-friendly",
    heightsFt: [4, 5, 6],
    gates: ["Single swing gate", "Rolling gate", "Double gate"],
    addOns: [
      { label: "Black vinyl coating", note: "Disappears into the landscape" },
      { label: "Privacy slats", note: "Adds screening + color" },
      { label: "Bottom tension wire", note: "Keeps pets from pushing under" },
    ],
    priceFrom: 18,
  },
  {
    slug: "wrought-iron",
    name: "Wrought Iron",
    blurb:
      "Custom, welded, and built to impress — the grand-entrance and estate option, made for a lifetime.",
    image: media.pool,
    bestFor: "Estates • Entrances • Security with style",
    heightsFt: [5, 6, 8],
    gates: ["Custom estate gate", "Automated drive gate", "Arched pedestrian gate"],
    addOns: [
      { label: "Gate automation", note: "Keypad + remote entry" },
      { label: "Custom scrollwork", note: "Designed with you" },
      { label: "Powder-coat finish", note: "Any color, rust-proof" },
    ],
    priceFrom: 55,
    tag: "Custom",
  },
];

export type PropertyType = {
  slug: string;
  label: string;
  hint: string;
  recommend: string[]; // material slugs
  upsell: { label: string; note: string };
};

export const propertyTypes: PropertyType[] = [
  {
    slug: "home",
    label: "My home",
    hint: "Privacy, curb appeal, kids & pets",
    recommend: ["wood", "vinyl", "aluminum"],
    upsell: { label: "Add a stain & seal package", note: "Doubles the life of a wood fence through Wisconsin winters." },
  },
  {
    slug: "pool",
    label: "Around my pool",
    hint: "Local safety code applies here",
    recommend: ["aluminum", "wrought-iron"],
    upsell: {
      label: "Self-closing / self-latching gate hardware",
      note: "Required by pool-safety code — we install it to pass inspection.",
    },
  },
  {
    slug: "hoa",
    label: "In an HOA neighborhood",
    hint: "Needs approved styles & colors",
    recommend: ["vinyl", "aluminum", "wood"],
    upsell: { label: "HOA approval help", note: "We prep your spec sheet so the board says yes the first time." },
  },
  {
    slug: "commercial",
    label: "Commercial / site",
    hint: "Security, scale, and durability",
    recommend: ["chain-link", "wrought-iron", "aluminum"],
    upsell: { label: "Security-grade gate automation", note: "Keypad, badge, or remote access control." },
  },
];

// ---- Horizontal fence showcase (scroll-driven slider after the hero) ----
export type ShowcasePanel = {
  slug: string;
  word: string; // giant display word
  name: string;
  detail: string;
  image: string; // wide panorama strip
  priceFrom: number;
};

export const showcasePanels: ShowcasePanel[] = [
  {
    slug: "wood",
    word: "WOOD",
    name: "Cedar Privacy",
    detail:
      "The Fox Valley classic — warm cedar, set deep below the frost line, stained to shrug off snow-melt and sun.",
    image: media.panoWood,
    priceFrom: 28,
  },
  {
    slug: "aluminum",
    word: "ALUMINUM",
    name: "Ornamental Aluminum",
    detail:
      "Rust-proof, salt-tough, and pool-code ready. Keeps the view — and passes inspection.",
    image: media.panoAluminum,
    priceFrom: 34,
  },
  {
    slug: "vinyl",
    word: "VINYL",
    name: "Vinyl / PVC",
    detail:
      "Bright, low-maintenance, HOA-friendly. Won't crack in the freeze-thaw and holds its color for decades.",
    image: media.panoVinyl,
    priceFrom: 36,
  },
  {
    slug: "chain-link",
    word: "CHAIN LINK",
    name: "Chain Link",
    detail:
      "Tough, fast, and budget-friendly — yards, pets, and jobsites, galvanized or black-coated.",
    image: media.panoChain,
    priceFrom: 18,
  },
  {
    slug: "wrought-iron",
    word: "IRON",
    name: "Wrought Iron",
    detail:
      "Custom, welded, and built to impress — estate entrances and security with style.",
    image: media.panoIron,
    priceFrom: 55,
  },
];

export const differentiators = [
  {
    title: "13 years, same Valley",
    body: "Not a franchise. The same crew has fenced Appleton, Neenah, Menasha, Kaukauna and Kimberly since 2013.",
  },
  {
    title: "Fence & construction, one crew",
    body: "Wood, aluminum, vinyl, chain link, wrought iron, gates, and general construction — all under one roof.",
  },
  {
    title: "We repair any fence",
    body: "Even the ones we didn't install. Snow-load damage, frost-heaved posts, broken gates — we'll set it right.",
  },
  {
    title: "Licensed & insured",
    body: "A licensed, insured Wisconsin contractor. Permits pulled, code met, inspections passed.",
  },
];

export const floridaPillars = [
  {
    title: "Frost-line footings",
    body: "Wisconsin's frost line runs deep — posts set too shallow heave and lean by spring. We set ours below it, packed in concrete, so your fence stays plumb for good.",
    accent: "sky",
  },
  {
    title: "HOA approval",
    body: "New subdivisions mean strict style and color rules. We know the approved specs and prep your submittal so the board says yes.",
    accent: "clay",
  },
  {
    title: "Snow, salt & freeze-thaw",
    body: "Road salt, plow spray, and months of freeze-thaw eat cheap fences and hardware. We use galvanized, powder-coated materials built for a northern winter.",
    accent: "grove",
  },
];

export type Testimonial = { quote: string; name: string; town: string; material: string };
export const testimonials: Testimonial[] = [
  {
    quote:
      "They fenced our first house in Appleton in 2015 and just did our new build in Neenah. Same crew, same care, years apart.",
    name: "The Alvarez Family",
    town: "Neenah, WI",
    material: "Vinyl privacy",
  },
  {
    quote:
      "Pool inspection passed on the first try. They knew the code cold and the self-latching gate is exactly right.",
    name: "Dana R.",
    town: "Kimberly, WI",
    material: "Aluminum pool fence",
  },
  {
    quote:
      "A spring thaw heaved 40 feet of our old fence — one they didn't even build. They reset it in a day and it looks better than before.",
    name: "Mike & Carol T.",
    town: "Kaukauna, WI",
    material: "Wood repair",
  },
  {
    quote:
      "Straight posts, clean lines, on time, on budget. You can tell they've been doing this a long time.",
    name: "Priya S.",
    town: "Grand Chute, WI",
    material: "Wood privacy",
  },
];

export type Project = {
  title: string;
  town: string;
  material: string;
  image: string;
  span?: boolean;
};
export const projects: Project[] = [
  { title: "Cedar privacy line", town: "Appleton", material: "Wood", image: media.wood, span: true },
  { title: "Backyard pool enclosure", town: "Neenah", material: "Aluminum", image: media.pool },
  { title: "New-build subdivision", town: "Menasha", material: "Vinyl", image: media.vinyl },
  { title: "Riverfront property line", town: "Kaukauna", material: "Wood + Aluminum", image: media.hero, span: true },
  { title: "Weathered → new cedar", town: "Kimberly", material: "Wood repair", image: media.beforeAfter, span: true },
  { title: "Jobsite perimeter", town: "Oshkosh", material: "Chain link", image: media.commercial },
];

export const stats = [
  { n: "13", label: "Years in business" },
  { n: "7", label: "Towns served" },
  { n: "6", label: "Fence materials" },
  { n: "Any", label: "Fence we'll repair" },
];

// ---- Mock admin dashboard sample data ----
export const adminTabs = [
  "Dashboard",
  "Jobs",
  "Estimates",
  "Schedule",
  "Staff",
  "Materials",
  "Analytics",
  "Accounting",
  "Socials",
  "Settings",
];
