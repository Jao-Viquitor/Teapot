import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { UserProfile } from './components/UserProfile';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { TransactionHistory } from './components/TransactionHistory';
import { GoogleLoginButton } from './components/GoogleLoginButton';
import { useDarkMode } from '../hooks/useDarkMode';
import '../../client/main.css';


export const App = () => {
    const userId = useTracker(() => Meteor.userId(), []);
    const [isDarkMode, toggleDarkMode] = useDarkMode();

    return (
        <section className={`bg-primary ${isDarkMode ? 'dark' : ''}`}>
            <div className="absolute top-0 right-0 flex items-start m-4">
                <button onClick={toggleDarkMode}>
                    {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
                </button>
            </div>
            {!userId && (
                <div className="flex top-0 left-0 h-screen flex items-center justify-center pe-12">
                    <img src="/main.png" alt="Login Image" className="h-56 w-56 object-cover m-4" />
                </div>
            )}
            <div
                className="bg-secondary">
                <div>
                <h1 className="text-title">Teapot</h1>
                        <h2 className="text-paragraph">Seu
                            organizador financeiro para o dia a dia</h2>
                    </div>
                    {userId ? (
                        <div className="flex flex-col gap-3 pt-24">
                            <UserProfile/>
                            <AddTransaction/>
                            <Balance/>
                            <TransactionHistory/>
                        </div>
                    ) : (
                            <div
                                className="flex items-center justify-center pt-6">
                                <GoogleLoginButton/>
                            </div>
                    )}
                </div>
        </section>
    );
};
