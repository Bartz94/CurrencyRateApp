export const getTodayStr = (): string => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};

export const getLastMondayStr = (): string => {
    const today = new Date();
    const lastMonday = new Date();
    lastMonday.setDate(today.getDate() - ((today.getDay() + 6) % 7) - 6);
    lastMonday.setDate(lastMonday.getDate() - 1);
    return lastMonday.toISOString().split('T')[0];
};
