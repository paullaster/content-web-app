const paymentId = () => {
    const statement = '#';
    let randNumber = [];
    for ( let i = 0; randNumber.length < 7; i++ ) {
        let randDigit = Math.floor( Math.random() * 10);
        randNumber = [...randNumber, randDigit];
    };
    return statement + '' + randNumber.join('');
};
//export default paymentId;