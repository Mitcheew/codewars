//https://www.codewars.com/kata/56598d8076ee7a0759000087
function calculateTip(amount, rating) {
    rating = rating.toLowerCase();
    let tip = rating === 'excellent' ? 1.2 : rating === 'great' ? 1.15 : rating === 'good' ? 1.1 : rating === 'poor' ? 1.05 : rating === 'terrible' ? 1 : 'Rating not recognised'
    return typeof tip === 'string' ? tip : Math.ceil((amount * tip) - amount)
    }