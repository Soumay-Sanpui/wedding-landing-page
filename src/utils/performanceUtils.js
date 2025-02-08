export const lazyLoadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = reject;
    });
};

export const preloadCriticalImages = async (images) => {
    try {
        await Promise.all(images.map(lazyLoadImage));
    } catch (error) {
        console.error('Failed to preload images:', error);
    }
};

export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}; 