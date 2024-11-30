import {Meteor} from "meteor/meteor";
import {Transactions} from "../../imports/api/transactions";

Meteor.publish('transactions', function () {
    if (!this.userId) {
        return this.ready();
    }

    return Transactions.find({ userId: this.userId });
});