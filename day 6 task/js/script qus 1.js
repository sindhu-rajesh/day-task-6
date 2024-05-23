class Movie{
    constructor(title, studio, rating = "PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
const movie2 = new Movie("Casino Royale", "Eon Productions");


console.log(movie1.title);
console.log(movie1.studio);
console.log(movie1.rating);

console.log(movie2.rating);
