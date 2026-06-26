import { useMemo } from "react"
import { useCryptoStore } from "../store"
import { formatCurrency, formatDate } from "../helpers"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {

    const {loading, resul, pair} = useCryptoStore()
    const hasResult = useMemo(() => Object.keys(resul).length > 0, [resul])

  return (
    <div className="resul-wrapper">
        {loading ? <Spinner/> : hasResult && (
            <>
                <h2>Cotización</h2>
                <div className="resul">
                    <img 
                        src={resul.image} 
                        alt="Imagen cryptomoneda" 
                    />
                    <div>
                        <p>El precio es de: <span>{formatCurrency(resul.current_price, pair?.currency)}</span></p>
                        <p>Precio más alto hace 24hr: <span>{formatCurrency(resul.high_24h, pair?.currency)}</span></p>
                        <p>Precio más bajo hace 24hr: <span>{formatCurrency(resul.low_24h, pair?.currency)}</span></p>
                        <p>Varición dentro 24hr: <span>{formatCurrency(resul.price_change_24h, pair?.currency)}</span></p>
                        <p>Última actualización: <span>{formatDate(resul.last_updated)}</span></p>
                    </div>
                </div>
            </>
        )}
    </div>
  )
}
