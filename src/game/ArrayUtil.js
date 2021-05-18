export default {

    splitArray: function (inputArray, chuckSize) {
        return inputArray.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / chuckSize)

            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
            }

            resultArray[chunkIndex].push(item)

            return resultArray
        }, []);
    }
}