export interface Doctor {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
  crm?: string;
  phone?: string;
  is_phone_whatsapp: boolean;
  specialties: string[];
}
