import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import ApiProvider from './ApiProvider';

export default class StateProvider {
    static dispatch: any;

    static init_Provider(dispatch: any) {
        this.dispatch = dispatch
    }
    
    static async add_to_portfolio(uuid: string, spending: number) {
        const { setPortfolio, setUser } = bindActionCreators(actionCreators, this.dispatch);
        await ApiProvider.add_to_portfolio(uuid, spending);
        setPortfolio(await ApiProvider.get_portfolio());
        setUser(await ApiProvider.get_user());
    }
    


    static async init_user() {
        const { setUser } = bindActionCreators(actionCreators, this.dispatch)
        setUser(await ApiProvider.get_user())
    }

    static async init_coins() {
        const { initCoins } = bindActionCreators(actionCreators, this.dispatch)
        initCoins(await ApiProvider.get_coins())
    }
}
