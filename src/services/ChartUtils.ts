import { ChartData } from "../models/ChartData";
import { Utils } from "./Utils";


export abstract class ChartUtils {
    static sparkline_to_datachart(sparkline: any): ChartData[] {
        const datachart = sparkline.map((price: number, index: number) => {
            const now = new Date()
            now.setHours(now.getHours() - (sparkline.length - index - 1))
            const date = ('0' + now.getDate()).slice(-2);
            const month = now.toLocaleString('default', { month: 'short' });
            let hours = now.getHours();
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            var ampm = hours >= 12 ? 'pm' : 'am';
            const time = `${month} ${date} ${hours}:00${ampm}`;

            return new ChartData(time, Utils.format_price(price))
        })
        return datachart
    }
    static max_price = (data: ChartData[]) => Math.min(...data.map(item => Number(item.price)))
    static min_price = (data: ChartData[]) => Math.min(...data.map(item => Number(item.price)))
}