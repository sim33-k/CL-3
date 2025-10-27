// given the current month and the number of periods
// which window does the current month belong to

function getWindowIdx(noOfPeriods, currentMonth)
{
    // validation
    // validate current month
    try {
        if(currentMonth > 12 || currentMonth < 1) {
            throw new Error("The current month should be between 1 and 12");
        }


    } catch(error) {
        console.error(error);
        return -1;
    }


 return window;
}
