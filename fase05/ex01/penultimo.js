function penultimo(array){
    var paes = array 
    while (array === 'string'){
        return (array)
        array++
    } while ( array === 'number'){
        return (array)
        array++
    }
    while(array === 'boolean'){
        return (array)
        array++
    }
    return (paes.slice(-2, -1)).sort()
}
