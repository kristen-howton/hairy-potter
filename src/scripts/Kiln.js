export const firePottery = (potteryObject, firingTemperature) => {
    potteryObject.fired = true
    if (firingTemperature > 2200) {
        potteryObject.cracked = true
    } else if (firingTemperature <= 2200) {
        potteryObject.cracked = false
    }
    return potteryObject
}