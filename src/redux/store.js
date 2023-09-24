import {configureStore} from '@reduxjs/toolkit';
import transactions from './transactionsSlice'

const store = configureStore({
    reducer: {
        deposit: transactions,
        withdrawal: transactions,
        transfer: transactions
    }
});

export default store;