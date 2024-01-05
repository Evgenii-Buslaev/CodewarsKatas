// What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

// You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

// Input: Year as an int.

// Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

// Preconditions:

// Week starts on Monday.
// Year is between 1583 and 4000.
// Calendar is Gregorian.
// Examples (input -> output):
// * 2427 -> ['Friday']
// * 2185 -> ['Saturday']
// * 2860 -> ['Thursday', 'Friday']


function mostFrequentDays(year) {
    const dayTitles = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const daysInMonth = {}
    
    for (let month = 0; month <= 11; month++) {
        const dateOfCurrMonth = new Date(year, month, 1);
        const dateOfNextMonth = new Date(year, month + 1, 1);
        const daysAmount = Math.round((dateOfNextMonth - dateOfCurrMonth) / 1000 / 3600 / 24);
        
        for (let j = 0; j < daysAmount; j++) {
            const key = new Date(year, month, j).getDay()
            daysInMonth[dayTitles[key]] = (daysInMonth[dayTitles[key]] + 1) || 1
        }
    }
    const maxOccurrences = Math.max(...Object.values(daysInMonth));
    return Object
    .keys(daysInMonth)
    .filter(day => daysInMonth[day] === maxOccurrences)
    .sort((a, b) => findIndex(dayTitles, a) - findIndex(dayTitles, b))
}

function findIndex(arr, value) {
    return arr.findIndex(e => e === value)
}
