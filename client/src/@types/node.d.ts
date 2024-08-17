declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // app
      NEXT_PUBLIC_API_HOST: string;
      NEXT_PUBLIC_API_PORT: number;
      NEXT_PUBLIC_API_BASE_URL: string;
    }
  }
}

export type {};
