export interface Clinic {
  id: string;
  name: string;
  email: string;
  phone: string;
  is_phone_whatsapp: boolean;
  state: string;
  street: string;
  zipcode: string;
  municipality: string;
  number: string;
  created_at: Date;
  updated_at: Date;
}
