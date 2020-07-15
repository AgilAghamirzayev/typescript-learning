let reviews: number[] = [5,5,4,3,2,2,4,5.3,0];

let total: number = 0;

for (let i = 0; i< reviews.length; i++) {
  console.log(reviews[i]);
  total += reviews[i];
}

let average: number = total / reviews.length;

console.log(`Review average = ${average}`);