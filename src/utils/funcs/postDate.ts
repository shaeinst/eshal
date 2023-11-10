const convertTime = (milliseconds: number): string => {
    const minute = 60 * 1000 // 60 seconds * 1000 milliseconds
    const hour = 60 * minute // 60 minutes * 60 seconds * 1000 milliseconds
    const day = 24 * hour // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    const year = 365 * day // 365 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds

    // Calculate the absolute value of the milliseconds
    const absMilliseconds = Math.abs(milliseconds)

    // Check the range of the milliseconds and return the appropriate unit
    if (absMilliseconds < hour) {
        // Return the minutes
        return Math.floor(absMilliseconds / minute) + ' m'
    } else if (absMilliseconds < day) {
        // Return the hours
        return Math.floor(absMilliseconds / hour) + ' h'
    } else if (absMilliseconds < year) {
        // Return the days
        return Math.floor(absMilliseconds / day) + ' d'
    } else {
        // Return the years
        return Math.floor(absMilliseconds / year) + ' y'
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

