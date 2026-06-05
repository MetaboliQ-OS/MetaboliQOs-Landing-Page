/** Which signup form the person used. Maps to isVip in the database. */
export type SignupType = "user" | "founder";

export function signupTypeToVip(signup: SignupType): boolean {
  return signup === "founder";
}

export const PRIMARY_INTEREST_OPTIONS = [
  { value: "hba1c_blood_sugar", label: "HbA1c / blood sugar" },
  { value: "weight_management", label: "Weight management" },
  { value: "blood_pressure", label: "Blood pressure" },
  { value: "energy_longevity", label: "Energy & longevity" },
  { value: "cgm_wearables", label: "CGM / wearables" },
  { value: "metabolic_health", label: "General metabolic health" },
  { value: "other", label: "Other" },
] as const;

export type PrimaryInterestValue = (typeof PRIMARY_INTEREST_OPTIONS)[number]["value"];

export const PRIMARY_INTEREST_VALUES = PRIMARY_INTEREST_OPTIONS.map(
  (option) => option.value,
) as [PrimaryInterestValue, ...PrimaryInterestValue[]];

export function interestLabel(value: PrimaryInterestValue | string): string {
  return (
    PRIMARY_INTEREST_OPTIONS.find((option) => option.value === value)?.label ?? value
  );
}

/** Stored in DB as a JSON string array. */
export function serializePrimaryInterests(interests: PrimaryInterestValue[]): string | null {
  if (interests.length === 0) return null;
  return JSON.stringify(interests);
}

export function parsePrimaryInterests(stored: string | null): string[] {
  if (!stored) return [];
  try {
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      return parsed.filter((item) => typeof item === "string");
    }
  } catch {
    // Legacy single-value rows
  }
  return [stored];
}

export function formatPrimaryInterests(stored: string | null): string {
  const interests = parsePrimaryInterests(stored);
  if (interests.length === 0) return "—";
  return interests.map(interestLabel).join(", ");
}
