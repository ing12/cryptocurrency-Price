import { z } from "zod";
import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from "../Schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>//convierte el esquema o estructura del objeto zod en un type
export type CryptoCurrencyResponse = z.infer<typeof CryptoCurrencyResponseSchema> 
export type Pair = z.infer<typeof PairSchema> 
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>