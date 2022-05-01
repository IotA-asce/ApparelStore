const generateString = (STR_LEN) => {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, STR_LEN);
}

export {generateString};