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
        <section className="bg-bg-light dark:bg-dark-bg min-h-screen flex items-center justify-center">
            <div className="bg-bg-light p-8 rounded-lg shadow-lg w-full max-w-md gap-3">
                <div>
                    <h1 className="text-text-light dark:text-text-dark text-5xl pb-2 text-center">Teapot</h1>
                    <h2 className="text-gray-600 dark:text-gray-400 text-center">Seu organizador financeiro para o dia a dia</h2>
                </div>
                {userId ? (
                    <div className="flex flex-col gap-3 pt-24">
                        <UserProfile/>
                        <AddTransaction/>
                        <Balance/>
                        <TransactionHistory/>
                    </div>
                ) : (
                    <div className="flex items-center justify-center pt-6">
                        <GoogleLoginButton/>
                    </div>
                )}
            </div>
        </section>
    );
};
