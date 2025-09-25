export type Gender = 'MALE' | 'FEMALE';
export type AgeGroup = 'CHILD' | 'TEEN' | 'YOUNG' | 'ADULT' | 'SENIOR';

export interface Contact {
  id?: number | null;
  name: string | null;
  gender: Gender | null;
  ageGroup: AgeGroup | null;
  phoneNumber: string | null; // ex: 11977777777
  agentKey?: string | null;
}
