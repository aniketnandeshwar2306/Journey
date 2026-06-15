let score="33abc"

let numscore=Number(score)
// since 33abc => NaN
// but if 33 => 33
score=null
numscore=Number(score)
// null => 0

score=""
numscore=Number(score)
// ""=> 0
score="ani"
numscore=Number(score)
// "ani" => 1

// we can do String too

