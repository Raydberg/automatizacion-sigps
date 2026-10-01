/// <reference types="astro/client" />

import type { SigpsContext } from "./interfaces/SigpsContext.interface";

interface ImportMetaEnv {
  readonly SUPABASE_URL: string
  readonly SUPABASE_ANON_KEY: string
  readonly SIGPS_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace App {
  interface SessionData {
    sigps: SigpsContext;
  }
}