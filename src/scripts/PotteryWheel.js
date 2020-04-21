let id = 1
export const makePottery = (shape, weight, height) => {
    let pieceOfPottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: id
    }

    id++

    return pieceOfPottery
}