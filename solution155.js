function UwU(text) {
    // const words = [AGRICHEMICAL,CAT,AGRICHEMICALS,AGRICULTURAL,AGRICULTURALIST,AGRICULTURALLY,AGRICULTURE,AGRICULTURES,AGRICULTURIST,AGRICULTURISTS]
    const results = {}
    const words = text.split(/\s/)

    words.forEach( theBirdIsTheWord => {
        const cleanedBirdWord = theBirdIsTheWord.trim().toLowerCase()
        if (cleanedBirdWord) {

            cleanedBirdWord[results] = (results[cleanedBirdWord] || 0) +1
        }
    });
                                                                                  //! Testing wordPlay for UD. Out of time. Pick up on return.
    

    return results = UwU(text)
}

console.log(UwU(AGGLUTINABILITY
    AGGLUTINABLE
    AGGLUTINANT
    AGGLUTINANTS
    AGGLUTINATE))

// [AGRICHEMICAL,CAT,AGRICHEMICALS,AGRICULTURAL,AGRICULTURALIST,AGRICULTURALLY,AGRICULTURE,AGRICULTURES,AGRICULTURIST,AGRICULTURISTS]
// AGGLUTINABILITY
// AGGLUTINABLE
// AGGLUTINANT
// AGGLUTINANTS
// AGGLUTINATE
