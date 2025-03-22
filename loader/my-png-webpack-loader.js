const path = require("node:path");

module.exports = function (source) {
	const options = this.getOptions();
	const imageName = path.basename(this.resourcePath);

	// You can imagine that the user can specify a width in the resource query
	// and we optimize the image accordingly.
	const imageFilepath = `static/media/${this.resourceQuery}${imageName}`;
	const imageURL = `/_next/static/media/${this.resourceQuery}${imageName}`;

	// You can se a log with the image without query being loaded while isServer is false, but this is NOT the case
	// with the image that uses the resourceQuery.
	console.log(options, "resourceQuery:", this.resourceQuery);

	const returnString = `export default '${imageURL}'`;
	if (options.isServer) {
		return returnString;
	}

	// The optimization would happen here. We don't want to perform this heavy lifting during client AND server compilation.

	this.emitFile(imageFilepath, source);
	return returnString;
};

module.exports.raw = true;
