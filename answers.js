//Easy Going
for(let i = 1; i <= 20; i++) {
    console.log(i);
}

//Get Even
for(let i = 0; i <= 200; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

//Fizz Buzz
for(let i = 1; i <= 100; i++) {
    if(i % 3 == 0) {
        console.log("Fizz");
    }
    if(i % 5 == 0) {
        console.log("Buzz");
    }
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
}

//Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = plantee[2]+1;
console.log(plantee[2]);
wolfy[3] = "Gotham City";
console.log(wolfy[3]);
dart.push("Hawkins");
console.log(dart);
wolfy[0] = "Gameboy";
console.log(wolfy);

//Yell at the Ninja Turtles
const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for(let ninjaTurtles of turtles) {
    console.log(ninjaTurtles.toUpperCase());
}

//favMovies
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf("Titanic"));
favMovies.sort();
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
favMovies.unshift("Good Will Hunting");
console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(15, 1, "Avatar");
//Cut favMovies in half
const halfMovies = favMovies.length / 2;
//Set halfMovies side to someMovies
const someMovies = favMovies.slice(0, halfMovies);
console.log(someMovies);
console.log(favMovies.indexOf("Fast and Furious"));

//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(1, 1);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo[2][1][1]);

//Excited Kitten
const kittyTalk = ["....human why are you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

for(let i = 0; i <= 20; i++) {
    if(i % 2 ==0) {
        console.log(kittyTalk[Math.floor(Math.random()* kittyTalk.length)]);
    } else {
        console.log("Love me, pet me! HSSSSSSSS!");
    }
}

//Find the median
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
console.log(nums[Math.floor(nums.length / 2)]);


