export const sanitizeAmountInput = (value: string): string => {
    let cleanValue = value.replace(',', '.');
    cleanValue = cleanValue.replace(/[^0-9.]/g, '');

    const parts = cleanValue.split('.');
    if (parts.length > 2) {
        cleanValue = `${parts[0]}.${parts.slice(1).join('')}`;
    }

    return cleanValue;
};

export const parseAmount = (value: string): number => {
    const amount = parseFloat(value);
    return !isNaN(amount) && isFinite(amount) ? amount : 0;
};

export const isValidAmount = (value: string): boolean => {
    return parseAmount(value) > 0;
};

export const calculateTip = (amount: number, percentage: number): number => {
    return amount * percentage;
};

export const formatCurrency = (value: number): string => {
    return `$${value.toFixed(2)}`;
};