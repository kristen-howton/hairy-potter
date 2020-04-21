import { usePottery } from "./PotteryCatalog.js"

const contentTarget = document.querySelector(".potteryList")

const renderPottery = potteryToRender => {
    contentTarget.innerHTML = potteryToRender.map(
        potteryObject => {
            return Pottery(potteryObject)
        }
    ).join("")
}

export const PotteryList = () => {
    const allPottery = usePottery()
    renderPottery(allPottery)
}

const Pottery = potteryObject => {
    return `
    <section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">${potteryObject.shape}</h2>
        <div class="pottery__properties">Item weighs ${potteryObject.weight} grams and is ${potteryObject.height} cm in height
        </div>
        <div class="pottery__price">Price is $${potteryObject.price}</div>
    </section>
    `
}
