import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let theCoachs: Coach[] = [];

theCoachs.push(myGolfCoach);
theCoachs.push(myCricketCoach);

theCoachs.forEach( coach => console.log(coach.getDailyWorkout()));