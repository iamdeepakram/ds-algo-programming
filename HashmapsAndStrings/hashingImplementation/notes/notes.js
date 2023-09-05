// How to create map
let first_map = new Map()
// Insert K,V in maps
first_map.set("010", ["Deepak", "Dog", "Cat"]);
first_map.set("020", "Sanjay");
first_map.set("030", "John");
first_map.set("040", "John");
console.log(first_map);
// replace existing value 
first_map.set("040", "doe"); // changed the refernce to doe
console.log(first_map);

// How to check if a key is present in map
let exists = first_map.has("040");
console.log(exists);

// How to get value from map
let value_from_map = first_map.get("030");
console.log(value_from_map);

// How to delete K,V from map

let deleted = first_map.delete("010");
console.log(deleted);
console.log(first_map);


// How to delete the value not key
first_map.set("020"); // will set value to undefined
console.log(first_map);

// approaches to iterate over the map
// for each method -> iterate over map and return v and k pair
first_map.forEach((v,k)=> console.log(k+" --- " + v));

for (let pair of first_map){
    console.log(pair);
}

for ([k, v] of first_map){
    console.log(k + " ---- " + v);
}

// Iterate over keys
for (k of first_map.keys()){
    console.log(k);
}
// Iterate over values
for (v of first_map.values()){
    console.log(v);
}

// Iterate over entires
for ([k, v] of first_map.entries()){
    console.log(k + " --- " + v);
}

// how to clear the map
console.log(first_map.size);
// first_map.clear();
console.log(first_map.size);
console.log(first_map);

first_map['k'] = "New property in the map";
console.log("-----");

for (let k in first_map){
    console.log(k + " ---- " + first_map["k"]); // never do that
    // because it is trying to find property name k and it does not have it
}