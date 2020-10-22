module.exports = function check(str, bracketsConfig) {
    const openBr = bracketsConfig.map((i) => i[0]);
    const closeBr = bracketsConfig.map((i) => i[1]);
    const newArr = [];

    for (let i = 0; i < str.length; i += 1) {
        const openIndex = openBr.indexOf(str[i]);
        const closeIndex = closeBr.indexOf(str[i]);

        if (closeIndex === openIndex) {
            if (newArr.length > 0 && newArr[newArr.length - 1] === closeIndex) {
                newArr.pop();
            } else {
                newArr.push(openIndex);
            }
        } else if (openIndex !== -1) {
            newArr.push(openIndex);
        } else {
            if (newArr[newArr.length - 1] === closeIndex) {
                newArr.pop();
            } else return false;
        }
    }

    return newArr.length === 0;
};
