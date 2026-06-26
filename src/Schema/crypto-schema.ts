import { z } from "zod";

export const CurrencySchema = z.object({
    code: z.string(),
    name:z.string()
})

//este es el objeto dentro del array o el tipado del objeto que viene en el array
export const CryptoCurrencyResponseSchema = z.object({
        id:z.string(),
        name:z.string()
})

//lo rodeamos con un z.array porque es presisamente un array el que recibimos de la api
export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)

export const PairSchema = z.object({
    currency: z.string(),
    cryptocurrency:z.string()
})

export const CryptoPriceSchema = z.object({
   image: z.string(),
   current_price: z.number(), 
   high_24h:z.number(),
   low_24h: z.number(),
   price_change_24h: z.number(),
   last_updated: z.string()
})

