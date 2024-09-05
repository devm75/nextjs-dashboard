    export function debounced<T extends (...args: any[]) => void>(
        func: T,
        delay: number
    ): (...args: Parameters<T>) => void {
        let timerId: NodeJS.Timeout | null = null;

        return (...args: Parameters<T>): void => {
            if (timerId) {
                clearTimeout(timerId);
            }

            timerId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    }