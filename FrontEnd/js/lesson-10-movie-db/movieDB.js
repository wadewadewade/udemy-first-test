var collection = [
    {
        title: "In Bruges",
        rating: 4.5,
        haveWatched: true
    },
    {
        title: "Mamma Mia",
        rating: 1,
        haveWatched: false
    },
    {
        title: "Seven Psychopaths",
        rating: 5,
        haveWatched: true
    },
    {
        title: "Les Miserables",
        rating: 4,
        haveWatched: false
    }
];

// define the function
function listOutMovies(arr) {

    // go through each movie in the collection
    arr.forEach(function(mov) {

        // construct the string - now in separate function
        console.log(buildString(mov));

    }
    )
};

function buildString(mov) {
    var result = "You have";
        
    if(mov.haveWatched === false){
        result += "n't"
    }

    result += " watched \"" 
    result += mov.title 
    result += "\" - " 
    result += mov.rating
    result += " star"

    if(mov.rating !== 1){
        result += "s"
    }
    
    return result
}