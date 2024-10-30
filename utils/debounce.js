export default function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer); // Clear the previous timer
        timer = setTimeout(() => {
            func.apply(this, args); // Call the original function after the delay
        }, delay);
    };
}
