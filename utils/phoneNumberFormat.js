const Handlebars = require("handlebars");

Handlebars.registerHelper("formatPhoneNumber", function (phoneNumber) {
	// Check if the phone number is provided and is a string
	if (phoneNumber) {
		numberString = phoneNumber.toString();
		// Remove all non-numeric characters
		const numericPhoneNumber = numberString.replace(/\D/g, "");

		// Check if the numericPhoneNumber has 10 digits
		if (numericPhoneNumber.length === 10) {
			// Format the numericPhoneNumber as (000)-000-0000
			return `(${numericPhoneNumber.slice(0, 3)})-${numericPhoneNumber.slice(
				3,
				6
			)}-${numericPhoneNumber.slice(6)}`;
		}
	}

	console.log(phoneNumber);
	// Return the original phoneNumber if it cannot be formatted
	return phoneNumber;
});
