# 💰 Crypto Price

Aplicación web desarrollada con React y TypeScript que permite consultar el precio actualizado de las principales criptomonedas utilizando la API pública de CoinGecko.

El usuario puede seleccionar una criptomoneda y una divisa (USD, MXN, EUR, entre otras) para visualizar información relevante como el precio actual, máximos y mínimos de las últimas 24 horas, la variación del precio y la fecha de la última actualización.

## 🚀 Demo

https://ing12.github.io/cryptocurrency-Price/

## ✨ Características

- Consulta de las principales criptomonedas por capitalización de mercado.
- Selección de criptomoneda y moneda de cotización.
- Precio actualizado en tiempo real.
- Precio máximo y mínimo de las últimas 24 horas.
- Variación del precio en las últimas 24 horas.
- Fecha de la última actualización.
- Indicador de carga (Spinner).
- Validación de respuestas de la API mediante Zod.
- Manejo de estado global con Zustand.

---

## 🛠️ Tecnologías utilizadas

- React
- TypeScript
- Vite
- Zustand
- Axios
- Zod
- CSS3
- CoinGecko API

---

## 🌐 API utilizada

La información de las criptomonedas se obtiene desde:

https://www.coingecko.com/en/api

---

## 📚 Conceptos aplicados

Durante el desarrollo de este proyecto se implementaron conceptos como:

- Componentes funcionales de React
- Hooks (`useMemo`)
- Estado global con Zustand
- Consumo de APIs REST con Axios
- Validación de datos con Zod
- Helpers reutilizables
- Tipado estático con TypeScript
- Organización por capas (Components, Services, Store, Helpers y Types)

---
