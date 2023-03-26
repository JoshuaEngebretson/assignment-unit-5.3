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
}; //End addToCollection


// Test the addToCollection function:
    // Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years.
        //(Feel free to share your musical interests, or make stuff up. Totally fine either way.)
    // Console.log each album as added using the returned value.
    
console.log('Adding new album to my collection:', addToCollection('Camp', 'Childish Gambino', 2011, //due to readability the album tracks are 3 per line.
    [{name: 'Outside', duration: '4:30'}, {name: 'Fire Fly', duration: '3:23'}, {name: 'Bonfire', duration: '3:13'},
    {name: 'All the Shine', duration: '5:46'}, {name: 'Letter Home', duration: '1:44'}, {name: 'Heartbeat', duration: '4:30'},
    {name: 'Backpackers', duration: '3:16'}, {name: 'Les', duration: '5:17'}, {name: 'Hold You Down', duration: '4:53'},
    {name: 'Kids', duration: '4:58'}, {name: 'You See Me', duration: '3:15'}, {name: 'Sunrise', duration: '3:40'},
    {name: 'That Power', duration: '7:42'}, {name: 'testTrack01', duration: '0:00'}]));

console.log('Adding new album to my collection:', addToCollection('Awaken, My Love!', 'Childish Gambino', 2016, //due to readability the album tracks are 3 per line.
    [{name: 'Me and Your Mama', duration: '6:19'}, {name: 'Have Some Love', duration: '3:44'}, {name: 'Boogieman', duration: '3:36'},
    {name: 'Zombies', duration: '4:41'}, {name: 'Riot', duration: '2:05'}, {name: 'Redbone', duration: '5:26'},
    {name: 'California', duration: '2:45'}, {name: 'Terrified', duration: '4:15'}, {name: 'Baby Boy', duration: '6:22'},
    {name: 'The Night Me and Your Mama Met', duration: '3:34'}, {name: 'Stand Tall', duration: '6:10'},
    {name: 'testTrack01', duration: '0:00'}]));

console.log('Adding new album to my collection:', addToCollection('Mr. Morale & The Big Steppers', 'Kendrick Lamar', 2022, //due to readability the album tracks are 3 per line.
    [{name: 'United in Grief', duration: '4:15'}, {name: 'N95', duration: '3:15'}, {name: 'Worldwide Steppers', duration: '3:23'},
    {name: 'Die Hard', duration: '3:59'}, {name: 'Father Time', duration: '3:42'}, {name: 'Rich (Interlude)', duration: '1:43'},
    {name: 'Rich Spirit', duration: '3:22'}, {name: 'We Cry Together', duration: '5:41'}, {name: 'Purple Hearts', duration: '5:29'},
    {name: 'Count Me Out', duration: '4:43'}, {name: 'Crown', duration: '4:24'}, {name: 'Silent Hill', duration: '3:40'},
    {name: 'Savior (Interlude)', duration: '2:32'}, {name: 'Savior', duration: '3:44'}, {name: 'Auntie Diaries', duration: '4:41'},
    {name: 'Mr. Morale', duration: '3:30'}, {name: 'Mother I Sober', duration: '6:46'}, {name: 'Mirror', duration: '4:16'},
    {name: 'The Heart Part 5', duration: '5:32'}, {name: 'testTrack01', duration: '0:00'}]));

console.log('Adding new album to my collection:', addToCollection('Castor, The Twin', 'Dessa', 2011, //due to readability the album tracks are 3 per line.
    [{name: '551', duration: '4:00'}, {name: 'Kites', duration: '3:59'}, {name: 'Mineshaft', duration: '4:37'},
    {name: 'The Chaconne', duration: '4:36'}, {name: 'Into The Spin', duration: '2:23'}, {name: "Dixon's Girl", duration: '3:17'},
    {name: 'The Crow', duration: '3:13'}, {name: 'Alibi', duration: '3:39'}, {name: 'Palace', duration: '3:12'},
    {name: 'Mineshaft 2', duration: '4:11'}, {name: 'The Beekeeper', duration: '4:06'}]));

