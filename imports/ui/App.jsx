import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { UserProfile } from './components/profile/UserProfile';
import { AddTransaction } from './components/transactions/AddTransaction';
import { Balance } from './components/dashboard/Balance';
import { TransactionHistory } from './components/history/TransactionHistory';
import { GoogleLoginButton } from './components/buttons/GoogleLoginButton';
import { useDarkMode } from '../hooks/useDarkMode';
import '../../client/main.css';

export const App = () => {
    const userId = useTracker(() => Meteor.userId(), []);
    const [isDarkMode, toggleDarkMode] = useDarkMode();

    return (
        <Router>
            <section className={`bg-primary ${isDarkMode ? 'dark' : ''}`}>
                <div className="absolute top-0 right-0 flex items-start m-4">
                    <button onClick={toggleDarkMode}>
                        {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
                    </button>
                </div>
                {!userId && (
                    <div className="flex top-0 left-0 h-screen items-center justify-center pe-12">
                        <img src="/main.png" alt="Login Image" className="h-56 w-56 object-cover m-4" />
                    </div>
                )}
                <div className="bg-secondary">
                    <div>
                        <h1 className="text-title">Teapot</h1>
                        <h2 className="text-paragraph">Seu organizador financeiro para o dia a dia</h2>
                    </div>
                    {userId ? (
                        <Switch>
                            <Route path="/dashboard" component={Balance} />
                            <Route path="/transactions" component={AddTransaction} />
                            <Route path="/history" component={TransactionHistory} />
                            <Route path="/profile" component={UserProfile} />
                            <Redirect from="/" to="/dashboard" />
                        </Switch>
                    ) : (
                        <div className="flex items-center justify-center pt-6">
                            <GoogleLoginButton />
                        </div>
                    )}
                </div>
            </section>
        </Router>
    );
};
