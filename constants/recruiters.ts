import type { Recruiter } from "@/types";

/**
 * DATA STATUS: VERIFIED.
 * Company names below are taken directly from the two "Past Recruiters"
 * pages and the "Placements 2026" pages of the ECA Placement Brochure
 * 2026-27. Tier is an editorial grouping (well-known national/MNC
 * brands = platinum, established mid-size firms = gold, everything else
 * = standard) — the brochure itself does not rank recruiters into tiers,
 * so treat the tier assignment as presentational judgement, not a
 * confirmed fact, even though the company name itself is verified.
 *
 * Logo assets: 71 of 72 entries now have `logoSrc` pointing at a real
 * logo image cropped directly from the "Past Recruiters" grid pages of
 * the brochure (public/images/recruiters/<id>.jpg), grid-cropped and
 * visually cross-checked cell-by-cell against the source pages. The one
 * remaining entry without a brochure-derived logo is the 2026 core
 * recruiter set (Motherson, Hero MotoCorp, Honda, JK Cement, Statix
 * Electric, Yutika, Vishakha Group, Sigma, Mednext, Jaro Education,
 * Pinnacle Infotech, Albatross Projects, Cyntexa, Knodtec) — these
 * companies appear only in the "Placements 2026" student-photo pages as
 * small text badges next to each student, not in the dedicated logo
 * grid pages, so no clean standalone logo file could be extracted; they
 * fall back to the monogram badge until a logo is sourced separately.
 * See MISSING_ASSETS.md for the itemised list.
 */
