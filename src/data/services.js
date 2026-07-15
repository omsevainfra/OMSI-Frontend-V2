export const services = [
  {
    id: "topographic-survey",
    title: "Topographic Survey",
    icon: "Map",
    shortDescription: "Comprehensive topographic surveys covering utilities, junctions, flyovers, and landscape — with GPS north-referencing and full width/coverage methodology.",
    fullDescription: "A precise topographic survey is the non-negotiable foundation of every road design, drainage study, and infrastructure DPR. Our survey teams deploy DGPS, Total Stations, and drone photogrammetry to capture ground truth across urban corridors, flyover approaches, junctions, and utility corridors — producing georeferenced maps ready for CAD and GIS workflows.",
    scope: [
      "Full-width topographic survey of existing road corridor including carriageway, footpath, dividers, drains, and utility infrastructure",
      "Survey of all at-grade junctions, flyover approaches, underpasses, and service roads within study corridor",
      "Landscape and land use survey including buildings, compound walls, trees, and encroachments within influence zone",
      "Utilities survey: OHE lines, underground water mains, sewer lines, telecom ducts, and electrical conduits",
      "North-referencing using GPS control points with WGS84 / local state grid datum",
      "Cross-section survey at regular intervals (typically 20 m) and at all critical locations",
      "Longitudinal section (L-section) profiling along road centreline and proposed alignment",
      "Digital Elevation Modelling (DEM) and contour map generation at 0.25 m interval",
      "Drone / UAV photogrammetric mapping for large corridor overviews and orthophoto preparation",
      "Data deliverables: AutoCAD DWG drawings, georeferenced shapefiles, and survey field books"
    ],
    compliance: [
      "Survey of India Standards & Datum Framework",
      "IRC SP41:1994 — Guidelines on Design of At-Grade Intersections in Rural and Urban Areas",
      "MoRTH Specifications for Road and Bridge Works (Chapter on Survey)",
      "URDPFI Guidelines for Urban Road Surveys"
    ],
    lead: {
      name: "Digambar B. Gaikwad",
      designation: "Director & Survey Head",
      qualification: "Civil Engineer, 30 Years of Survey & DPR Experience"
    }
  },
  {
    id: "traffic-simulation",
    title: "Traffic Simulation Study",
    icon: "TrendingUp",
    shortDescription: "Traffic volume/growth analysis, IRC SP41-aligned intersection capacity studies, and microscopic simulation using PTV Vissim and Aimsun.",
    fullDescription: "Our traffic simulation studies combine field data collection with state-of-the-art microscopic and macroscopic modelling to quantify existing performance deficiencies and validate proposed design interventions. We apply IRC SP41:1994 methodology for capacity analysis and DIMTS/URDPFI norms for urban contexts, providing authorities with a defensible technical basis for capital investment decisions.",
    scope: [
      "Traffic volume count (TVC) surveys: classified turning movement counts at all study intersections",
      "Peak-hour and off-peak analysis including morning, evening, and Saturday peaks",
      "Traffic growth rate estimation using historical count data and area-level growth projections",
      "Level of Service (LOS) analysis per IRC SP41:1994 and HCM methodology",
      "Pedestrian volume counts and desire-line analysis at major crossing points",
      "Microscopic traffic simulation using PTV Vissim — calibrated to observed saturation flows",
      "Scenario modelling: existing, design-year (5-year, 15-year horizon), and with/without improvement options",
      "Queue length, delay, and throughput extraction from simulation for all approach legs",
      "Signal timing optimization for signalized intersections using Webster's formula and simulation iteration",
      "Report of Findings: traffic data summary, LOS tables, simulation animation, and recommended design option"
    ],
    compliance: [
      "IRC SP41:1994 — Guidelines on Design of At-Grade Intersections",
      "IRC SP 88-2019 — Manual on Road Safety Audit (for conflict point analysis)",
      "URDPFI Guidelines — Urban Road Design & Planning Framework of India",
      "DIMTS Methodology for Delhi / Urban Traffic Studies",
      "MoRTH Specifications for Traffic Studies"
    ],
    lead: {
      name: "Devendra G. Baraskar",
      designation: "Director & Department Head",
      qualification: "M.Tech Transportation Engg. (IIT Roorkee Certified Road Safety Auditor), PhD appearing (Amity University)"
    }
  },
  {
    id: "intersection-design",
    title: "Intersection Design",
    icon: "GitMerge",
    shortDescription: "Geometric design of urban and rural at-grade intersections, roundabouts, and grade separators — designed to IRC SP41 and MCGM Engineering Hub standards.",
    fullDescription: "Safe, efficient intersections are the most critical nodes in any road network. Our intersection design service covers the complete geometric design cycle — from preliminary layout through swept-path vehicle tracking to final design drawings — anchored in IRC SP41:1994 and contextualised for urban corridors per MCGM Engineering Hub provisions and URDPFI norms. Each design is validated against our in-house traffic simulation to confirm the proposed geometry delivers acceptable Level of Service.",
    scope: [
      "Preliminary intersection layout based on topographic survey and traffic simulation findings",
      "Design speed selection and stopping sight distance (SSD) / intersection sight distance (ISD) verification",
      "Horizontal curvature and lane taper / deceleration lane design per IRC SP41",
      "Swept-path analysis for design vehicles (bus, truck, fire tender) using vehicle tracking software",
      "Pedestrian crossing design: zebra markings, refuge islands, kerb ramps, and tactile tiles",
      "Cyclist lane continuity and conflict-point minimisation at intersection approach",
      "Signal phase diagram and pole/detector layout for signalized intersections",
      "Road marking scheme: lane arrows, stop lines, edge lines, and channelizing markings per IRC:35",
      "Signage layout plan per IRC:67 — regulatory, warning, and informatory signs",
      "Drawing deliverables: plan, L-section, cross-sections, marking plan, signage plan — AutoCAD DWG + PDF"
    ],
    compliance: [
      "IRC SP41:1994 — Guidelines on Design of At-Grade Intersections in Rural and Urban Areas",
      "IRC SP 88-2019 — Manual on Road Safety Audit",
      "IRC:35 — Code of Practice for Road Markings",
      "IRC:67 — Code of Practice for Road Signs",
      "URDPFI Guidelines — Urban Road Design & Planning Framework",
      "MCGM Engineering Hub Provisions for Mumbai Urban Roads",
      "MoRTH Specifications for Road and Bridge Works"
    ],
    lead: {
      name: "Devendra G. Baraskar",
      designation: "Director & Department Head",
      qualification: "M.Tech Transportation Engg. (IIT Roorkee Certified Road Safety Auditor)"
    }
  },
  {
    id: "road-safety-audit",
    title: "Road Safety Audit (RSA)",
    icon: "ShieldAlert",
    shortDescription: "IIT Roorkee certified stage-wise road safety audits — designed to prevent accidents, not merely reduce them — with full IRC SP:88-2019 compliance.",
    fullDescription: "Our Road Safety Audit philosophy is grounded in prevention: we exist to stop crashes before they occur, not to analyse fatalities after the fact. Certified under IIT Roorkee's RSA programme, our auditors approach every study with a vulnerable road user (VRU) lens — ensuring that pedestrians, cyclists, and two-wheeler riders are actively protected through geometry, markings, and signage. Each audit progresses through internationally aligned stages and culminates in an actionable report with black-spot rectification recommendations.",
    scope: [
      "Inception Report: audit scope definition, study area delineation, data requirements, and methodology agreement with client",
      "Crash data collection and analysis: FIR-based accident records, black-spot mapping, conflict type classification",
      "Field observation surveys: day and night inspections, video recording of traffic conflicts and near-misses",
      "Geometric deficiency assessment: sight-distance obstructions, inadequate tapers, missing deceleration lanes",
      "Pedestrian and VRU safety audit: footpath continuity, crossing gaps, street lighting adequacy, school zone provisions",
      "Road furniture audit: missing, damaged, or non-compliant signs, delineators, guard rails, and kerb stones",
      "Pavement condition assessment: surface distress, skid resistance, pothole density, edge drop-off",
      "Drainage adequacy check: blocked drains, waterlogging locations, cross-drainage capacity",
      "Draft RSA Report: findings, photographic evidence, risk rating, and preliminary recommendations",
      "Final RSA Report: accepted recommendations with prioritised short-term and long-term rectification plan"
    ],
    compliance: [
      "IRC SP:88-2019 — Manual on Road Safety Audit",
      "IRC SP41:1994 — Guidelines on Design of At-Grade Intersections",
      "IRC:35 — Code of Practice for Road Markings",
      "IRC:67 — Code of Practice for Road Signs",
      "MoRTH Guidelines on Road Safety",
      "DIMTS Methodology for Urban RSA"
    ],
    lead: {
      name: "Devendra G. Baraskar & Omkar D. Chavan",
      designation: "Certified Road Safety Auditors",
      qualification: "IIT Roorkee Certified Auditors"
    }
  },
  {
    id: "water-supply",
    title: "Water Supply & Distribution",
    icon: "Droplet",
    shortDescription: "Hydraulic modeling, pipeline network planning, and Detailed Project Reports (DPR) for rural and urban water schemes.",
    fullDescription: "Providing clean drinking water is a core national priority. We design robust water supply systems, source developments, purification plants, and distribution networks. We are a trusted partner in implementing Prime Minister's Jal Jeevan Mission.",
    scope: [
      "Hydraulic Network Modeling using Bentley WaterGEMS",
      "Detailed Project Reports (DPR) for Rural Water Schemes",
      "Water Source Feasibility & Yield Analysis",
      "Gravity & Pumping Main Alignment Designs",
      "Elevated Service Reservoir (ESR) Capacity & Location Planning",
      "Jal Jeevan Mission (JJM) Project Execution Planning"
    ],
    compliance: [
      "CPHEEO Manual on Water Supply and Treatment",
      "Maharashtra Jeevan Pradhikaran (MJP) Guidelines",
      "IS 8329 & IS 9523 Standards for Ductile Iron (DI) Pipes",
      "Jal Jeevan Mission Guidelines"
    ],
    lead: {
      name: "Deepak V. Chavan",
      designation: "Director & Lead Water Engineer",
      qualification: "Civil Engineer, 31 Years of Infrastructure Experience"
    }
  },
  {
    id: "structural-engineering",
    title: "Structural Engineering & Auditing",
    icon: "Building",
    shortDescription: "Premium structural design for bridges, buildings, and industrial facilities, plus comprehensive structural audits.",
    fullDescription: "Our structural engineering division ensures strength, durability, and cost-effectiveness. We design heavy civil infrastructure, conduct structural health assessments, and certify existing concrete and steel buildings for safety.",
    scope: [
      "Structural Analysis and Design using ETABS, STAAD Pro & SAFE",
      "Reinforced Concrete (RCC) & Structural Steel Design",
      "Bridge & Culvert Design for Highway Projects",
      "Non-Destructive Testing (NDT) & Rebound Hammer Auditing",
      "Retrofitting & Rehabilitation Scheme Design",
      "Third Party Quality Assurance (TPQA) Services"
    ],
    compliance: [
      "IS 456 (Plain and Reinforced Concrete Code)",
      "IS 1893 (Criteria for Earthquake Resistant Design)",
      "IS 800 (Code of Practice for General Construction in Steel)",
      "IRC:112 (Code of Practice for Concrete Road Bridges)",
      "National Building Code (NBC) of India"
    ],
    lead: {
      name: "Omkar D. Chavan",
      designation: "Director & Structural Head",
      qualification: "M.Tech Structural Engg. (IIT Roorkee Certified, COEP Pune Rail & Metro Tech)"
    }
  },
  {
    id: "consultancy-services",
    title: "Consultancy & Advisory Services",
    icon: "Briefcase",
    shortDescription: "Government project liaising, peer review, bid advisory, and comprehensive technical consultancy for municipal works.",
    fullDescription: "We provide comprehensive administrative, legal-technical, and strategic consulting for large public works. Our directors act as advisory panels, peer-reviewing external engineering blueprints and assisting in tender processes.",
    scope: [
      "Government Tender Curation and Bid Advisory",
      "Third Party Technical Audits & Structural Advisory",
      "Capacity Analysis & Infrastructure Bottleneck Auditing",
      "Liaison with PWD, BMC, MJP, and Municipal Corporations",
      "Value Engineering & Cost Optimization Studies",
      "Feasibility Curation & Environmental Impact Scoping"
    ],
    compliance: [
      "Central Vigilance Commission (CVC) Procurement Rules",
      "State Public Works Department Manuals",
      "State Municipal Corporation Acts"
    ],
    lead: {
      name: "All Directors Panel",
      designation: "Advisory Board",
      qualification: "Combined 69+ Years of Public Works Experience"
    }
  }
];
