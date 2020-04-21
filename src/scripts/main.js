// Imports go first

import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { PotteryList } from "./PotteryList.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"



// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1, 2)
console.log(mug)

let Pelike = makePottery("Pelike", 2, 2)

let Olpe = makePottery("Olpe", 3, 3)

let Oinochoe = makePottery("Oinochoe", 4, 4)

let Bell_krater = makePottery("bell krater", 4, 4)

// Fire each piece of pottery in the kiln

const firedMug = firePottery(mug, 2200)
console.log(firedMug)

const firedPelike = firePottery(Pelike, 2100)
console.log(firedPelike)

const firedOlpe = firePottery(Olpe, 2000)
console.log(firedOlpe)

const firedOinochoe = firePottery(Oinochoe, 2000)
console.log(firedOinochoe)

const firedBellKrater = firePottery(Bell_krater, 2300)
console.log(firedBellKrater)


// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedPelike)
toSellOrNotToSell(firedOlpe)
toSellOrNotToSell(firedOinochoe) 
toSellOrNotToSell(firedBellKrater)

// Invoke the component function that renders the HTML list
PotteryList()