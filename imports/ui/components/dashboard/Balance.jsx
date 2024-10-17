import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Transactions } from '/imports/api/transactions';

export const Balance = () => {
    const { balance, isLoading } = useTracker(() => {
        const subscription = Meteor.subscribe('transactions');

        if (!subscription.ready()) {
            return { balance: 0, isLoading: true };
        }

        const transactions = Transactions.find().fetch();

        const calculatedBalance = transactions.reduce((acc, transaction) => {
            return transaction.type === 'entrada'
                ? acc + transaction.amount
                : acc - transaction.amount;
        }, 0);

        return { balance: calculatedBalance, isLoading: false };
    });

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    const formattedBalance = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(balance);

    return <h2>Saldo Geral: {formattedBalance}</h2>;

};
