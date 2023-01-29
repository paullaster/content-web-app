const blogId = () => {
    const statement = 'imgs';
    let randNumber = [];
    for ( let i = 0; randNumber.length < 4; i++ ) {
        let randDigit = Math.floor( Math.random() * 10);
        randNumber = [...randNumber, randDigit];
    };
    
    return statement + '' + randNumber.join('');
};
module.exports = blogId;