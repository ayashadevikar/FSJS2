//20. In the following shopping cart add, remove, edit items
   // => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    //- add 'Meat' in the beginning of your shopping cart if it has not been already added
   // - add Sugar at the end of your shopping cart if it has not been already added
    //- remove 'Honey'
    //- modify Tea to 'Green Tea'
    
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

    shoppingCart.unshift('Meat'); //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]
    console.log(shoppingCart);

    shoppingCart.push('Sugar'); //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]
    console.log(shoppingCart);
   
    removed = shoppingCart.splice(4, 1); //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]
    console.log(shoppingCart);

    shoppingCart.splice(3, 1, 'Green Tea'); //[ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]
    console.log(shoppingCart);

    // output

[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]
[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]
[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]
[ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]



    