console.log('Adding new album to my collection:', addToCollection('Cleopatra (Deluxe)', 'The Lumineers', 2016, //due to readability the album tracks are 3 per line.
    [{name: 'Sleep on the Floor', duration: '3:31'}, {name: 'Ophelia', duration: '2:40'}, {name: 'Cleopatra', duration: '3:21'},
    {name: 'Gun Song', duration: '3:36'}, {name: 'Angela', duration: '3:21'}, {name: 'In the Light', duration: '3:51'},
    {name: 'Gale Song', duration: '3:13'}, {name: 'Long Way from Home', duration: '2:32'}, {name: 'Sick in the Head', duration: '2:31'},
    {name: 'My Eyes', duration: '3:36'}, {name: 'Patience', duration: '1:35'}, {name: 'Where the Skies Are Blue', duration: '2:20'},
    {name: 'Everyone Requires a Plan', duration: '2:40'}, {name: 'White Lie', duration: '3:15'}, {name: 'Cleopatra (Acoustic demo)', duration: '4:48'}]));

console.log('Adding new album to my collection:', addToCollection('Dark Eyes', 'Half Moon Run', 2013, //due to readability the album tracks are 3 per line.
    [{name: 'Full Circle', duration: '3:02'}, {name: 'Call Me in the Afternoon', duration: '3:04'}, {name: 'No More Losing the War', duration: '3:57'},
    {name: 'She Wants to Know', duration: '4:12'}, {name: 'Need It', duration: '3:26'}, {name: 'Give Up', duration: '3:51'},
    {name: 'Judgement', duration: '3:05'}, {name: 'Drug You', duration: '3:48'}, {name: 'Nerve', duration: '3:17'},
    {name: 'Fire Escape', duration: '2:54'}, {name: '21 Gun Salute', duration: '4:52'}]));

// After all are added, console.log the collection array.
console.log('My album collection now includes:', collection);



let Tracks = collection.tracks //declared for easier looping within showCollection function
console.log('\n--- showCollection ---\n\n');
// Add a function named showCollection. This function should:
    // Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
function showCollection(collection_to_search) {
    // Console.log the number of items in the array.
    console.log('The following', collection_to_search.length, 'albums are in my collection');
    let x = 1; // Created x to track the track position within each album
    // Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.
    for (let album of collection_to_search) {
        console.log(`\n${album.title} by ${album.artist}, published in ${album.yearPublished}:`);
        for (track of album.tracks) {
            console.log(`${x}. ${track.name}: ${track.duration}`);
            x++ //advances x so that next track will be logged with the next number in sequence
        }
        x = 1; //resets x to 1, this allows us to constantly start at track 1 for each new album
    }
    return `\nEnd of this collection\n\n`
};//End showCollection

// Test the showCollection function.
console.log(showCollection(collection));



console.log('\n--- findByArtist ---\n\n');
// Add a function named findByArtist. This function should:
    // Take in artist (a string) parameter
function findByArtist(artist_to_find){
    // Create an array to hold any results, empty to start
    let albums_by_artist = []
    let x = 0
    // Loop through the collection and add any objects with a matching artist to the array.
    for (let i = 0; i < collection.length; i++){
        if (collection[i].artist === artist_to_find) {
            albums_by_artist.push(collection[i])
        }
    }
    // Return the array with the matching results. If no results are found, return an empty array.
    return albums_by_artist
};// End findByArtist



// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection.
//Check that for artists with multiple matches, all are found.
console.log('Is Metallica in my current collection? Expected empty array --->', findByArtist('Metallica'));
console.log('Is Dessa in my current collection? Expected 1 album --->', findByArtist('Dessa'));
console.log('Is Childish Gambino in my current collection? Expected 2 albums --->', findByArtist('Childish Gambino'));


// When testing your functions, write all tests in the JavaScript file!



// Stretch goals
console.log('\n--- Stretch Goals ---\n\n');
// Create a function called search. This function should:
    // Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
        // { artist: 'Ray Charles', year: 1957 }
console.log('Adding new album to my collection:', addToCollection('Ray Charles', 'Ray Charles', 1957,
    [{name: `Ain't That Love`, duration: '2:51'}, {name: 'Drown in My Own Tears', duration: '3:21'}, {name: 'Come Back Baby', duration: '3:06'},
    {name: `Sinner's Prayer`, duration: '3:24'}, {name: 'Funny (But I Still Love You', duration: '3:15'}, {name: 'Losing Hand', duration: '3:14'},
    {name: 'A Fool for You', duration: '3:03'}, {name: 'Hallelujah I Love Her So', duration: '2:35'}, {name: 'Mess Around', duration: '2:40'},
    {name: 'This Little Girl of Mine', duration: '2:33'}, {name: 'Mary Ann', duration: '2:48'}, {name: 'Greenbacks', duration: '2:52'},
    {name: `Don't You Know`, duration: '2:57'}, {name: 'I Got a Woman', duration: '2:51'}]));
