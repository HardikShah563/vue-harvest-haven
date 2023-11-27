// method to create a delay
export const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

