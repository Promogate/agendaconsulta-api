export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  address?: string;
  phone?: string;
  isPhoneWhatsapp: boolean;
  createdAt: Date;
  updatedAt: Date;
};
