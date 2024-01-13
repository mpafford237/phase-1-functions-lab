// Code your solution in this file!
let start = 48


function distanceFromHqInBlocks(start) {
    let numBlocksFromHq = Math.abs(42 - start);
    return numBlocksFromHq;
}

function distanceFromHqInFeet (start) {
    let numFeetFromHq = distanceFromHqInBlocks(start) * 264;
    return numFeetFromHq;
}

function distanceTravelledInFeet (start, destination) {
    let distanceTravelled = (Math.abs(destination - start)) * 264;
    return distanceTravelled;
}   


function calculatesFarePrice (start, destination) {
    let farePrice
    const distance = distanceTravelledInFeet (start, destination);
    switch (true) {
        case distance <= 400:
            farePrice = 0
            break;
        case distance > 2500:
            farePrice = "cannot travel that far"
            break;
        case distance >= 2000:
            farePrice = 25
            break;
        case distance > 400:
            farePrice = ((distance - 400) * 2) / 100
            break;
        default:
            farePrice = "invalid"
    }
    return farePrice
}