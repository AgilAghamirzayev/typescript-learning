let sports: string[] = ["Golf", "Cricet", "Tennis", "Football"]

for (let i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}


// simplied for loop
for (let tempSport of sports) {
    console.log(tempSport)
}

// lambda
sports.forEach(element => {
    console.log(element);
});

