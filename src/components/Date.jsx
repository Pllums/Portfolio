import React from "react";

function GetDate() {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"Novermber",
		"December",
	];
	const day = new Date();
	const currentDate = day.getDate();
	const currentMonth = months[day.getMonth()];

	return (
		<h3 className="date">
			{currentDate} {currentMonth}
		</h3>
	);
}

export default GetDate;
