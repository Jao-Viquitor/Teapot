import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Transactions } from '/imports/api/transactions';

export const AddTransaction = () => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('entrada');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Meteor.userId()) {
            alert('Você precisa estar logado para adicionar uma transação.');
            return;
        }

        Transactions.insert({
            amount: parseFloat(amount),
            type,
            description,
            createdAt: new Date(),
            userId: Meteor.userId(),
        });

        setAmount('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Valor"
                required
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
            </select>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descrição"
                required
            />
            <button type="submit">Adicionar</button>
        </form>
    );
};
