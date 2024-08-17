import React from 'react';
import { Meteor } from 'meteor/meteor';

export const GoogleLoginButton = () => {
    const handleLogin = () => {
        Meteor.loginWithGoogle((err) => {
            if (err) {
                console.error('Erro ao fazer login com Google', err);
            } else {
                console.log('Login bem-sucedido!');
            }
        });
    };

    return (
        <button onClick={handleLogin}>
            Login com Google
        </button>
    );
};