export const trustedRecruiters: Recruiter[] = [
  // Recent core recruiters (2026 campus placements) — logo wall trimmed to
  // the four entries with a sourced, real logo file for now; the rest of
  // the 2026 core set (Honda, JK Cement, Larsen & Toubro, Torrent Gas,
  // Statix Electric, Vishakha Group, Mednext, Jaro Education, Pinnacle
  // Infotech, Albatross Projects, Cyntexa, Knodtec) stays out of this wall
  // until a matching logo file is supplied — see MISSING_ASSETS.md.
  { id: "motherson", name: "Motherson", logoSrc: "/images/recruiters/motherson-new.png", tier: "platinum", status: "verified" },
  { id: "hero-motocorp", name: "Hero MotoCorp", logoSrc: "/images/recruiters/hero-motocorp-new.png", tier: "platinum", status: "verified" },
  { id: "yutika", name: "Yutika", logoSrc: "/images/recruiters/yutika-new.png", tier: "standard", status: "verified" },
  { id: "sigma", name: "Sigma", logoSrc: "/images/recruiters/sigma-new.png", tier: "standard", status: "verified" },
  { id: "sopra-steria", name: "Sopra Steria", logoSrc: "/images/recruiters/sopra-steria.png", tier: "gold", status: "verified" },
  { id: "isgec", name: "ISGEC Heavy Engineering", logoSrc: "/images/recruiters/isgec.jpg", tier: "gold", status: "verified" },

  // Broader "Past Recruiters" wall
  { id: "infosys", name: "Infosys", logoSrc: "/images/recruiters/infosys.jpg", tier: "platinum", status: "verified" },
  { id: "tcs", name: "Tata Consultancy Services", logoSrc: "/images/recruiters/tcs-new.png", tier: "platinum", status: "verified" },
  { id: "wipro", name: "Wipro", logoSrc: "/images/recruiters/wipro-new.png", tier: "platinum", status: "verified" },
  { id: "accenture", name: "Accenture", logoSrc: "/images/recruiters/accenture.jpg", tier: "platinum", status: "verified" },
  { id: "cognizant", name: "Cognizant", logoSrc: "/images/recruiters/cognizant.jpg", tier: "platinum", status: "verified" },
  { id: "capgemini", name: "Capgemini", logoSrc: "/images/recruiters/capgemini.jpg", tier: "platinum", status: "verified" },
  { id: "ibm", name: "IBM", logoSrc: "/images/recruiters/ibm.jpg", tier: "platinum", status: "verified" },
  { id: "mahindra", name: "Mahindra", logoSrc: "/images/recruiters/mahindra.jpg", tier: "platinum", status: "verified" },
  { id: "reliance-retail", name: "Reliance Retail", logoSrc: "/images/recruiters/reliance-retail.jpg", tier: "platinum", status: "verified" },
  { id: "adani-power", name: "Adani Power Limited", logoSrc: "/images/recruiters/adani-power.jpg", tier: "gold", status: "verified" },
  { id: "adani-renewables", name: "Adani Renewables", logoSrc: "/images/recruiters/adani-renewables.jpg", tier: "gold", status: "verified" },
  { id: "aditya-birla-group", name: "Aditya Birla Group", logoSrc: "/images/recruiters/aditya-birla-group-new.png", tier: "gold", status: "verified" },
  { id: "lnt-construction", name: "L&T Construction", logoSrc: "/images/recruiters/lnt-construction.jpg", tier: "gold", status: "verified" },
  { id: "icici-prudential", name: "ICICI Prudential Mutual Fund", logoSrc: "/images/recruiters/icici-prudential.jpg", tier: "gold", status: "verified" },
  { id: "axis-bank", name: "Axis Bank", logoSrc: "/images/recruiters/axis-bank.jpg", tier: "gold", status: "verified" },
  { id: "hitachi", name: "Hitachi", logoSrc: "/images/recruiters/hitachi.jpg", tier: "gold", status: "verified" },
  { id: "bosch", name: "Bosch", logoSrc: "/images/recruiters/bosch.jpg", tier: "gold", status: "verified" },
  { id: "denso", name: "Denso", logoSrc: "/images/recruiters/denso.jpg", tier: "gold", status: "verified" },
  { id: "jsw", name: "JSW", logoSrc: "/images/recruiters/jsw-new.png", tier: "gold", status: "verified" },
  { id: "tata-consulting-engineers", name: "TATA Consulting Engineers", logoSrc: "/images/recruiters/tata-consulting-engineers.jpg", tier: "gold", status: "verified" },
  { id: "zomato", name: "Zomato", logoSrc: "/images/recruiters/zomato.jpg", tier: "gold", status: "verified" },
  { id: "tejas-networks", name: "Tejas Networks", logoSrc: "/images/recruiters/tejas-networks.jpg", tier: "gold", status: "verified" },
  { id: "idfc-first-bank", name: "IDFC First Bank", logoSrc: "/images/recruiters/idfc-first-bank.jpg", tier: "gold", status: "verified" },
  { id: "kec-international", name: "KEC International", logoSrc: "/images/recruiters/kec-international.jpg", tier: "gold", status: "verified" },
  { id: "indigo-paints", name: "Indigo Paints", logoSrc: "/images/recruiters/indigo-paints.jpg", tier: "gold", status: "verified" },
  { id: "vi", name: "Vi (Vodafone Idea)", logoSrc: "/images/recruiters/vi.jpg", tier: "gold", status: "verified" },
  { id: "bharti-axa", name: "Bharti AXA", logoSrc: "/images/recruiters/bharti-axa.jpg", tier: "gold", status: "verified" },
  { id: "arcelormittal", name: "ArcelorMittal", logoSrc: "/images/recruiters/arcelormittal.jpg", tier: "gold", status: "verified" },
  { id: "daikin", name: "Daikin Air Conditioners", logoSrc: "/images/recruiters/daikin.jpg", tier: "gold", status: "verified" },
  { id: "metaclub", name: "MetaClub", logoSrc: "/images/recruiters/metaclub.jpg", tier: "standard", status: "verified" },
  { id: "d2", name: "d2", logoSrc: "/images/recruiters/d2.jpg", tier: "standard", status: "verified" },
  { id: "jws", name: "J.W.S.", logoSrc: "/images/recruiters/jws.jpg", tier: "standard", status: "verified" },
  { id: "teachnook", name: "Teachnook", logoSrc: "/images/recruiters/teachnook.jpg", tier: "standard", status: "verified" },
  { id: "wind", name: "WIND", logoSrc: "/images/recruiters/wind.jpg", tier: "standard", status: "verified" },
  { id: "phed-rajasthan", name: "PHED Rajasthan", logoSrc: "/images/recruiters/phed-rajasthan.jpg", tier: "standard", status: "verified" },
  { id: "uttam-clean-energy", name: "Uttam Clean Energy", logoSrc: "/images/recruiters/uttam-clean-energy.jpg", tier: "standard", status: "verified" },
  { id: "kalpa-taru", name: "Kalpa Taru", logoSrc: "/images/recruiters/kalpa-taru.jpg", tier: "standard", status: "verified" },
  { id: "internshala", name: "Internshala", logoSrc: "/images/recruiters/internshala.jpg", tier: "standard", status: "verified" },
  { id: "sc-consultants", name: "SC Consultants", logoSrc: "/images/recruiters/sc-consultants.jpg", tier: "standard", status: "verified" },
  { id: "uolo", name: "UOLO", logoSrc: "/images/recruiters/uolo.jpg", tier: "standard", status: "verified" },
  { id: "mpsc", name: "MPSC", logoSrc: "/images/recruiters/mpsc.jpg", tier: "standard", status: "verified" },
  { id: "mindset-creative-studio", name: "Mindset Creative Studio", logoSrc: "/images/recruiters/mindset-creative-studio.jpg", tier: "standard", status: "verified" },
  { id: "rajhans", name: "Rajhans", logoSrc: "/images/recruiters/rajhans.jpg", tier: "standard", status: "verified" },
  { id: "riviera-infraprojects", name: "Riviera Infraprojects", logoSrc: "/images/recruiters/riviera-infraprojects.jpg", tier: "standard", status: "verified" },
  { id: "tesca", name: "TESCA", logoSrc: "/images/recruiters/tesca.jpg", tier: "standard", status: "verified" },
  { id: "pmt", name: "PMT", logoSrc: "/images/recruiters/pmt.jpg", tier: "standard", status: "verified" },
  { id: "kaynes-technology", name: "Kaynes Technology", logoSrc: "/images/recruiters/kaynes-technology.jpg", tier: "standard", status: "verified" },
  { id: "appcino", name: "Appcino", logoSrc: "/images/recruiters/appcino.jpg", tier: "standard", status: "verified" },
  { id: "rucha-engineering", name: "Rucha Engineering", logoSrc: "/images/recruiters/rucha-engineering.jpg", tier: "standard", status: "verified" },
  { id: "synoverge", name: "Synoverge", logoSrc: "/images/recruiters/synoverge.jpg", tier: "standard", status: "verified" },
  { id: "black-box", name: "Black Box", logoSrc: "/images/recruiters/black-box.jpg", tier: "standard", status: "verified" },
  { id: "growup", name: "GrowUp", logoSrc: "/images/recruiters/growup.jpg", tier: "standard", status: "verified" },
  { id: "startbit-it-solutions", name: "Startbit IT Solutions", logoSrc: "/images/recruiters/startbit-it-solutions.jpg", tier: "standard", status: "verified" },
  { id: "victora-auto", name: "Victora Auto", logoSrc: "/images/recruiters/victora-auto.jpg", tier: "standard", status: "verified" },
  { id: "fullstack", name: "FullStack", logoSrc: "/images/recruiters/fullstack.jpg", tier: "standard", status: "verified" },
  { id: "padhai-help", name: "Padhai Help", logoSrc: "/images/recruiters/padhai-help.jpg", tier: "standard", status: "verified" },
  { id: "maxvolt-energy", name: "MaxVolt Energy", logoSrc: "/images/recruiters/maxvolt-energy.jpg", tier: "standard", status: "verified" },
  { id: "arden", name: "Arden", logoSrc: "/images/recruiters/arden.jpg", tier: "standard", status: "verified" },
  { id: "kodnest", name: "KodNest", logoSrc: "/images/recruiters/kodnest.jpg", tier: "standard", status: "verified" },
  { id: "capitaltrust", name: "CapitalTrust", logoSrc: "/images/recruiters/capitaltrust.jpg", tier: "standard", status: "verified" },
  { id: "hr-mengage", name: "HR MEngage", logoSrc: "/images/recruiters/hr-mengage.jpg", tier: "standard", status: "verified" },
  { id: "signzy", name: "Signzy", logoSrc: "/images/recruiters/signzy.jpg", tier: "standard", status: "verified" },
  { id: "ctl", name: "CTL", logoSrc: "/images/recruiters/ctl.jpg", tier: "standard", status: "verified" },
  { id: "cinif", name: "CINIF", logoSrc: "/images/recruiters/cinif.jpg", tier: "standard", status: "verified" },
  { id: "spanidea", name: "SPANIDEA", logoSrc: "/images/recruiters/spanidea.jpg", tier: "standard", status: "verified" },
  { id: "kvon-tech", name: "KVON Tech", logoSrc: "/images/recruiters/kvon-tech.jpg", tier: "standard", status: "verified" },
  { id: "pentagon-space", name: "Pentagon Space", logoSrc: "/images/recruiters/pentagon-space.jpg", tier: "standard", status: "verified" },
  { id: "dianapps", name: "DianApps", logoSrc: "/images/recruiters/dianapps.jpg", tier: "standard", status: "verified" },
  { id: "briskminds", name: "Briskminds", logoSrc: "/images/recruiters/briskminds.jpg", tier: "standard", status: "verified" },
  { id: "axis", name: "Axis", logoSrc: "/images/recruiters/axis.jpg", tier: "standard", status: "verified" },
];

/**
 * Flagship subset (platinum tier only) for the Hero's lightweight trust
 * strip. Derived, not stored — a future CMS/DB integration should express
 * this as a filtered query (`tier = 'platinum'`) rather than a second
 * table, so there is only one source of truth for recruiter records.
 */
export const flagshipRecruiters = trustedRecruiters.filter((r) => r.tier === "platinum");

/**
 * Curated 6-company subset for the "Top Recruiters" marquee
 * (RecruitersWall). Restricted to entries that already have a real
 * `logoSrc` (see the DATA STATUS note above) rather than the full
 * 78-company roster, since the wall now renders actual logo images
 * instead of monogram badges and a monogram fallback mixed in with
 * real logos looks unfinished.
 */
export const featuredRecruiters: Recruiter[] = [
  "tcs",
  "wipro",
  "jsw",
  "sopra-steria",
  "aditya-birla-group",
  "motherson",
  "sigma",
  "yutika",
  "hero-motocorp",
]
  .map((id) => trustedRecruiters.find((r) => r.id === id)!)
  .filter(Boolean);
