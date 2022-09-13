export function normalize_price(price) {
    let coin_price = Number(price).toFixed(4)

    if (coin_price === '0.0000') {
        coin_price = Number(price).toPrecision(4)
    }

    return coin_price;
}

export function formatNumber(number) {
    let formatter = Intl.NumberFormat('en', { notation: 'compact' });
    return formatter.format(number)
}