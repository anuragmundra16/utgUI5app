sap.ui.define([], function () {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function (sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		},
		calculateAmount: function (Quantity, UnitPrice) {
			return Quantity * UnitPrice;
		},
		getStockText: function (units) {
			if (units >= 10) {
				return "Available";
			} else if (units < 10 && units > 0) {
				return "Low";
			} else
				return "Not Available";
		},
		getStockState: function (units) {
			if (units >= 10) {
				return "Success";
			} else if (units < 10 && units > 0) {
				return "Warning";
			} else
				return "Error";
		}
	};
});