export const heroStats = [
  { value: "8.3→5.3%", label: "HbA1c · 5 Months", color: "text-[#C9A84C]" },
  { value: "83→69kg", label: "Weight · 5 Months", color: "text-[#C9A84C]" },
  { value: "−36%", label: "Visceral Fat Score", color: "text-[#4CAF7D]" },
  { value: "18", label: "Biomarkers Tracked", color: "text-[#4A9EE8]" },
  { value: "6", label: "Phases · Framework", color: "text-[#E8973A]" },
];

export const founderProof = [
  { value: "11.3", label: "glucose wake-up" },
  { value: "8.3→5.3", label: "HbA1c" },
  { value: "212→124", label: "BP systolic" },
];

export const mrrruLetters = [
  { letter: "M", title: "Metabolic", subtitle: "Reversal", color: "#E05252" },
  { letter: "R", title: "Repair", subtitle: "Biological", color: "#E8973A" },
  { letter: "R", title: "Recalibration", subtitle: "Systems", color: "#C9A84C" },
  { letter: "R", title: "Rebuilding", subtitle: "Identity", color: "#4CAF7D" },
  { letter: "U", title: "Unlocking", subtitle: "Longevity", color: "#4A9EE8" },
];

export const phases = [
  {
    id: 1,
    title: "Baseline Truth & Metabolic Awareness",
    description:
      "Capture your real starting point. Blood markers, glucose, body composition, BP, sleep, stress, medication context, movement and behaviour. No guessing. Data only.",
    chips: ["Onboarding", "First Report", "Safety Flags"],
    accent: "#E05252",
  },
  {
    id: 2,
    title: "Stabilisation & Safety Control",
    description:
      "Reduce biological chaos. Build consistent food timing, movement, sleep and stress routines. Early confidence without aggressive restriction.",
    chips: ["Daily REVA", "Food OS", "Sleep"],
    accent: "#C9A84C",
    active: true,
  },
  {
    id: 3,
    title: "Food Intelligence, Wearables, Bio Impedance & CGM",
    description:
      "Food experiments, wearable sync, bio-impedance scale readings and CGM response — recalibrating personal glucose metabolism before memory compounds.",
    chips: ["Food OS", "Wearables", "BIA Scales", "CGM", "Sleep", "Movement", "Memory"],
    accent: "#C9A84C",
    founderActive: true,
  },
  {
    id: 4,
    title: "Insulin Sensitivity Rebuild",
    description:
      "Rebuild the body's ability to process glucose efficiently. Resistance training, LISS, post-meal walks, higher protein and better sleep improve glucose disposal.",
    chips: ["Movement OS", "Sleep OS", "Stress OS"],
    accent: "#4A9EE8",
  },
  {
    id: 5,
    title: "Marker Improvement & Medication Optimisation",
    description:
      "Improve labs with clinician-aligned safety. Reduce medication dependency where appropriate. Document every change with evidence.",
    chips: ["Blood OS", "Clinical Safety", "Reports"],
    accent: "#4CAF7D",
  },
  {
    id: 6,
    title: "Longevity Sovereignty & Personal Metabolic Memory",
    description:
      "Maintain reversal, prevent relapse and optimise long-term healthspan. REVA as daily decision cockpit. Metabolic flexibility — enjoy life and recover quickly.",
    chips: ["Longevity OS", "Executive Reports", "Legacy"],
    accent: "#C9A84C",
  },
];

export const journeyMarkersBefore = [
  { label: "HbA1c", value: "8.3%" },
  { label: "Fasting glucose", value: "11.3 mmol/L" },
  { label: "Visceral fat", value: "15–16" },
  { label: "BP (systolic)", value: "212 mmHg" },
  { label: "Weight", value: "83 kg" },
  { label: "Body fat", value: "21.0%" },
  { label: "HDL / LDL", value: "36 / 140 mg/dL" },
  { label: "CRP", value: "2.7 mg/L" },
  { label: "Vitamin D", value: "17.5 ng/mL" },
  { label: "Sleep (avg)", value: "3 hrs" },
];

