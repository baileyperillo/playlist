/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Smooth","Baby","Hanging Tree","Apocolyptic"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var image = ["https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Santanasmooth.jpg/220px-Santanasmooth.jpg ", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Babycoverart.jpg/220px-Babycoverart.jpg", "https://images-na.ssl-images-amazon.com/images/I/61KHB6yqAOL._SS500.jpg", "https://i2.wp.com/hardrockdaddy.com/wp-content/uploads/2015/01/halestorm-into-the-wild-life-band-photo.jpg"];
var artists = ["Santana feat. Rob Thomas", "Justin Bieber", "Jennifer Lawrence(Hunger Games)", "Halestorm"];
var songlength = [ "4:00", "3:36", "3:40", "3:15"];
var link = ["https://youtu.be/6Whgn_iE5uc", "https://youtu.be/kffacxfA7G4", "https://youtu.be/DqhOzH8QcH4", "https://youtu.be/gZy8hRBRS-E"];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
