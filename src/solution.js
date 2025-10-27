// given the current month and the number of periods
// which window does the current month belong to

function getWindowIdx(noOfPeriods, currentMonth)
{
    const validPeriods = [1,2,4,12];
    const months = 12;
    let window = -1;

    try {
        
        // validate current month
        if(currentMonth > 12 || currentMonth < 1) {
            throw new Error("The current month should be between 1 and 12");
        }

        // validate number of periods
        if(!validPeriods.includes(noOfPeriods)) {
            throw new Error("Invalid number of periods");
        }

        // window size
        const windowSize = months / noOfPeriods;

        // window index
        window = Math.floor((currentMonth - 1) / windowSize);


    } catch(error) {
        console.error(error);
        return -1;
    }

    return window;

}
