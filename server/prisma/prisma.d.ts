import type { Prisma, PrismaClient } from "@prisma/client";

export type PrismaOption = PrismaClient<
	Prisma.PrismaClientOptions,
	never,
	Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
>;
export type PrismaModel = keyof Omit<
	PrismaOption,
	| "$connect"
	| "$disconnect"
	| "$executeRaw"
	| "$executeRawUnsafe"
	| "$extends"
	| "$on"
	| "$queryRaw"
	| "$queryRawUnsafe"
	| "$transaction"
	| "$use"
	| symbol
>;

export type ModelDelegates = {
	[K in Prisma.ModelName]: PrismaClient[Uncapitalize<K>];
};
