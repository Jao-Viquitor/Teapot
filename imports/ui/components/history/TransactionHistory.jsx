import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Transactions } from '/imports/api/transactions';
import { Meteor } from 'meteor/meteor';

export const TransactionHistory = () => {
    const { transactions, isLoading } = useTracker(() => {
        const userId = Meteor.userId();
        const subscription = Meteor.subscribe('transactions');

        if (!subscription.ready()) {
            return { transactions: [], isLoading: true };
        }

        const transactions = Transactions.find({ userId }, { sort: { createdAt: -1 } }).fetch();
        return { transactions, isLoading: false };
    });

    if (isLoading) {
        return <p>Carregando transações...</p>;
    }

    return (
        <div>
            <h2>Histórico de Transações</h2>
            <ul>
                {transactions.length > 0 ? (
                    transactions.map((transaction) => (
                        <li key={transaction._id}>
                            <span>
                                {transaction.type === 'entrada' ? '+' : '-'} R$ {transaction.amount.toFixed(2)}
                            </span>
                            <span> - {transaction.description}</span>
                            <span> - {transaction.createdAt.toLocaleString()}</span>
                        </li>
                    ))
                ) : (
                    <p>Nenhuma transação encontrada.</p>
                )}
            </ul>
        </div>
    );
};
