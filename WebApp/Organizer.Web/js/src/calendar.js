class Calendar {
	constructor() {
	}

	render() {
		var unit = "day",
		from = moment("25/06/2017").startOf(unit),
		to = moment("05/08/2017").endOf(unit),
		date = from;

		while (!date.isAfter(to)) {
			this.renderDay(date);
			date.add(1, unit);
		}
	}



	renderDay(dayDate) {
	}
}

export { Calendar };