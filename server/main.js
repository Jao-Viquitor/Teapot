import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';
import { Transactions } from '../imports/api/transactions';
import { Accounts } from 'meteor/accounts-base';
import dotenv from 'dotenv';

Meteor.startup(() => {

    dotenv.config();
    ServiceConfiguration.configurations.upsert(
        { service: 'google' },
        {
            $set: {
                clientId:process.env.GOOGLE_CLIENT_ID,
                secret:process.env.GOOGLE_CLIENT_SECRET
            },
        }
    );

    Transactions.allow({
        insert: () => true,
    });
});

Accounts.onCreateUser((options, user) => {
    user.profile = options.profile || {};
    if (user.services.google) {
        user.profile.name = user.services.google.name;
    }
    return user;
});
