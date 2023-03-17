//Immediately Invoked Function Expression

(function()
{
    const superHero = "Iron Man";
    console.log(superHero);
})();

(function()
{
    const superHero = "Thor";
    console.log(superHero);
    console.log("___________________________________")
    console.log("")
})(); 


// Adding A Message Parameter in the function

(function(message /*Parameter*/)
{
    const superHero = "Iron Man";
    console.log(message, superHero);
})("I am" /*Argument*/);

(function(message)
{
    const superHero = "Thor";
    console.log(message, superHero);
})("I am"); 