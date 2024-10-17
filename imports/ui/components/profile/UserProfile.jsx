import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

export const UserProfile = () => {
    const { user, isLoading } = useTracker(() => {
        const user = Meteor.user();
        const isLoading = !Meteor.loggingIn() && !user;
        return { user, isLoading };
    });

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    return (
        <section>
            {user ? (
                <div className="row">
                    <h2>Olá, {user.profile.name}</h2>
                    <button onClick={() => Meteor.logout()}>Logout</button>
                </div>
            ) : (
                <p>Você não está logado</p>
            )}
        </section>
    );
};
