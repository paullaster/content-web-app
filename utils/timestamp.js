const timestamp = () => {
    const date = new Date ();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    console.log (year, month);
};
timestamp ()
//export default timestamp;