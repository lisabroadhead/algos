// Save The Prisoner

function saveThePrisoner(n, m, s) {
    // Write your code here
    var counter = 1;
    var runner = s;

    while(counter < m){
        console.log(`${counter} -  ${runner}`)
        runner === n ? runner = 1 : runner++;
        counter++;
    }
    return runner;
}

console.log(saveThePrisoner(5,2,2))
// console.log(saveThePrisoner(5,2,1))
// console.log(saveThePrisoner(4,6,2))
// saveThePrisoner(4,6,2)