
function calculateProportion(total, amount) {
    if (total === 0) {
        return 0; 
    }
    return (amount / total) * 100;
}


const total = 200;
const amount = 50;
const proportion = calculateProportion(total, amount);
alert(`Пропорция: ${proportion}`);
