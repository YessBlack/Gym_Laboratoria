//List Filtering 

function filter_list(l) {
    const filterList = l.filter(el => typeof(el) === 'number')
    return filterList
}
//Create Phone Number
function moveZeros(arr) {
    const arr1 = arr.filter(el => el !== 0)
    const arr2 = arr.filter(el => el === 0)
    return arr1.concat(arr2)
}
//Moving Zeros To The End
function moveZeros(arr) {
    const arr1 = arr.filter(el => el !== 0)
    const arr2 = arr.filter(el => el === 0)
    return arr1.concat(arr2)
}

