/* suppose we have a player in a game, amd their 
inventory will look something like this "gold cup|
puppy | magic sword." Our job is to measure up how much 
their inventory is worth if they were to give their bag
(inventory) to somebody and sell all of the items in it.

Our job is to get the value of their entire inventory, 
hereare the values of the items in the world
- gold cup = 5
- puppy = 4
- magic sword = 10
- tooth of a magestic whale - 20
- tentacle of the giant squid = 100
- anything else = 1
*/
 // fat arrow function
//const getInventoryValue = Inventory string =>{};

function getInventoryValue(inventoryString){
    // split the string into an array
    const inventory = inventoryString.split(' | ');
    console.log(inventory);

    let sum = 0;

    // iterate over each item
    for(let i= 0; i<inventory.length; i++){
        // get value of current items
        const item = inventory [i];
        
        if (item === 'gold cup') sum += 5;
        else if (item === 'puppy') sum += 4;
        else if (item === 'magic sword') sum += 10;
        else if (item === 'tooth of a majestic whale') sum += 20;
        else if (item === 'tentacle of a giant squid') sum += 100;
        else sum += 1;
    }
    console.log(`value of invetory: ${sum}`);
    return sum;
}
// test inventory value
getInventoryValue('gold cup | puppy | magic sword | Japanese text book')



// function inventory(inv){
//     for(let i = 0; i< inv.length; i++){
//         console.log(inv[i])
//     }
// }
// let inventory_array= ['gold cup','puppy' ,'magic sword']
// inventory(inventory_array)

// function Total(prices){
//     let sum = 0
//     for(let i = 0; i< prices.length; i++){
//         sum+= prices[i];
//     }
//     return sum
// }
// let prices= [5, 4, 10]
// console.log(Total(prices))