export const journeyMarkersAfter = [
  { label: "HbA1c", value: "5.3%" },
  { label: "Fasting glucose", value: "Normalising" },
  { label: "Visceral fat", value: "11" },
  { label: "BP (systolic)", value: "~124 mmHg" },
  { label: "Weight", value: "69 kg" },
  { label: "Body fat", value: "15.2%" },
  { label: "HDL / LDL", value: "55.2 / 118 mg/dL" },
  { label: "CRP", value: "1.1 mg/L" },
  { label: "Vitamin D", value: "59.9 ng/mL" },
  { label: "Sleep (avg)", value: "6.6 hrs" },
];

export const ninePillars = [
  {
    title: "Measurement, Logging & Evidence",
    description:
      "What is true and verified? Evidence confidence, journals, data completeness and personal proof library.",
  },
  {
    title: "Glucose, Insulin & Metabolic Flexibility",
    description:
      "How did glucose and insulin respond? CGM patterns, spike/recovery scoring and flexibility index.",
  },
  {
    title: "Food Intelligence & Meal Sequencing",
    description:
      "How should this meal be redesigned? Food OS meal score, sequence guidance and personal tolerance library.",
  },
  {
    title: "Movement, Muscle & Glucose Disposal",
    description:
      "What movement improves disposal? Post-meal prescriptions, training rhythm and muscle protection.",
  },
  {
    title: "Fasting, Feeding Window & Meal Timing",
    description:
      "Is timing helping or harming? Fasting window guidance, break-fast quality and late-meal risk scoring.",
  },
  {
    title: "Sleep, Recovery & Circadian Rhythm",
    description:
      "Is recovery supporting metabolism? Sleep readiness, overnight glucose and recovery advice.",
  },
  {
    title: "Stress, Inflammation & Nervous-System Load",
    description:
      "Is stress distorting the pattern? Stress-load interpretation, nervous-system reset and inflammation patterning.",
  },
  {
    title: "Medication, Blood Tests & Clinical Safety",
    description:
      "Safe with medication and labs? Clinician-ready reports, medication timeline and red-flag checks.",
  },
  {
    title: "Behaviour, Accountability & Long-Term Maintenance",
    description:
      "What behaviour must change next? Daily decision score, relapse prevention and durable identity shift.",
    featured: true,
  },
];

export const platformModules = [
  {
    title: "REVA AI",
    subtitle: "Revamp · Execute · Vitality · Advisor",
    description:
      "Your personal metabolic intelligence — trained on the MRRRU framework, my transformation data, and your Personal Metabolic Memory.",
    highlights: ["Meal decisions", "Glucose patterns", "Stress + craving rescue", "Weekly reports"],
    footerNote:
      "Next phase: 10,000+ rules from personal experiments (I was my own guinea pig), expert data after verification, and extrapolations by sex, ethnicity, medical conditions and age.",
  },
  {
    title: "MetaboliQ Food OS",
    subtitle: "800+ recipes · 90+ countries",
    description:
      "Photo, label, voice or menu input becomes a metabolic meal decision. Every recommendation calibrated to your phase, markers and goals.",
    highlights: ["Impact scoring", "Meal sequencing", "Dosha-aware options", "My cookbooks"],
    sideNote:
      "Thousands of international verified recipes being verified — with a REVA adaptation agent that reshapes meals to your personal goals and phase.",
    promptExample: "Scan my lunch and tell me what to do next",
  },
  {
    title: "CGM & Wearables",
    subtitle: "Signals → decisions",
    description:
      "Sync glucose, sleep, HRV and activity. See post-meal response curves and daily recovery in one metabolic cockpit.",
    highlights: ["CGM curves", "Wearable sync", "Recovery score", "Trend alerts"],
  },
  {
    title: "FaceScan + Signal Suite",
    subtitle: "Visual metabolic signals",
    description:
      "Face and retina scanning demos, home glucose context, and multi-signal capture — converted into product logic, not hype.",
    highlights: ["FaceScan demo", "Retina signals", "Home testing layer", "Safety guardrails"],
  },
  {
    title: "Blood OS",
    subtitle: "Labs → action",
    description:
      "Blood markers interpreted through MRRRU phases with clinician-aligned safety and personal evidence tracking.",
    highlights: ["Marker trends", "Phase mapping", "Evidence library", "Executive summaries"],
  },
  {
    title: "Personal Metabolic Memory",
    subtitle: "Your biology, remembered",
    description:
      "Every meal, glucose response, sleep cycle and protocol outcome compounds into a living memory layer — the core of MetaboliQ OS.",
    highlights: ["Long-term memory", "Relapse detection", "Protocol history", "Decision continuity"],
  },
];

