class CustomHashTable {
    constructor(){
        this.table = new Array(127);
        this.size = 0;
    }
    // hash function 
    hashFunction(key){
        let hash = 0;
        for(let i =0; i<key.length; i++){
            hash += key.charCodeAt(i);
        }
        // because of this modulus it will not return value outside
        // of the array length value
        return hash % this.table.length;

    }

    // Insert function 
    insert(key, value){
        let index = this.hashFunction(key);
        this.table[index] = [key, value];
        this.size +=1;

    }

    // Get function
    get(key){
        let index = this.hashFunction(key);
        let value = this.table[index];
        return value;
    }
}

let testHashTable = new CustomHashTable();
testHashTable.insert("0101", 'Rajesh');
testHashTable.insert("0102", 'Ramesh');
testHashTable.insert("0103", 'Gunjan');
console.log(testHashTable.get('0101'));
console.log(testHashTable.get('0102'));
console.log(testHashTable.get('0103'));
console.log(testHashTable);


let someName = 'Deepak';


let generateHash = (key) =>{
    let hash = 0;
    for(let i=0; i<key.length; i++){
        hash += key.charCodeAt(i);
        console.log(key.charCodeAt(i));
    }
    return hash;
}

console.log(generateHash(someName));
