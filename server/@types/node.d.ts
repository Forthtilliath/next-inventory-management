declare global {
	namespace NodeJS {
		interface ProcessEnv {
			// app
			DATABASE_URL: string;
			PORT: number;
		}
	}
}

export type {};