export const revaLetters = [
  { letter: "R", word: "Revamp / Recalibrate", color: "#E05252", detail: "Reset habits and systems when biology or behaviour drifts off course." },
  { letter: "E", word: "Execute", color: "#E8973A", detail: "Turn insight into the next concrete action — meal order, walk, sleep, stress reset." },
  { letter: "V", word: "Vitality", color: "#C9A84C", detail: "Protect energy, recovery and long-term healthspan — not just a number on a scale." },
  { letter: "A", word: "Advisor", color: "#4A9EE8", detail: "Coach-level guidance grounded in your phase, markers and Personal Metabolic Memory." },
];

export const revaCapabilities = [
  "Text & conversation",
  "Food photo & menu scan",
  "Blood report reading",
  "CGM screenshot interpretation",
  "Wearable & scale context",
  "MRRRU phase guidance",
  "Voice input",
  "Metabolic memory updates",
];

export const revaSignalInputs = [
  { icon: "🍽️", label: "Food OS scans", desc: "Meals, recipes, sequencing, impact scores" },
  { icon: "📈", label: "CGM & glucose logs", desc: "Curves, 2hr/3hr post-meal, manual entry" },
  { icon: "⌚", label: "Wearables", desc: "Sleep, HRV, steps, recovery" },
  { icon: "⚖️", label: "Bio-impedance scales", desc: "Weight, fat, visceral, muscle" },
  { icon: "🩸", label: "Blood markers", desc: "Labs, PDFs, clinician context" },
  { icon: "🧠", label: "Stress & behaviour", desc: "Cravings, check-ins, triggers" },
];

export const revaDecisionOutputs = [
  "Next best action",
  "Reason & risk context",
  "Metric to monitor",
  "Memory update for next time",
];

export const revaQuickPrompts = [
  "What is my current MRRRU phase recommendation?",
  "Scan my lunch and tell me what to do next",
  "Build my meal plan with glucose-stable sequencing",
  "My stress is high and I am craving sugar — what now?",
  "What sleep pattern is affecting my glucose?",
  "Generate my weekly metabolic report",
];

export const socialLinks = [
  { name: "YouTube", href: "https://youtube.com/@mrupatel", color: "#FF0000" },
  { name: "LinkedIn", href: "https://linkedin.com/in/mrupatel", color: "#0A66C2" },
  { name: "Instagram", href: "https://instagram.com/mrupatel", color: "#E1306C" },
  { name: "Facebook", href: "https://facebook.com/MruPatelEntrepreneur", color: "#1877F2" },
];

export const footerPlatformLinks = [
  { label: "MRRRU Phases", href: "/#phases" },
  { label: "REVA AI", href: "/reva" },
  { label: "Food OS", href: "/#food-os" },
  { label: "CGM Tracking", href: "/#cgm" },
  { label: "Blood OS", href: "/#blood" },
  { label: "Nine Pillars", href: "/#pillars" },
];

export const footerJourneyLinks = [
  { label: "Founder Story", href: "/#my-story" },
  { label: "Myth Busters", href: "/#myths" },
];

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Disclaimer", href: "#" },
];

export const statsStripMarkers = [
  { before: "11.3→N/A", label: "Glucose mmol/L" },
  { before: "212→124", label: "Systolic BP" },
  { before: "17.5→59.9", label: "Vitamin D ng/mL" },
  { before: "36→55.2", label: "HDL mg/dL" },
  { before: "2.7→1.1", label: "CRP Inflammation" },
  { before: "140→118", label: "LDL mg/dL" },
];

export const visualDemoFoodResult = {
  title: "High-protein dal bowl + greens + yoghurt",
  impact: "A−",
  protein: "38g",
  giRisk: "Low-Med",
  walk: "12 min",
  revaOutput:
    "Eat protein/greens first, starch last, walk after meal, then log 1h/2h glucose if using CGM.",
};

