import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import StateProvider from './StateProvider';

export function useConfig() {
    const [loading, set_loading] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        async function config() {
            setTimeout(async () => {
                StateProvider.init_Provider(dispatch);
                await StateProvider.init_user();
                await StateProvider.init_coins();
                set_loading(false);
            }, 3000)
        }

        config();
    })

    return loading;
}