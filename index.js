var recipes = {
  key: 'value'
}

function updateObjectWithKeyAndValue(object, key, value) {

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {

}

function deleteFromObjectByKey(object, key){
    var newObj = Object.assign(object, key)
    delete object[key];
    return recipes
}

function  destructivelyDeleteFromObjectByKey(object, key){
    delete object[key]
    return recipes
}
