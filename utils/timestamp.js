const timestamp = () => {
    const date = new Date ();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + (date.getDate() + 1)).slice(-2);
    console.log (year, month, day);
};
timestamp ()
//export default timestamp;