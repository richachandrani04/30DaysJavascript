// Activity 4 -> NestedLoop
//Task 7 ->Print pattern.

let i,j
for(i=1; i<=5; i++ ) {
    let pattern = ' ';
    for(j=1; j<=i;j++){
        pattern += "* ";
    }
    console.log(pattern);
}

//Task 8 ->Print 1 to 10, skip 5.
for(let i =1; i<=10; i++ ) {
    if(i === 5)
        continue;
    console.log(i)
}

//Task 8 ->Print 1 to 10, break when 7.
for(let i =1; i<=10; i++ ) {
    if(i === 7)
        break;
    console.log(i)
}

