import dayjs from "dayjs"

export const formatDate = (date: string) =>
	dayjs(date, "YYYY/MM/DD").format("MMM D, YYYY")