export const visualDemoWearableStats = [
  { label: "HRV", value: "42ms", sub: "Oura/Fitbit style" },
  { label: "Glucose", value: "5.6 mmol/L", sub: "CGM/manual" },
  { label: "Steps", value: "8,420", sub: "daily total" },
  { label: "Recovery", value: "76%", sub: "sleep + HRV" },
];

export const cgmUploadNote =
  "Libre, Dexcom, Eversense — photograph your CGM screen and REVA reads glucose values, trends, and time-in-range automatically";

export const cgmContexts = [
  "Fasting time",
  "Pre-meal baseline",
  "Post-meal 2hr",
  "Post-meal 3hr",
  "Walking time",
  "Exercise time",
  "Stress response",
  "Bedtime",
  "Wake-up",
  "Total sleep time",
];

export const cgmTargetZones = [
  { range: "4.0–6.0 mmol/L", label: "Optimal / Target Zone", color: "#4CAF7D" },
  { range: "6.0–8.0 mmol/L", label: "Watch Zone — investigate root cause", color: "#E8973A" },
  { range: "8.0–10.0 mmol/L", label: "Medication and must change lifestyle", color: "#E05252" },
  { range: ">10.0+ mmol/L", label: "Alert Zone — log trigger and see consultant", color: "#E05252" },
];

export const foodOsTabs = [
  { id: "configure", label: "Meal Configurator" },
  { id: "photo", label: "Photo Scan" },
  { id: "barcode", label: "Barcode / Label" },
  { id: "menu", label: "Menu Scan" },
  { id: "voice", label: "Voice Log" },
  { id: "recipes", label: "Recipe Library" },
] as const;

export const foodOsPhases = [
  "Phase 1 — Baseline Truth & Metabolic Awareness",
  "Phase 2 — Stabilisation & Safety Control",
  "Phase 3 — Food Intelligence & CGM Experimentation",
  "Phase 4 — Insulin Sensitivity Rebuild",
  "Phase 5 — Metabolic Flexibility & Medication-Taper",
  "Phase 6 — Longevity Sovereignty",
];

export const mealGoals = [
  "Keto",
  "High Protein",
  "Muscle Build",
  "Low Carb",
  "Lower Insulin",
  "Lose Visceral Fat",
  "Anti-Inflammatory",
  "Gut Health",
  "Longevity",
  "Low GI",
];

export const cuisineOptions = [
  "Indian",
  "Mediterranean",
  "Japanese",
  "Middle Eastern",
  "Mexican",
  "Thai",
  "British",
  "Chinese",
  "Vietnamese",
  "Italian",
  "Spanish",
  "European",
  "Fusion",
  "African",
];

export const foodOsRecipeCategories = [
  { name: "All Recipes", desc: "Full collection — metabolic sequence organised" },
  { name: "Breakfast & Brunch", desc: "Protein + fibre-first, low spike structure" },
  { name: "Lunch & Dinner", desc: "Protein-first, controlled glucose response" },
  { name: "Hunger Cheats", desc: "Craving control, social buffers, damage control" },
  { name: "Vegetarian", desc: "Metabolic health, satiety, gut support" },
  { name: "High Protein", desc: "Muscle, satiety, glucose disposal" },
  { name: "Keto", desc: "Low insulin, satiety, metabolic switching" },
  { name: "Low Carb", desc: "Reduce glucose variability, insulin control" },
  { name: "Low GI", desc: "Slower absorption, better recovery" },
  { name: "Anti-Inflammatory", desc: "Reduce CRP, support repair and recovery" },
  { name: "Gut Health / Fermented", desc: "Microbiome, digestion, inflammation" },
  { name: "Food Experiments & Response Logs", desc: "Founder's personal metabolic testing" },
];

export const foodOsMealPreview = {
  title: "International Brunch Protein Plate",
  description:
    "Poached eggs + smoked salmon or tofu + avocado + feta/Greek yoghurt + cucumber, tomato, onions and mixed leaves. Designed as a brunch-style MRRRU plate with protein-first sequencing and lower glucose load.",
  protein: "45g",
  spike: "Low-Med",
  walk: "15m",
  nutrition:
    "~620 kcal · Protein 40–45g · Carbs 18–24g · Fibre 9–12g · Fat 38–42g. Ingredients: 3 poached eggs, 80g smoked salmon or tofu, ½ avocado, 40g feta, cucumber/tomato/onion salad, 120g Greek yoghurt with berries/seeds.",
  sequence:
    "Sequence: yoghurt/veg → dal/paneer → millet last. REVA will adapt this after you select goals, cuisine and phase.",
};

