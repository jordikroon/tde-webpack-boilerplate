module.exports = function () {
	var testKey = 'test';
	var storage = window.sessionStorage;

	try {
		storage.setItem(testKey, '1');
		storage.removeItem(testKey);
		return true;
	} catch (error) {
		return false;
	}
};
