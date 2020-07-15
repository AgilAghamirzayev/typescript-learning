var sports = ["Golf", "Cricet", "Tennis", "Football"];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSport = sports_1[_i];
    console.log(tempSport);
}
// lambda
sports.forEach(function (element) {
    console.log(element);
});
