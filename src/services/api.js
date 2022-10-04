import axios from "axios";
import { options } from "../options";

let points = 250;

export default async function get_coins() {
    let data;

    await axios.request(options).then(function (response) {
        data = response.data
    }).catch(function (error) {
        console.error(error);
    })

    return data;
}

export const get_points = () => points;
export const update_points = (change) => { points += change  }