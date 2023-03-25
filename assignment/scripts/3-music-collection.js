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
    
console.log('Adding new album to my collection:', addToCollection('Camp', 'Childish Gambino', 2011, [{name: 'Outside', duration: '4:30'}, {name: 'Fire Fly', duration: '3:23'}, {name: 'Bonfire', duration: '3:13'}, {name: 'All the Shine', duration: '5:46'}, {name: 'Letter Home', duration: '1:44'}, {name: 'Heartbeat', duration: '4:30'}, {name: 'Backpackers', duration: '3:16'}, {name: 'Les', duration: '5:17'}, {name: 'Hold You Down', duration: '4:53'}, {name: 'Kids', duration: '4:58'}, {name: 'You See Me', duration: '3:15'}, {name: 'Sunrise', duration: '3:40'}, {name: 'That Power', duration: '7:42'}]));

console.log('Adding new album to my collection:', addToCollection('Awaken, My Love!', 'Childish Gambino', 2016, [{name: 'Me and Your Mama', duration: '6:19'}, {name: 'Have Some Love', duration: '3:44'}, {name: 'Boogieman', duration: '3:36'}, {name: 'Zombies', duration: '4:41'}, {name: 'Riot', duration: '2:05'}, {name: 'Redbone', duration: '5:26'}, {name: 'California', duration: '2:45'}, {name: 'Terrified', duration: '4:15'}, {name: 'Baby Boy', duration: '6:22'}, {name: 'The Night Me and Your Mama Met', duration: '3:34'}, {name: 'Stand Tall', duration: '6:10'}]));

console.log('Adding new album to my collection:', addToCollection('Mr. Morale & The Big Steppers', 'Kendrick Lamar', 2022, [{name: 'United in Grief', duration: '4:15'}, {name: 'N95', duration: '3:15'}, {name: 'Worldwide Steppers', duration: '3:23'}, {name: 'Die Hard', duration: '3:59'}, {name: 'Father Time', duration: '3:42'}, {name: 'Rich (Interlude)', duration: '1:43'}, {name: 'Rich Spirit', duration: '3:22'}, {name: 'We Cry Together', duration: '5:41'}, {name: 'Purple Hearts', duration: '5:29'}, {name: 'Count Me Out', duration: '4:43'}, {name: 'Crown', duration: '4:24'}, {name: 'Silent Hill', duration: '3:40'}, {name: 'Savior (Interlude)', duration: '2:32'}, {name: 'Savior', duration: '3:44'}, {name: 'Auntie Diaries', duration: '4:41'}, {name: 'Mr. Morale', duration: '3:30'}, {name: 'Mother I Sober', duration: '6:46'}, {name: 'Mirror', duration: '4:16'}, {name: 'The Heart Part 5', duration: '5:32'}]));

console.log('Adding new album to my collection:', addToCollection('Castor, The Twin', 'Dessa', 2011, [{name: '551', duration: '4:00'}, {name: 'Kites', duration: '3:59'}, {name: 'Mineshaft', duration: '4:37'}, {name: 'The Chaconne', duration: '4:36'}, {name: 'Into The Spin', duration: '2:23'}, {name: "Dixon's Girl", duration: '3:17'}, {name: 'The Crow', duration: '3:13'}, {name: 'Alibi', duration: '3:39'}, {name: 'Palace', duration: '3:12'}, {name: 'Mineshaft 2', duration: '4:11'}, {name: 'The Beekeeper', duration: '4:06'}]));

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



// collection[3] = ('Castor, The Twin', 'Dessa', 2011));

console.log(collection[3]);

// collection[4] = ('Cleopatra (Deluxe)', 'The Lumineers', 2016));
collection[4].tracks=[{name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}]

console.log(collection[4]);

// collection[5] = ('Dark Eyes', 'Half Moon Run', 2013));
collection[5].tracks=[{name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}]

console.log(collection[5]);

// collection[6] = ('Ray Charles', 'Ray Charles', 1957));
collection[6].tracks=[{name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}, {name: '', duration: ''}]

console.log(collection[6]);

