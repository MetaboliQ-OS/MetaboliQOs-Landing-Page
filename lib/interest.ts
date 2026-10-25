import { z } from "zod";

/** Partner pilot pathways named in Live V1 §11. */
export const PARTNERSHIP_INTERESTS = [
  "Genetic-test journeys",
  "Metabolic wellness journeys",
  "Health and clinical-record pathways",
  "Other",
] as const;

const text = (max: number) => z.string().trim().max(max, "Please keep this shorter.");
const required = (label: string, max = 160) => text(max).min(1, `${label} is required.`);
const optional = (max: number) => text(max).optional().or(z.literal("")).transform((v) => v || null);

const common = {
  name: required("Name", 120),
  workEmail: z.string().trim().toLowerCase().email("Please enter a valid work email."),
  organisation: required("Organisation"),
  country: required("Country", 120),
  message: optional(2000),
  contactConsent: z.literal(true, { message: "Please confirm we may contact you about this enquiry." }),
  marketingOptIn: z.boolean().optional().default(false),
  website: z.string().optional(), // honeypot
};

/**
 * Interest forms (§12 build notes). Partner: name, work email, organisation,
 * role, country, partnership interest, optional message. Corporate: name, work
 * email, organisation, country, optional population, area of interest,
 * optional message. No patient records are requested.
 */
export const interestSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("partner"),
    ...common,
    role: required("Role", 120),
    interest: z.enum(PARTNERSHIP_INTERESTS, { message: "Please choose a partnership interest." }),
  }),
  z.object({
    type: z.literal("corporate"),
    ...common,
    population: optional(160),
    interest: required("Area of interest", 300),
  }),
]);

export type InterestInput = z.input<typeof interestSchema>;
