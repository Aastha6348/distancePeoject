const fetchData = require('./fileHandler');
const distanceCalculator = require('./distanceCalculation');
const distanceLimit = require('./config').distanceLimit;

/*
This function is used to give validitity of cities based on -
1. distance - distance close to dublin
2. within 100 kmm range.
*/
function isCustomerEligible(customer) {
    var distance = distanceCalculator(
        			    customer.latitude,
        			    customer.longitude);
    if(Number(distance) <= distanceLimit)
    {
        return true;
    }
    return false;
}

/*
This method is used to sort the customer array object based on user_id values
*/
function sortCustomers(validCustomers, sortType) {
    validCustomers.sort((customerNext, customerPrev) => {
        let sortValue = customerNext['user_id'] - customerPrev['user_id'];
        return (sortType == 'DESC') ? -sortValue : sortValue;
    });
}

/*
This is the pilot function which is used to perform all the computing
*/
function main() {
    validCustomers = [];
    var customerData = fetchData();
    for (const customer of customerData) {
        let customerData = JSON.parse(customer);
        if(isCustomerEligible(customerData)) {
            validCustomers.push({ user_id: customerData.user_id, name: customerData.name });
        }
    }
    sortCustomers(validCustomers, 'ASC');
    return validCustomers;
}

module.exports = main;