describe("Array Utils", function () {

	ArrayUtils = new ArrayUtils();

    describe("test array", function () {
    	it("checks if a supplied object is an array object", function () {	
    		var input1 = [1,2,3,4];
    		var input2 = 1234;

    		var output1 = ArrayUtils.isArray(input1);
    		var output2 = ArrayUtils.isArray(input2);

	        expect(output1).toEqual(true);
	        expect(output2).toEqual(false);
	    });
    });

    describe("get flattened array", function () {
    	it("converts an array of arbitrarily nested arrays of integers to single flattened array", function () {	
    		var inputArr = [[1,2,[3]],4];
    		var outputArr = [1,2,3,4];

    		var flattenedArray = ArrayUtils.getFlattenedArray(inputArr);

	        expect(flattenedArray).toEqual(outputArr);
	    });
    });

});