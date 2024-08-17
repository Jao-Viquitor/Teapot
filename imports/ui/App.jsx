import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { UserProfile } from './components/UserProfile';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { TransactionHistory } from './components/TransactionHistory';
import { GoogleLoginButton } from './components/GoogleLoginButton';

export const App = () => {
    const userId = useTracker(() => Meteor.userId(), []);

    return (
        <div>
            <h1>Financeiro</h1>
            {userId ? (
                <>
                    <UserProfile />
                    <AddTransaction />
                    <Balance />
                    <TransactionHistory />
                </>
            ) : (
                <>
                    <p>Por favor, faça login para continuar.</p>
                    <GoogleLoginButton />
                </>
            )}
        </div>
    );
};
