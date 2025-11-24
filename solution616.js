function isAgeDiverse(list) {
    let results = []
    const getAges = list.map(ages => ages.age).sort((a, b) => a - b)
    for (item of getAges) {
        switch (item) {
            case item < 19:
                return results.push('teens');
            case item > 19 && item < 30:
                return results.push('twenties');
            case item > 29 && item < 40:
                return results.push('thirties');
            case item > 39 && item < 50:
                return results.push('forties');
            case item > 49 && item < 60:
                return results.push('fifties');
            case item > 59 && item < 70:
                return results.push('sixties');
            case item > 69 && item < 80:
                return results.push('seventies');
            case item > 79 && item < 90:
                return results.push('eighties');
            case item > 89 && item < 100:
                return results.push('nineties');
            case item > 100:
                return results.push('centenarian');
        }
    }

    // const category = ['teens', 'twenties', 'thirties', 'forties', 'fifties', 'sixties', 'seventies', 'eighties', 'nineties', 'centenarian']

    return results

}
console.log(isAgeDiverse(list1))