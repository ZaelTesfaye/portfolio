// utils/debounce.js
export default function debounce(func, timeout = 300) {
    let timer;
    let isFirstCall = true;

    return (...args) => {
        if (isFirstCall) {
            func(...args); // Execute immediately on the first call
            isFirstCall = false;
            return;
        }

        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args); // Apply the original function with arguments after debounce time
        }, timeout);
    };
}
