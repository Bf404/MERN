console.log(hello);                                   
var hello = 'world';                                 

/*after hoisting:
    var hello;
    console.log(hello);
    hello = 'world'; 

    output:
    undefined 
*/

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

/*after hoisting:
   var needle;
   
   function test(){
       var needle;
       needle =  'magnet';
       console.log(needle);
   }
   needle = 'haystack';

    output:
    magnet 
*/

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

/*after hoisting:
var brendan;
function print(){
    barden = 'only okay'
     console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
    output:
    super cool

*/

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/*after hoisting:

var food;
food = 'chicken';
console.log(food);
eat();
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
    output:
    chicken
    half-chicken
*/

mean();
console.log(food);

var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


/*after hoisting:
var mean;
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);

}
console.log(food);
    output:
    error
*/

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

/*after hoisting:
var genre;
console.log(genre);
genre = "disco";

function rewind() {
     var genre;
     genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
    output:
    undefined
    rock
    r&b
    disco
    
*/

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

/*after hoisting:
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
    dojo = seattle;
    console.log(dojo);
    dojo = ""burbank";
    console.log(dojo);
}
console.log(dojo);
    output:
    san jose
    seattle
    burbank
    san jose
*/



console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


/*after hoisting:
console.log(makeDojo("Berkeley", 0));
console.log(makeDojo("Chicago", 65));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
    output:
    { name: 'Chicago', students: 65, hiring: true }
    then error

*/