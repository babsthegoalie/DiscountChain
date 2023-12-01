// Function to calculate total cost with subscription discount
const calculateTotalCostWithSubscription = (customer) => {
    let totalCost = customer.pricePerRefill * customer.refills;

    if (customer.subscription) {
        const subscriptionDiscount = 0.25 * totalCost;
        totalCost -= subscriptionDiscount;
    }

    return totalCost;
};

// Function to calculate total cost with coupon discount
const calculateTotalCostWithCoupon = (customer) => {
    let totalCost = calculateTotalCostWithSubscription(customer);

    if (customer.coupon) {
        totalCost -= 10;
    }

    return totalCost;
};

// Customer data
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
};

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
};

// Store the results of total costs in variables
const timmyTotalCost = calculateTotalCostWithCoupon(timmy);
const sarahTotalCost = calculateTotalCostWithCoupon(sarah);
const rockyTotalCost = calculateTotalCostWithCoupon(rocky);

// Function to log the individual grand totals for each customer
const logGrandTotal = (customerName, totalCost) => {
    console.log(`${customerName} => "Your grand total is $${totalCost}"`);
};

// Log the individual grand totals for each customer
logGrandTotal('Timmy', timmyTotalCost);
logGrandTotal('Sarah', sarahTotalCost);
logGrandTotal('Rocky', rockyTotalCost);
