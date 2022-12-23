const timestamp = () => {
    const date = new Date ();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + (date.getDate())).slice(-2);
    const hour = ("0" + (date.getHours())).slice(-2);
    console.log (year, month, day, hour);
};
timestamp ()
//export default timestamp;