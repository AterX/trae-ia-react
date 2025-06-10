export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string | null
          created_at: string
          updated_at: string
          user_metadata: Json
        }
        Insert: {
          id?: string
          email?: string | null
          created_at?: string
          updated_at?: string
          user_metadata?: Json
        }
        Update: {
          id?: string
          email?: string | null
          created_at?: string
          updated_at?: string
          user_metadata?: Json
        }
      }
    }
  }
}