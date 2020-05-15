//Self-needed
function Eevee() {
    let eeveelution = ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon"]
    let order = []
    while(order.length < 8){
        let pick = Math.floor(Math.random() * Math.floor(eeveelution.length))
        order.push(eeveelution[pick])
        eeveelution.splice(pick, 1)
    }
    return order;
 }