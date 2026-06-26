import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { CryptoCurrencyResponse, CryptoPrice, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./Services/CryptoServices";

type CryptoStore = {
    cryptoCurrencies:CryptoCurrencyResponse[]
    resul: CryptoPrice
    pair: Pair | null
    loading:boolean
    fetchCryptos:()=> Promise<void>
    fetchData: (pair:Pair) => Promise<void>
}

//                                  Asignamos el tipo al state que aqui se llama store
export const useCryptoStore = create<CryptoStore>()(
    devtools((set)=>({
        loading:false,
        pair: null,
        cryptoCurrencies:[],//inicializamos el state vacio, aqui se llama store
        resul:{} as CryptoPrice,//si lo dejas como objeto marca error porque no puedes poner objetos, entonces le pasas el tipo CryptoPrice que es un objeto tipado y ya no da error
        
        fetchCryptos: async ()=>{//accion que llamara a la api
            
            const cryptoCurrencies =  await getCryptos()
            
            set(()=>({
                cryptoCurrencies//llenamos el state con la respuesta de la api
            }))
        },
        fetchData: async (pair)=>{
            
            set(()=>({loading:true}))//activamos el espinner en lo que hace la peticion a la api
            
            const resul = await fetchCurrentCryptoPrice(pair)

            set(()=>({
                resul,
                pair,
                loading:false//desactivamos una vz se escriben los datos en el store
            }))
        }
    })))