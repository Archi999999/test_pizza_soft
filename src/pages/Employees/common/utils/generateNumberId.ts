export const generateNumberId = () => {
    return Math.floor(Date.now() + Math.random() * 1000)
};