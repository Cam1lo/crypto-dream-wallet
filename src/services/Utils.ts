export abstract class Utils {
    static format_price(price: number): string {
        let coin_price = Number(price).toFixed(4)

        if (coin_price === '0.0000') {
            coin_price = Number(price).toPrecision(4)
        }

        return coin_price;
    }

    static format_number(number: number) {
        let formatter = Intl.NumberFormat('en', { notation: 'compact' });
        return formatter.format(number)
    }
}