export const bloodMarkerChips = [
  "HbA1c",
  "Fasting Glucose",
  "Lipid Panel",
  "Vitamin D",
  "CRP",
  "Thyroid",
  "Liver Panel",
  "Kidney Function",
  "Insulin",
];

export const bloodAnalysisLegend = [
  { label: "Critical", desc: "Values significantly outside range — immediate flag", color: "#E05252" },
  { label: "Borderline", desc: "Watch-zone values — trend monitoring needed", color: "#E8973A" },
  { label: "Improved", desc: "Positive movement vs previous results", color: "#4CAF7D" },
  { label: "Protocol", desc: "Specific MRRRU actions per marker", color: "#C9A84C" },
  { label: "Meds", desc: "Medication interaction context (not advice)", color: "#4A9EE8" },
];

export const metabolicMyths = [
  {
    myth: "If you exercise enough, you can eat anything",
    truth:
      "Exercise cannot outrun a chronically elevated insulin environment. You can burn 300 calories in 40 minutes and spike glucose 6 points with one wrong meal. Metabolic repair requires food AND movement — not one as permission for the other.",
  },
  {
    myth: "Fruit is healthy so eat as much as you want",
    truth:
      "Tropical fruits — mango, watermelon, pineapple — can spike glucose as aggressively as refined sugar for metabolically compromised individuals. Timing, context and phase matter enormously.",
  },
  {
    myth: "Type 2 diabetes is not reversible",
    truth:
      "The founder moved from HbA1c 8.3% to 5.3% in 5 months without GLP-1 medication. Clinical evidence supports metabolic reversal through food, fasting and movement interventions — particularly in early-to-mid stage T2D.",
  },
  {
    myth: "Low fat = heart healthy",
    truth:
      "Low-fat products typically replace fat with sugar or refined starch — both metabolic destabilisers. HDL improves with healthy fats (olive oil, avocado, omega-3). The founder's HDL went from 36 to 55.2 mg/dL by reintroducing good fats.",
  },
  {
    myth: "Eating late only matters if you overeat",
    truth:
      "Circadian insulin sensitivity peaks mid-morning. The same meal eaten at 7pm vs 8am produces meaningfully different glucose responses in most people. Eating timing is as important as eating content.",
  },
  {
    myth: "Stress has nothing to do with blood sugar",
    truth:
      "Cortisol triggers hepatic glucose release. High-stress periods can raise fasting glucose by 1–2 mmol/L without eating anything. The stress-glucose loop is one of the most underdiagnosed drivers of HbA1c elevation in executives and founders.",
  },
];

export const wearableInputMethods = [
  {
    title: "Photo Upload",
    desc: "Photograph your device screen or app. REVA reads the data automatically.",
  },
  {
    title: "CSV / File Export",
    desc: "Export data from your wearable app and upload the CSV or JSON file.",
  },
  {
    title: "Manual Entry",
    desc: "Type or speak your readings. REVA records and analyses any format.",
  },
];

