export const useFormatPrice = (num: any, decimal: any = 0) => {
    let regex = /\d(?=(\d{3})+(?!\d))/g;
    if (!num) {
        num = 0;
    }
    if (parseInt(decimal) > 0) {
        regex = /\d(?=(\d{3})+\.)/g;
    }
    let formatNumber = parseFloat(num).toFixed(decimal);
    return formatNumber.toString().replace(regex, "$&,");
};

export const useInputNumber = (num: string) => {
    if (num) {
        let regexNumber = /[\D]/gi;
        return num.toString().replace(regexNumber, '');
    }
};