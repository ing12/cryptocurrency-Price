import axios from "axios"
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../Schema/crypto-schema"
import type { Pair } from "../types"

export const getCryptos = async()=>{
    const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets',
        {
            params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 20,//20 tipos de monedas
            page: 1
            }
        }
    )

    const result = CryptoCurrenciesResponseSchema.safeParse(data)
   if (result.success) {
        return result.data
   }
}

export const fetchCurrentCryptoPrice = async (pair: Pair) => {

    const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets`,
        {
            params: {
                vs_currency: pair.currency.toLowerCase(),
                ids: pair.cryptocurrency
            }
        }
    )
    const result = CryptoPriceSchema.safeParse(data[0])
    if (result.success) {
        return result.data
    }
}