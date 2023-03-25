console.log('***** Music Collection *****')

// Required Features
// Create a variable collection that starts as an empty array.
let collection = [];

console.log('\n--- addToCollection ---\n\n');
// Add a function named addToCollection. This function should:
    // Take in the album's title, artist, yearPublished as input parameters
function addToCollection(title, artist, yearPublished, tracks){
    // Create a new object having the above properties
    let newAlbum = {
        title : title,
        artist : artist,
        yearPublished : yearPublished,
        tracks: tracks
    }
    // Add the new object to the end of the collection array
    collection.push(newAlbum)
    // Return the newly created object
    return newAlbum
}


// Test the addToCollection function:
    // Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
    // Console.log each album as added using the returned value.
    
console.log('Adding new album to my collection:', addToCollection('Camp', 'Childish Gambino', 2011, [{name: 'Outside', duration: '4m 30s'}, {name: 'Fire Fly', duration: '3m 23s'}, {name: 'Bonfire', duration: '3m 13s'}, {name: 'All the Shine', duration: '5m 46s'}, {name: 'Letter Home', duration: '1m 44s'}, {name: 'Heartbeat', duration: '4m 30s'}, {name: 'Backpackers', duration: '3m 16s'}, {name: 'Les', duration: '5m 17s'}, {name: 'Hold You Down', duration: '4m 53s'}, {name: 'Kids', duration: '4m 58s'}, {name: 'You See Me', duration: '3m 15s'}, {name: 'Sunrise', duration: '3m 40s'}, {name: 'That Power', duration: '7m 42s'}]));

console.log('Adding new album to my collection:', addToCollection('Awaken, My Love!', 'Childish Gambino', 2016, [{name: 'Me and Your Mama', duration: '6m 19s'}, {name: 'Have Some Love', duration: '3m 44s'}, {name: 'Boogieman', duration: '3m 36s'}, {name: 'Zombies', duration: '4m 41s'}, {name: 'Riot', duration: '2m 05s'}, {name: 'Redbone', duration: '5m 26s'}, {name: 'California', duration: '2m 45s'}, {name: 'Terrified', duration: '4m 15s'}, {name: 'Baby Boy', duration: '6m 22s'}, {name: 'The Night Me and Your Mama Met', duration: '3m 34s'}, {name: 'Stand Tall', duration: '6m 10s'}]));

console.log('Adding new album to my collection:', addToCollection('Mr. Morale & The Big Steppers', 'Kendrick Lamar', 2022));

console.log('Adding new album to my collection:', addToCollection('Castor, The Twin', 'Dessa', 2011));

console.log('Adding new album to my collection:', addToCollection('Cleopatra (Deluxe)', 'The Lumineers', 2016));

console.log('Adding new album to my collection:', addToCollection('Dark Eyes', 'Half Moon Run', 2013));

// After all are added, console.log the collection array.
console.log('My album collection now includes:', collection);


console.log('\n--- showCollection ---\n\n');
// Add a function named showCollection. This function should:
    // Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
function showCollection(array) {
    // Console.log the number of items in the array.
    console.log('The following', array.length, 'albums are in my collection');
    // Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}.`);
    }
    return `End showCollection`
}


// Test the showCollection function.
console.log(showCollection(collection));


console.log('\n--- findByArtist ---\n\n');
// Add a function named findByArtist. This function should:
    // Take in artist (a string) parameter
function findByArtist(artist_to_find){
    // Create an array to hold any results, empty to start
    let albums_by_artist = []
    // Loop through the collection and add any objects with a matching artist to the array.
    for (let i = 0; i < collection.length; i++){
        if (collection[i].artist === artist_to_find) {
            albums_by_artist.push(collection[i])
        }
    }
    // Return the array with the matching results. If no results are found, return an empty array.
    return albums_by_artist
}

// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log('Is Metallica in my current collection? Expected [] ---->', findByArtist('Metallica'));
console.log('Is Dessa in my current collection?', findByArtist('Dessa'));
console.log('Is Childish Gambino in my currenct collection?', findByArtist('Childish Gambino'));


// When testing your functions, write all tests in the JavaScript file!



// Stretch goals
console.log('\n--- Stretch Goals ---\n\n');
// Create a function called search. This function should:
    // Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
        // { artist: 'Ray Charles', year: 1957 }
console.log('Adding new album to my collection:', addToCollection('Ray Charles', 'Ray Charles', 1957));
/* This was Ray Charles' first studio album, it was later re-released under the tile of Hallelujah I Love Her So in 1962
*/

function search(collectionToSearch, artist_name, albumYear){
    let albums_matching_parameters = []
    for (let i = 0; i < collectionToSearch.length; i++) {
        if (collectionToSearch[i].artist === artist_name && collectionToSearch[i].yearPublished === albumYear) {
            albums_matching_parameters.push(collectionToSearch[i])
        }
    }
    // The returned output from search should meet these requirements:
        // Return a new array of all items in the collection matching all of the search criteria.
        // If no results are found, return an empty array.
        // If there is no search object or an empty search object provided as input, then return all albums in the collection.
    if( artist_name === undefined || albumYear === undefined ){
        return collectionToSearch
    }
    return albums_matching_parameters
}

console.log('Expected one album. --->', search(collection, 'Ray Charles', 1957));
console.log('Expected whole collection due to missing parameter. --->', search(collection, 'Ray Charles'));
console.log('Expected empty array. --->', search(collection, 'Metallica', 1991));

addToCollection('Test multiple ablums', 'Ray Charles', 1957)
console.log('Expected 2 albums. --->', search(collection, 'Ray Charles', 1957));



// Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:
    // Update the addToCollection function to also take an input parameter for the array of tracks.
    // Update search to allow a trackName search criteria.
        // IF the search object has a trackName property, only search for that, ignoring any artist or year properties.
        // Update the showCollection function to display the list of tracks for each album with its name and duration.
            // TITLE by ARTIST, published in YEAR:
            // 1. NAME: DURATION
            // 2. NAME: DURATION
            // 3. NAME: DURATION
            // TITLE by ARTIST, published in YEAR:
            // 1. NAME: DURATION
            // 2. NAME: DURATION



console.log(collection[0]);

// collection[1] = ('Awaken, My Love!', 'Childish Gambino', 2016));

console.log(collection[1]);

// collection[2] = ('Mr. Morale & The Big Steppers', 'Kendrick Lamar', 2022));
collection[2].tracks=[{name: '', duration: ''}]

console.log(collection[2]);

// collection[3] = ('Castor, The Twin', 'Dessa', 2011));
collection[3].tracks=[{name: '', duration: ''}]

console.log(collection[3]);

// collection[4] = ('Cleopatra (Deluxe)', 'The Lumineers', 2016));
collection[4].tracks=[{name: '', duration: ''}]

console.log(collection[4]);

// collection[5] = ('Dark Eyes', 'Half Moon Run', 2013));
collection[5].tracks=[{name: '', duration: ''}]

console.log(collection[5]);

// collection[6] = ('Ray Charles', 'Ray Charles', 1957));
collection[6].tracks=[{name: '', duration: ''}]

console.log(collection[6]);

