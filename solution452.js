const invalidIds = new Set([1, 3, 3, 7])
const jobIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Mimics API rejects entire batch
function isBatchValid(ids) {
    return !ids.some(id => invalidIds.has(id))
}

function findInvalidIDs(ids) {

    // If no IDs provided, return nothing 
    if (ids.length === 0) return []

    // If we are down to a single ID, check and return nothing
    if (ids.length === 1) {
        return isBatchValid(ids) ? [] : ids
    }

    // If the entire batch is valid, return nothing 
    if (isBatchValid(ids)) return []

    const mid = Math.floor(ids.length / 2) // need whole number to find mid point
    const left = ids.slice(0, mid)
    const right = ids.slice(mid)

    return findInvalidIDs(left).concat(findInvalidIDs(right))
}

console.log('invalid Ids', findInvalidIDs(jobIds))