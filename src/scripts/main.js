// Imports go first

import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { Pottery } from "./PotteryList.js"



// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1, 2)
console.log(mug)

let Pelike = makePottery("Pelike", 2, 2)

let Olpe = makePottery("Olpe", 3, 3)

let Oinochoe = makePottery("Oinochoe", 4, 4)

let Bell_krater = makePottery("bell krater", 4, 4)

// Fire each piece of pottery in the kiln

const firedPottery = firePottery(mug, Pelike, Olpe, Oinochoe, Bell_krater)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

Pottery(firedPottery)