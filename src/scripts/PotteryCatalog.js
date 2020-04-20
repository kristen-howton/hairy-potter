const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.weight >= 6) {
        potteryObject.price = 40
    } else if (potteryObject.weight < 6) {
        potteryObject.price = 20
    }
    return potteryObject
}

export const usePottery = () => {
    return potteryToSell.slice()
}