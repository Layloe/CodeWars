// Your task
// Given a list of notes (represented as strings) and an interval, output a list of transposed notes in sharp notation.

// Input notes may be represented both in flat and sharp notations (more on that below).

// For this kata, assume that input is always valid and the song is at least 1 note long.

// Assume that interval is an integer between -12 and 12.

// Short intro to musical notation
// Transposing a single note means shifting its value by a certain interval.

// The notes are as following:

// A, A#, B, C, C#, D, D#, E, F, F#, G, G#.
// This is using sharp notation, where '#' after a note means that it is one step higher than the note. So A# is one step higher than A.

// An alternative to sharp notation is the flat notation:

// A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab.
// The 'b' after a note means that it is one step lower than the note.

// Examples
// ['G'] -> 5 steps -> ['C']
// ['Db'] -> -4 steps -> ['A']
// ['E', 'F'] -> 1 step -> ['F', 'F#']

function transpose(song, interval){
    const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    const flatNotes = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
    const findNote = index => notes[index % notes.length]
    
    // song.map((item, index) => {
    //     notes[interval % notes.length]
    // })
    return song.findNote(interval)
}
console.log(transpose(['Ab', 'Gb'] , 2 ))
// Input has two params one being an array of strings.
// Output is an array that contains strings.
    // [ ['A'], 1, ['A#'] ],
    // [ ['E'], 5, ['A'] ],
    // [ ['D#'] , 8  , ['B'] ],
    // [ ['Ab', 'Gb'] , 2  , ['A#', 'G#'] ],
    // [ ['Bb', 'C#', 'E'] , -4  , ['F#', 'A', 'C'] ],
    // [ ['A#', 'C#', 'D', 'D#', 'A#', 'F#', 'D#'] , -6  , ['E', 'G', 'G#', 'A', 'E', 'C', 'A'] ],
    // [ ['C', 'C', 'C#', 'D', 'F', 'D', 'F', 'D', 'D', 'C#', 'C', 'G', 'C', 'C'] , 4  , ['E', 'E', 'F', 'F#', 'A', 'F#', 'A', 'F#', 'F#', 'F', 'E', 'B', 'E', 'E'] ] 
// Use map to cycle through array then use notes[interval % notes.length] to cycle through array. Hail Mary time.
