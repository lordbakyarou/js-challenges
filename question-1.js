/**
Question: 
  Write a JavaScript function which will take a single argument awards and return prizes in the below structure. 
  Time complexity of the solution should be O(n).
**/

const awards = require("./constants.js");

// console.log(awards);

const transformAwardsData = ({ awards }) => {
    //create a map to hold data.
    //use map since it has O(1) search TC

    const awardsMap = new Map();

    //iterate through the map to create a new key and value pair

    for (const award of awards) {
        const keyForMap = `${award.year + award.category}`;

        if (!awardsMap.has(keyForMap)) {
            awardsMap.set(keyForMap, {
                category: award.category,
                year: award.year,
                winners: [{ name: award.name }],
            });
        } else {
            awardsMap.get(keyForMap).winners.push({ name: award.name });
        }
    }

    awardsMap.forEach((value, key) => {
        console.log(value);
    });

    // return awardsMap;
};

console.log(transformAwardsData(awards));

// Output
const prizes = [
    {
        category: "Physics",
        year: 2019,
        winners: [
            { name: "James Peebles", share: 0.5 },
            { name: "Michel Mayor", share: 0.25 },
            { name: "Didier Queloz", share: 0.25 },
        ],
    },
    {
        category: "Chemistry",
        year: 2019,
        winners: [
            { name: "John B. Goodenough", share: 0.3333 },
            { name: "M. Stanley Whittingham", share: 0.3333 },
            { name: "Akira Yoshino", share: 0.3333 },
        ],
    },
    {
        category: "Physics",
        year: 2018,
        winners: [
            { name: "Arthur Ashkin", share: 0.5 },
            { name: "Gerard Mourou", share: 0.25 },
            { name: "Donna Strickland", share: 0.25 },
        ],
    },
    {
        category: "Chemistry",
        year: 2018,
        winners: [
            { name: "Frances H. Arnold", share: 0.5 },
            { name: "George P. Smith", share: 0.25 },
            { name: "Sir Gregory P. Winter", share: 0.25 },
        ],
    },
];
