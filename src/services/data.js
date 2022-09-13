import { normalize_price } from "./utils";

export default function sparkline_to_datachart(sparkline) {
    const datachart = sparkline.map((price, index) => {
        const now = new Date()
        now.setHours(now.getHours() - (sparkline.length - index - 1))
        const date = ('0' + now.getDate()).slice(-2);
        const month = now.toLocaleString('default', {month: 'short'});
        let hours = now.getHours();
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        var ampm = hours >= 12 ? 'pm' : 'am';
        const time = `${month} ${date} ${hours}:00${ampm}`;

        return {
            time,
            price: normalize_price(price)
        }
    })
    return datachart
}

export const max_price = (data) => Math.min(...data.map(item => item.price))
export const min_price = (data) => Math.min(...data.map(item => item.price))
