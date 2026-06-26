export const formatCurrency = (
    value: number,
    currency: string = 'USD'
) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency
    }).format(value)
}

export const formatDate = (
    date: string,
    locale = 'es-MX'
) => {
    return new Intl.DateTimeFormat(locale, {
        dateStyle: 'long',
        timeStyle: 'short'
    }).format(new Date(date))
}