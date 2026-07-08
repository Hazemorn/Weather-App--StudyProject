export default function currentDate(): string {
    
    const today = new Date();

    const weekday = today.toLocaleString("en-US", {weekday: 'long'});
    const month = today.toLocaleString("en-US", {month: 'long'})
    const day = today.getDate();
    const year = today.getFullYear();
    const formatted = `${weekday} ${day}, ${month} ${year}`;
    return formatted;
}