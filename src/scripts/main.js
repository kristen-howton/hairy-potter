// Imports go first

import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"



// Make 5 pieces of pottery at the wheel
let Kylix = makePottery("Kylix", 1, 2)

let Pelike = makePottery("Pelike", 2, 2)

let Olpe = makePottery("Olpe", 3, 3)

let Oinochoe = makePottery("Oinochoe", 4, 4)

let Bell_krater = makePottery("bell krater", 4, 4)

// Fire each piece of pottery in the kiln

const firedPottery = firePottery(Kylix, Pelike, Olpe, Oinochoe, Bell_krater)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

