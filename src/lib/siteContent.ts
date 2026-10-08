export interface HeroSection {
  headline: string;
  subheadline: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: 'Megaphone' | 'Lightbulb' | 'TestTube' | 'CheckCircle';
  microCta?: string;
}

export interface HowItWorksSection {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export interface ChallengeCard {
  id: string;
  title: string;
  description: string;
  status: 'Open' | 'Upcoming' | 'Closed';
  topic: string;
  deadline: string;
  contributionType: string;
}

export interface FeaturedChallengesSection {
  title: string;
  subtitle: string;
  challenges: ChallengeCard[];
  viewAllLinkText: string;
}

export interface PilotProject {
  id: string;
  title: string;
  status: 'Pilot' | 'Scaling' | 'Completed';
  summary: string;
  impactBlurb: string;
  metric: string;
  imageSrc: string;
  imageAlt: string;
  storyLinkText: string;
}

export interface ProjectTimelineSection {
  title: string;
  subtitle: string;
  projects: PilotProject[];
}

export interface GalleryItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
  tag: string;
}

export interface ParticipationGallerySection {
  title: string;
  subtitle: string;
  description: string;
  images: GalleryItem[];
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface EquityPrinciplesSection {
  title: string;
  subtitle: string;
  commitmentsHeading: string;
  commitments: string[];
  accordionItems: AccordionItem[];
  accommodationLinkText: string;
  accommodationEmail: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'Report' | 'Data Snapshot' | 'Story Summary';
  date: string;
  summary: string;
  linkText: string;
}

export interface KnowledgeHubSection {
  title: string;
  subtitle: string;
  description: string;
  resources: ResourceItem[];
  browseArchiveText: string;
}

export interface GetInvolvedSection {
  title: string;
  subtitle: string;
  stayInformedTitle: string;
  stayInformedDesc: string;
  partnerTitle: string;
  partnerDesc: string;
  partnerCtaText: string;
  partnerCtaUrl: string;
  hostTitle: string;
  hostDesc: string;
  hostCtaText: string;
  hostCtaUrl: string;
  footerBrandName: string;
  footerTagline: string;
  footerAddress: string;
  footerEmail: string;
}

export interface SiteContent {
  brandName: string;
  tagline: string;
  description: string;
  location: string;
  contactEmail: string;
  hero: HeroSection;
  howItWorks: HowItWorksSection;
  challenges: FeaturedChallengesSection;
  projects: ProjectTimelineSection;
  gallery: ParticipationGallerySection;
  equity: EquityPrinciplesSection;
  knowledgeHub: KnowledgeHubSection;
  getInvolved: GetInvolvedSection;
}

export const siteContent: SiteContent = {
  brandName: "CivicForge Lab",
  tagline: "Where residents and city teams shape better public services together.",
  description: "CivicForge Lab is the official civic innovation arm of a mid-sized city, providing a transparent digital hub where residents can explore current innovation challenges, propose ideas, follow pilot projects, and see how their input shapes real policy and services. The site blends clear public communication with tools for engagement and accountability.",
  location: "Riverside City",
  contactEmail: "hello@civicforgelab.gov",
  hero: {
    headline: "A public innovation lab for Riverside City, built with you.",
    subheadline: "CivicForge Lab invites residents, community groups, and city teams to co-design practical solutions to everyday challenges—from bus stops to shade, safety to play.",
    primaryCtaText: "See Current Challenges",
    secondaryCtaText: "How this works",
    imageSrc: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Residents sitting around a workshop table with printed maps and colorful sticky notes brainstorming ideas",
    imageCaption: "Residents co-designing safer crossings at the Eastside Library workshop."
  },
  howItWorks: {
    title: "How CivicForge Lab Works",
    subtitle: "We believe the best city policies and spaces start with local expertise. Here is how we move from shared ideas to tangible urban solutions.",
    steps: [
      {
        number: "01",
        title: "We publish city challenges",
        description: "In partnership with municipal departments, we define pressing community needs—like heat mitigation or transit comfort—and open them to the public.",
        iconName: "Megaphone",
        microCta: "See challenges"
      },
      {
        number: "02",
        title: "You share ideas & feedback",
        description: "Submit proposals online, participate in local workshops, or take part in hands-on design sessions right in the neighborhood.",
        iconName: "Lightbulb",
        microCta: "Explore pathways"
      },
      {
        number: "03",
        title: "We test pilots together",
        description: "Instead of jumping to permanent multi-million dollar contracts, we deploy temporary, low-cost prototypes to see what actually works on the ground.",
        iconName: "TestTube",
        microCta: "View active pilots"
      },
      {
        number: "04",
        title: "We report results openly",
        description: "Every pilot is evaluated against real metrics. We publish data, host public debriefs, and hand off successful solutions for permanent citywide scaling.",
        iconName: "CheckCircle",
        microCta: "Browse reports"
      }
    ]
  },
  challenges: {
    title: "Current City Challenges",
    subtitle: "Active public inquiries and collaborative briefs where your feedback directly influences pilot funding and municipal decisions.",
    challenges: [
      {
        id: "ch-1",
        title: "Reimagining Riverside Bus Stops",
        description: "Improve seating, weather protection, and digital visibility at ten critical secondary transit stops across the Riverside East neighborhood.",
        status: "Open",
        topic: "Mobility",
        deadline: "April 15, 2025",
        contributionType: "Submit workshop proposal"
      },
      {
        id: "ch-2",
        title: "Creating Cooler Neighborhood Streets",
        description: "Co-design shade structures, urban canopy additions, and cool pavement trials on heat-vulnerable residential corridors.",
        status: "Open",
        topic: "Parks & Climate",
        deadline: "May 1, 2025",
        contributionType: "Quick survey & map drop"
      },
      {
        id: "ch-3",
        title: "Youth Voices on Public Spaces",
        description: "A specialized initiative for residents aged 14–21 to pitch ideas for repurposing underutilized park lawns into creative community spaces.",
        status: "Upcoming",
        topic: "Youth & Culture",
        deadline: "Launches June 2025",
        contributionType: "Register for launch"
      }
    ],
    viewAllLinkText: "View all challenges"
  },
  projects: {
    title: "From Ideas to Impact",
    subtitle: "Every permanent change starts as a temporary test. See the timeline of how previous resident ideas evolved into functioning municipal infrastructure.",
    projects: [
      {
        id: "proj-1",
        title: "Neighborhood Slow Streets Pilot",
        status: "Completed",
        summary: "Installed temporary physical buffers, custom-painted intersections, and local-access restrictions on four high-incident residential streets.",
        impactBlurb: "Evaluated over six months using automatic traffic counters and resident survey feedback, now moving to permanent installation.",
        metric: "20% reduction in speeding on pilot blocks",
        imageSrc: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80",
        imageAlt: "A newly painted colorful street intersection with modern urban safety design and slow signs",
        storyLinkText: "Read the full evaluation report"
      },
      {
        id: "proj-2",
        title: "Play Streets Pop-Up Series",
        status: "Scaling",
        summary: "Coordinated with neighbors to temporarily close selected residential segments on weekend afternoons, turning asphalt into safe play zones.",
        impactBlurb: "Due to high demand and exceptional safety outcomes, we are expanding the permitting kit to six new neighborhoods this summer.",
        metric: "150+ kids participated in summer events",
        imageSrc: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80",
        imageAlt: "Children drawing with colorful chalk on a closed car-free residential road with parents sitting nearby",
        storyLinkText: "Get the DIY play streets kit"
      },
      {
        id: "proj-3",
        title: "Open Data for Tree Canopy Equity",
        status: "Pilot",
        summary: "Engaged volunteer walk auditors to map surface heat temperatures and inventory canopy shade gaps using mobile sensor sensors.",
        impactBlurb: "The crowdsourced dataset directly informed the Parks Department's 2025 priority tree planting schedule.",
        metric: "Updated map guiding new planting investments",
        imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
        imageAlt: "Sunlight filtering through lush green tree canopy over a city sidewalk",
        storyLinkText: "View the interactive map & dataset"
      }
    ]
  },
  gallery: {
    title: "Participation in Pictures",
    subtitle: "Civic innovation is not a spectator sport.",
    description: "These moments show what public co-design looks like in practice. From neighborhood walks with light sensors to intensive library sketching sessions, every voice helps build a more legible, resilient city.",
    images: [
      {
        id: "gal-1",
        imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
        imageAlt: "Diverse group of residents mapping shade gaps along Riverside Avenue on a large table with trace paper and markers",
        caption: "Residents mapping shade gaps along Riverside Avenue during a summer heat walk.",
        tag: "Shade Audit"
      },
      {
        id: "gal-2",
        imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
        imageAlt: "Walk audit team with clipboards and safety vests documenting crossing issues on a street corner",
        caption: "Walk audit team documenting crosswalk visibility on Riverside Avenue.",
        tag: "Walk Audit"
      },
      {
        id: "gal-3",
        imageSrc: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
        imageAlt: "Youth Council members holding up drawings and presenting ideas on a whiteboard",
        caption: "Youth Council members sharing concepts for more inviting bus stops.",
        tag: "Youth Council"
      },
      {
        id: "gal-4",
        imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
        imageAlt: "A group of residents sketching design adjustments on physical model elements at a bus shelter",
        caption: "Co-design session at the Central Bus Hub, imagining shade and seating upgrades.",
        tag: "Co-Design Hub"
      },
      {
        id: "gal-5",
        imageSrc: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        imageAlt: "A public park block transformed into an outdoor reading and seating room with wooden furniture",
        caption: "Play Streets pop-up turning a side street into a car-free play zone.",
        tag: "Pop-Up Space"
      },
      {
        id: "gal-6",
        imageSrc: "https://images.unsplash.com/photo-1413808153419-81643c6314f4?auto=format&fit=crop&w=600&q=80",
        imageAlt: "A circle of chairs set up outdoors under a large oak tree for a neighborhood town hall meeting",
        caption: "Evening conversation about neighborhood tree planting plans.",
        tag: "Park Talk"
      }
    ]
  },
  equity: {
    title: "Our Commitments to Equity & Access",
    subtitle: "Lowering barriers to ensure that city improvements benefit everyone, especially communities historically left out of formal planning.",
    commitmentsHeading: "Our Core Principles",
    commitments: [
      "Plain-language summaries: No complex policy jargon; we explain what we're testing in simple terms.",
      "Meeting people where they are: We host workshops in neighborhoods where changes are proposed, outside working hours.",
      "No formal documentation or ID required: Sharing feedback or pitching ideas requires zero credential checks.",
      "Childcare and translation: We offer stipends and bilingual facilitation for target neighborhood sessions."
    ],
    accordionItems: [
      {
        id: "eq-1",
        title: "Accessibility & Physical Spaces",
        content: "All in-person workshops take place at fully ADA-accessible community centers, libraries, or parks, with accessible transit access within a 5-minute walk. We ensure digital platforms meet WCAG 2.1 AA screen reader standards."
      },
      {
        id: "eq-2",
        title: "Language & Translation Access",
        content: "Our online surveys are fully translated into Spanish, Vietnamese, and Arabic (the primary languages spoken in Riverside). Translators are present at all physical workshops with at least 48 hours advance request."
      },
      {
        id: "eq-3",
        title: "Data Stewardship & Privacy",
        content: "We never sell or distribute personal information. Feedback is aggregated and anonymized before publishing. Providing demographic data is always completely optional and used solely to ensure balanced representation."
      },
      {
        id: "eq-4",
        title: "Youth & Elder Inclusivity",
        content: "We host specialized daytime workshops at Senior Centers and interactive creative workshops in schools to ensure we co-design streets that serve both the youngest and oldest among us."
      }
    ],
    accommodationLinkText: "Need a specific accommodation? Email us directly",
    accommodationEmail: "hello@civicforgelab.gov"
  },
  knowledgeHub: {
    title: "Open Knowledge Hub",
    subtitle: "We document everything we learn. Browse public evaluation reports, survey raw findings, and lessons from previous project sprints.",
    description: "Transparency keeps us honest. We publish active data and reports in approachable formats, so community organizations, students, and other municipalities can build on our work.",
    resources: [
      {
        id: "res-1",
        title: "2025 Riverside Mobility Challenge Summary",
        type: "Report",
        date: "March 2025",
        summary: "An 18-page plain language report summarizing 1,200 survey responses, key priority bus stops, and recommended shade-structure types.",
        linkText: "Download PDF (3.2 MB)"
      },
      {
        id: "res-2",
        title: "Pilot Evaluation: Cooler Streets Phase I",
        type: "Report",
        date: "January 2025",
        summary: "Thermal sensor and pedestrian count data analyzing the effectiveness of custom shade sails on the Fourth Avenue corridor.",
        linkText: "Read Story Summary"
      },
      {
        id: "res-3",
        title: "Youth Council Recommendations on Transit Safety",
        type: "Story Summary",
        date: "November 2024",
        summary: "A community brief co-authored by Riverside Youth Council representatives outlining safety concerns and park connectivity needs.",
        linkText: "Read Online Article"
      },
      {
        id: "res-4",
        title: "Tree Canopy and Surface Heat Map Dataset",
        type: "Data Snapshot",
        date: "October 2024",
        summary: "An open-access geoJSON map containing volunteer walk audit temperature logs paired with baseline tree density parameters.",
        linkText: "Access Data Sandbox"
      }
    ],
    browseArchiveText: "Browse the full archive of reports & data"
  },
  getInvolved: {
    title: "Choose How You’d Like to Get Involved",
    subtitle: "You don't need a degree in urban planning to help shape Riverside. Pick the path that matches your schedule and interest.",
    stayInformedTitle: "Stay Informed",
    stayInformedDesc: "Receive our bi-weekly dispatch detailing active feedback periods, upcoming public pilot tests, and freshly published datasets.",
    partnerTitle: "Partner with Us",
    partnerDesc: "Are you a local non-profit, school, or artist? We regularly co-fund community-led workshops and street interventions.",
    partnerCtaText: "Propose a partnership",
    partnerCtaUrl: "mailto:hello@civicforgelab.gov?subject=CivicForge%20Partnership%20Inquiry",
    hostTitle: "Host an Idea Session",
    hostDesc: "Gather your neighbors in your living room or local park. We'll provide a DIY toolkit and guide templates to run your own mini-session.",
    hostCtaText: "Download the DIY Idea Session Kit",
    hostCtaUrl: "mailto:hello@civicforgelab.gov?subject=Request%20DIY%20Idea%20Session%20Kit",
    footerBrandName: "CivicForge Lab",
    footerTagline: "Riverside City's collaborative space for public service innovation.",
    footerAddress: "Riverside City Hall, Rm 302, 100 Civic Plaza, Riverside",
    footerEmail: "hello@civicforgelab.gov"
  }
};
