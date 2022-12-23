const timestamp = () => {
    const date = new Date ();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    console.log (year, month);
};
timestamp ()
//export default timestamp;