/**
 * Minimal Database typing for enquiry persistence.
 * Expand when more tables are added.
 */
export type EnquiryStatus = "new" | "in_progress" | "closed" | "spam";

export type EnquiryRow = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  product: string | null;
  collection: string | null;
  service: string | null;
  source: string | null;
  status: EnquiryStatus;
};

export type EnquiryInsert = {
  id?: string;
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
  product?: string | null;
  collection?: string | null;
  service?: string | null;
  source?: string | null;
  status?: EnquiryStatus;
};

export type Database = {
  public: {
    Tables: {
      enquiries: {
        Row: EnquiryRow;
        Insert: EnquiryInsert;
        Update: Partial<EnquiryInsert>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      enquiry_status: EnquiryStatus;
    };
    CompositeTypes: Record<string, never>;
  };
};