export const wearableDevices = [
  {
    name: "Oura Ring",
    metrics: "Sleep · HRV · Readiness · Temperature",
    stats: [
      { label: "Readiness", value: "82" },
      { label: "HRV", value: "78ms" },
      { label: "Sleep", value: "6.8h" },
    ],
    export: "Oura App → Profile → Data Export → CSV",
  },
  {
    name: "Whoop 4.0",
    metrics: "Strain · Recovery · Sleep · HRV",
    stats: [
      { label: "Strain", value: "14.2" },
      { label: "Recovery", value: "72%" },
      { label: "Sleep", value: "7.1h" },
    ],
    export: "Whoop App → Account → Download My Data → CSV",
  },
  {
    name: "FreeStyle Libre CGM",
    metrics: "Real-time glucose · TIR · Spikes",
    stats: [
      { label: "Glucose", value: "5.8 mmol/L" },
      { label: "In Range", value: "87%" },
      { label: "Peak Today", value: "7.5" },
    ],
    export: "LibreLink App → Reports → Export CSV or photograph sensor screen",
  },
  {
    name: "Apple Watch / Health",
    metrics: "Steps · HR · VO2 · Sleep",
    stats: [
      { label: "Steps", value: "9,240" },
      { label: "Resting HR", value: "62" },
      { label: "VO2 Max", value: "38.2" },
    ],
    export: "iPhone Health App → Profile → Export All Health Data → ZIP → XML",
  },
  {
    name: "Garmin Connect",
    metrics: "Body Battery · Stress · HRV · Fitness",
    stats: [
      { label: "Body Battery", value: "68" },
      { label: "Stress", value: "32" },
      { label: "HRV Avg", value: "52ms" },
    ],
    export: "Garmin Connect web → Export Data → Activities CSV",
  },
  {
    name: "Withings Body Comp",
    metrics: "Weight · Body Fat · Muscle · Visceral Fat",
    stats: [
      { label: "Weight", value: "71kg" },
      { label: "Body Fat", value: "18.4%" },
      { label: "Visceral Fat", value: "11" },
    ],
    export: "Withings Health Mate → Profile → Download My Data → CSV",
  },
  {
    name: "Huawei Health",
    metrics: "SpO2 · Stress · Sleep · Activity",
    stats: [
      { label: "SpO2", value: "98%" },
      { label: "Stress", value: "28" },
      { label: "Health Score", value: "87" },
    ],
    export: "Huawei Health → Me → Privacy → Request User Data → CSV",
  },
  {
    name: "Google Fit",
    metrics: "Heart Points · Steps · Move Minutes",
    stats: [
      { label: "Heart Pts", value: "64" },
      { label: "Steps", value: "8,120" },
      { label: "Active Min", value: "42" },
    ],
    export: "Google Takeout → Google Fit → Download ZIP → Upload CSV",
  },
];

export const signalCaptureRoutes = [
  "Food · Barcode · Menu · Voice",
  "rPPG · HR · RR · HRV Proxy",
  "CGM · Labs · BP · Scale",
  "Voice Check-In · Sleep · Stress · Gut",
];

export const revaDecisionStandard = [
  { title: "Next Action", desc: "One clear step now" },
  { title: "Reason", desc: "Why this matters now" },
  { title: "Risk to Watch", desc: "What to avoid" },
  { title: "Metric to Monitor", desc: "Track this next" },
  { title: "Memory Update", desc: "Pattern stored" },
];

export const personalMemoryLayers = [
  {
    title: "Food → Glucose Memory",
    desc: "No patterns stored yet. Log meals to build your food-response profile.",
  },
  {
    title: "Sleep → Craving Memory",
    desc: "No patterns stored yet. Log sleep quality alongside food choices.",
  },
  {
    title: "Stress → Snacking Memory",
    desc: "No patterns stored yet. Complete voice check-ins to track stress-eating.",
  },
  {
    title: "Movement → Recovery Memory",
    desc: "No patterns stored yet. Sync wearables or log manually.",
  },
  {
    title: "Biomarker → Action Memory",
    desc: "No patterns stored yet. Upload blood reports to activate.",
  },
];

export const faceScanDisclaimer =
  "Face & Retina Scan provides wellness trend estimates only. Heart rate and respiration rate estimates are stronger camera signals. HRV, stress, recovery and BP/SpO2 trends are proxy indicators. Future retina-enabled pathways may support microvascular risk patterning, diabetic-retinopathy screening prompts, hypertension/cardiovascular risk signals and neurovascular health research flags — only through validated hardware, consent, clinical governance and partner pathways. This is not a medical device. Always consult a healthcare professional for medical decisions. REVA will never make diagnostic claims from these readings.";

export const faceScanMetrics = [
  { label: "Heart Rate (bpm)", note: "Stronger estimate" },
  { label: "Respiration Rate", note: "Stronger estimate" },
  { label: "HRV Proxy", note: "Proxy estimate only" },
  { label: "Stress Proxy", note: "Proxy estimate only" },
];

