const sorterPromise = (arr) => {
    return new Promise((resolve, reject) => {
        const everyElementIsAString = arr.every((item) => typeof item === 'string');
        let sortedArray = null;
        if (everyElementIsAString) {
            try {
                sortedArray = [...arr].sort();
            }
            catch (err) {
                reject('Error: Something went wrong with sorting!');
            }
        }
        sortedArray === null
            ? reject('Error: Not all elements are string type!')
            : resolve(sortedArray)
    });
};

export default sorterPromise;
