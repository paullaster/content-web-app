const blogId = () => {
    const statement = 'blog';
    let randNumber = [];
    for ( let i = 0; randNumber.length < 4; i++ ) {
        let randDigit = Math.floor( Math.random() * 10);
        randNumber = [...randNumber, randDigit];
    };
    console.log(randNumber);
};
blogId ();
//export default blogId;