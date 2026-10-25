export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  propertyId: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;