export const faceScanFutureSignals = [
  { title: "Camera rPPG", desc: "Heart rate, respiration, HRV proxy, stress/recovery proxy." },
  {
    title: "Retina-enabled future signals",
    desc: "Retinal vessel / microvascular patterning where validated hardware exists.",
  },
  {
    title: "Risk research flags",
    desc: "Diabetes/retinopathy prompts, hypertension/cardiovascular risk trend prompts.",
  },
  { title: "Safety boundary", desc: "Wellness trends only until clinically validated and regulated." },
];

export const platformDepthBullets = [
  { title: "Founder Proof", desc: "Before/after evidence, biomarker reversal, active journey, real founder data and pattern library." },
  {
    title: "FoodOS Categories",
    desc: "All Recipes, Breakfast, Lunch/Dinner, Hunger Cheats, Vegetarian, High Protein, Keto, Low GI, Anti-Inflammatory, Gut Health.",
  },
  {
    title: "Working Capture",
    desc: "Meal photo, CGM photo, blood report, wearable upload, voice meal log, barcode/menu scan and check-ins.",
  },
  {
    title: "REVA Actions",
    desc: "Next action, reason, risk to watch, metric to monitor and memory update on every meaningful answer.",
  },
];

export const platformDepthCards = [
  {
    badge: "New Layer",
    title: "FoodOS Scan+",
    desc: "Photo, barcode, label, menu and voice meal capture. Output is not only calories — it returns protein gap, GI/insulin-load risk, eating order, portion adjustment, post-meal movement and memory update.",
    cta: "Open FoodOS",
    href: "#food-os",
  },
  {
    badge: "Phase 2",
    title: "FaceScan / rPPG",
    desc: "Camera wellness signals: heart rate, respiration, HRV proxy, stress/recovery proxy and quality score. BP/SpO₂/cortisol are treated cautiously as trend/proxy logic only.",
    cta: "Open FaceScan",
    href: "#face-scan",
  },
  {
    badge: "Moat",
    title: "Personal Memory",
    desc: "Every scan, meal, spike, sleep pattern, stress event, movement response and blood marker becomes a compounding user-specific decision asset.",
    cta: "Ask REVA",
    href: "/reva",
  },
];

export const decisionCockpitDemo = {
  readiness: "78%",
  grade: "A−",
  summary:
    "Good recovery, moderate glucose-risk day because sleep was slightly short and evening cravings were logged yesterday.",
  checklist: [
    "Protein first at breakfast",
    "Watch late caffeine",
    "15-min post-meal walk",
  ],
  revaStandard: [
    "Next action: Eat protein/fibre first, reduce rice portion by 25%.",
    "Reason: Short sleep increases glucose sensitivity risk today.",
    "Risk to watch: 1-hour glucose peak or post-meal fatigue.",
    "Metric: Log 1h and 2h glucose or energy score.",
    "Memory: Update biryani + short-sleep response pattern.",
  ],
};

export const compactRoadmap = [
  {
    phase: "Phase 1",
    title: "Core Decision MVP",
    desc: "REVA, onboarding, FoodOS Scan, manual CGM, basic memory, safety guard and weekly report.",
  },
  {
    phase: "Phase 2",
    title: "Signal Capture Suite",
    desc: "Blood reports, wearables upload, BP/scale, sleep/stress/gut check-ins, barcode/menu/voice meal flows.",
  },
  {
    phase: "Phase 3",
    title: "FaceScan + Beta",
    desc: "rPPG wellness estimates with quality score, multilingual REVA, guided beta cohort and evidence reporting.",
  },
  {
    phase: "Phase 4",
    title: "Paid + Partners",
    desc: "Subscriptions, device bundles, clinic/coach/corporate pilots, partner dashboards and API/data pathways.",
  },
];

export const safetyTrustItems = [
  {
    title: "Not AI Doctor",
    desc: "REVA is coach, decision support and clinician-ready summary — not diagnosis or prescription.",
  },
  {
    title: "rPPG Boundaries",
    desc: "Camera signals are wellness estimates and trend proxies; quality score required before interpretation.",
  },
  {
    title: "Supplement Controls",
    desc: "No risky dosing claims without lab context, upper-limit logic and clinician caution where relevant.",
  },
];
