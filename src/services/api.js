import axios from "axios";
import { options } from "../options";

export default async function get_coins() {
    let data;

    await axios.request(options).then(function (response) {
        data = response.data
    }).catch(function (error) {
        console.error(error);
    })

    return data;
}
