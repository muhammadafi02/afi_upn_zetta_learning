/**
 * @param {Book} book
 * @param {Number} discount
 * @param {Number} tax
 */

 function cashier(book, discount, tax){
    let result = 0;
    if(book && book.price){
        const price = book.price;
        const totalDiscount = price * (discount/100);
        const priceAfterDiscount = price - totalDiscount;
        const totalTax = priceAfterDiscount * (tax/100);
        const priceAfterTax = priceAfterDiscount + totalTax;
        result += priceAfterTax;

        console.group();
        console.log('Original Price', price);
        console.log('Discount Amount', totalDiscount);
        console.log('Price After Discount', priceAfterDiscount);
        console.log('Tax Amount', totalTax);
        console.log('Price After Tax', priceAfterTax)
        console.log()
        console.groupEnd();
    }

 }

cashier({title: "Book A", price:5000, publicity: true}, 50, 10);
cashier({title: "Book B", price:10000, publicity: false}, 50, 10);
cashier({title: "Book C", price:15000, publicity: true}, 50, 10);
