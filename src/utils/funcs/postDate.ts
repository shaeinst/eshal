const convertTime = (milliseconds: number): string => {
    // Calculate the absolute value of the milliseconds
    const absMilliseconds = Math.abs(milliseconds)

    const second = 1000 // 1000 milliseconds
    const minute = 60000 // 60 seconds * 1000 milliseconds
    const hour = 3600000 // 60 minutes * 60 seconds * 1000 milliseconds
    const day = 865440000 // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    const month = 2592000000 // 30 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    const year = 31536000000 // 365 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    // const second = 1000;
    // const minute = 60 * second;
    // const hour = 60 * minute;
    // const day = 24 * hour;
    // const month = 30 * day;
    // const year = 365 * day;

    switch (true) {
        case absMilliseconds < minute:
            return (absMilliseconds / second).toFixed() + 's'
        case absMilliseconds < hour:
            return(absMilliseconds / minute).toFixed() + 'm'
        case absMilliseconds < day:
            return Math.floor(absMilliseconds / hour) + 'h'
        case absMilliseconds < month:
            return Math.floor(absMilliseconds / day) + 'd'
        case absMilliseconds < year:
            return (absMilliseconds / month).toFixed() + 'mo'
        default:
            return (absMilliseconds / year).toFixed(1) + 'y'
    }
}

// A function to accept a date string and return how long ago was that
export function postDate(dateString: string): string {
    const currentDate = new Date()
    const date = new Date(dateString)

    // Calculate the difference between the dates in milliseconds
    const diff = date.getTime() - currentDate.getTime()

    return convertTime(diff)
}