/* This was Ray Charles' first studio album, it was later re-released under the tile of Hallelujah I Love Her So in 1962 */

function search(SearchObject){
    let albums_matching_parameters = []
    if (SearchObject.trackName) {
        for (let album of collection) {
            for (let i = 0; i < album.tracks.length; i++) {
                if (album.tracks[i].name === SearchObject.trackName) {
                    albums_matching_parameters.push(album)
                }
            }
        }
        console.log('\ntesting trackName only\n\n'); //this is put in as without it, I wasn't able to confirm if I was searching /returning based on the trackname alone.
        return albums_matching_parameters
    }
    for (let i = 0; i < collection.length; i++) {
        //test if both artist AND yearPublished match the search criteria, then adds to new array
        if (collection[i].artist === SearchObject.artist && collection[i].yearPublished === SearchObject.year) {
            albums_matching_parameters.push(collection[i])
        }
    }
    // The returned output from search should meet these requirements:
        // Return a new array of all items in the collection matching all of the search criteria.
        // If no results are found, return an empty array.
        // If there is no search object or an empty search object provided as input, then return all albums in the collection.
    //if either .artist or .year are undefined in the SearchObject parameter, then the whole collection is returned instead.
    if( SearchObject.artist === undefined || SearchObject.year === undefined){
        if (SearchObject.artist === undefined) { //logs what was missing from SearchObject that made the function provide whole collection instead
            console.log('\n.artist was undefined in the provided SearchObject'); 
        } else {
            console.log('\n.year was undefined in the provided SearchObject');
        }
        return collection
    }
    return albums_matching_parameters
};// End search


//Building test "criteria" for search function
let testSearch1_RayCharles = {
    artist: 'Ray Charles',
    year: 1957
};

let testSearch2_ChildishGambino_Track = {
    artist: 'Childish Gambino',
    year: 2011,
    trackName: 'Heartbeat'
};

let testSearch2_ChildishGambino_noTrack = {
    artist: 'Childish Gambino',
    year: 2011
};

testSearch3_noArtist = {
    year: 2011,
};

testSearch4_noYear = {
    artist: 'Childish Gambino'
};

testSearch5_onlyTrackName = {
    trackName: 'Heartbeat'
};

testSearch6_Metallica = {
    artist: 'Metallica',
    year: 1991,
};

testSearch7_UniversalTrack = {
    trackName: 'testTrack01'
};

//testing for search function
console.log('Expected one album. --->', search(testSearch1_RayCharles));
console.log('Expected One album. (ChildishGambino_Track) --->', search(testSearch2_ChildishGambino_Track));
console.log('Expected One album. (ChildishGambino_noTrack) --->', search(testSearch2_ChildishGambino_noTrack));
console.log('Expected One album. (onlyTrackName) --->', search(testSearch5_onlyTrackName));
console.log('Expected whole collection due to missing parameter. \n(noArtist) --->', search(testSearch3_noArtist));
console.log('Expected whole collection due to missing parameter. \n(noYear) --->', search(testSearch4_noYear));
console.log('Expected empty array. (testSearch6_Metallica Metallica is not in collection) --->', search(testSearch6_Metallica));

console.log('Adding new album to my collection:', addToCollection('Test multiple ablums', 'Ray Charles', 1957));
console.log('Expected 2 albums. (There are now 2 albums by Ray Charles from 1957) --->', search(testSearch1_RayCharles));

/*
I am unsure why the line below doesn't work, it tells me
    "3-music-collection.js:143 Uncaught TypeError: Cannot read properties of undefined (reading 'length')
    at search (3-music-collection.js:149:46)
    at 3-music-collection.js:230:97""
What I find odd is that I don't get this error until I try to test multiple albums with the same trackName
*/
// console.log('Expected 3 albums. (There are 3 albums with the track titled "testTrack01") --->', search(testSearch7_UniversalTrack));


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
