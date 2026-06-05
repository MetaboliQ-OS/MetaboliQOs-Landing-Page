/** Which signup form the person used. Maps to isVip in the database. */
export type SignupType = "user" | "founder";

export function signupTypeToVip(signup: SignupType): boolean {
  return signup === "founder";
}

export const PRIMARY_INTEREST_OPTIONS = [
  { value: "", label: "Select" },
  { value: "hba1c_blood_sugar", label: "HbA1c / blood sugar" },
  { value: "weight_management", label: "Weight management" },
  { value: "blood_pressure", label: "Blood pressure" },
  { value: "energy_longevity", label: "Energy & longevity" },
  { value: "cgm_wearables", label: "CGM / wearables" },
  { value: "metabolic_health", label: "General metabolic health" },
  { value: "other", label: "Other" },
] as const;
