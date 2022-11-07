import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import ApiProvider from './ApiProvider';

export default class StateProvider {
    static dispatch: any;

    static init_Provider(dispatch: any) {
        this.dispatch = dispatch;
    }
    
    static async buy(uuid: string, spending: number) {
        const { setPortfolio, setUser } = bindActionCreators(actionCreators, this.dispatch);
        await ApiProvider.buy(uuid, spending);
        setPortfolio(await ApiProvider.get_portfolio());
        setUser(await ApiProvider.get_user());
    }
    
    static async init_portfolio() {
        const { setPortfolio } = bindActionCreators(actionCreators, this.dispatch);
        setPortfolio(await ApiProvider.get_portfolio());
    }

    static async init_user() {
        const { setUser } = bindActionCreators(actionCreators, this.dispatch);
        setUser(await ApiProvider.get_user());
    }

    static async init_coins() {
        const { initCoins } = bindActionCreators(actionCreators, this.dispatch);
        initCoins(await ApiProvider.get_coins());
    }
}
