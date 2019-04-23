var recipes = {
  key: 'value'
}

<<<<<<< HEAD
function updateObjectWithKeyAndValue(object, key, value) {

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return recipes
}

function deleteFromObjectByKey(object, key){
    var newObj = Object.assign(object, key)
    delete object[key];
    return recipes
}
=======
>>>>>>> b8ce778ad22746dca6be705468a6068bad73653a

function  destructivelyDeleteFromObjectByKey(object, key){
    delete object[key]
    return recipes
}
