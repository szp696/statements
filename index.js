let accounts = [
    {
        name: "John",
        balance: 200,
        transactions: [
            {
                from: "Andrea",
                to: "John",
                value: "30",
            },
            {
                from: "Peter",
                to: "Bank",
                value: "5",
            }
        ],
    },
    {
        name: "Peter",
        balance: 2101,
        transactions: [
            {
                from: "Damien",
                to: "Police",
                value: "33310",
            },
            {
                from: "Brock",
                to: "Bank",
                value: "599",
            }
        ],
    },
    {
        name: "Rick",
        balance: 523234,
        transactions: [
            {
                from: "Parker",
                to: "Sam",
                value: "119",
            },
            {
                from: "Bank",
                to: "Teca",
                value: "13",
            }
        ],
    }
];

function createAccount(accountName) {
    let balance = 0;
    let transactions = [];
    return {
        name: accountName,
        balance: balance,
        transactions: transactions,
    };
}
function createTransaction(from, to, value) {
    return {
        from: from,
        to: to,
        amount: amount,
    };
}
function findAccountIndex(name){
    for (let i = 0; i < accounts.length; i++){
        if (name === accounts[i].name){
            return i;
        }
    }
    return -1;
}



function main() {
    accounts.push(createAccount("Peter"));
    findAccountIndex("Peter");
}


window.addEventListener("load", main);
