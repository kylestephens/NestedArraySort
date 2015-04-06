/* Simple Nested Array Sorter
 * @author Kyle Stephens
 *
 * 03/04/2015
 */
function ArrayUtils(unsortedArray) {
	this.flattenedArray = []; // default value
}

/**
 * @method isArray tests whether an object is an array of not
 *
 * @param {Object} testArray
 * @return {Boolean} Returns `true` if is an instance of an Array
 */
ArrayUtils.prototype.isArray = function(testArray) {

	if(testArray instanceof Array) {
		return true;
	} else {
		return false;
	}

}

/**
 * @method getFlattenedArray receives a nested, unflattened array an returns
 * a flattened array, e.g. [[1,2,[3]],4] is converted to [1,2,3,4]
 *
 * @param {Object} unsortedArray an unsorted, nested array to be flattened
 * @return {Object} Returns flattened array
 */
ArrayUtils.prototype.getFlattenedArray = function(unsortedArray) {

	var arrayLength = unsortedArray.length;
	for (var i = 0; i < arrayLength; i++) {
		if(ArrayUtils.isArray(unsortedArray[i])) {
			// nested array found : call this function recursively
			this.getFlattenedArray(unsortedArray[i]);
		} else {
			this.flattenedArray.push(unsortedArray[i]);
		}
	}

	return this.flattenedArray;

}