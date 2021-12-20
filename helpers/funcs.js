const convertDateTime = (time) => {
    return +(String(time) + '000');
};

const getTime = (time) => {
    const fullTime = new Date(time);
    return `${setZero(fullTime.getHours())}:${setZero(fullTime.getMinutes())}:${setZero(fullTime.getSeconds())}`;
};

const setZero = (number) => {
    if (number < 10) {
        return '0' + String(number);
    } else {
        return number;
    }
}

export { convertDateTime, getTime, setZero }