var reviews = [5, 5, 4, 3, 2, 2, 4, 5.3, 0];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Review average = " + average);
