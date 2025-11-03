export function formatAmount(value) {
	return Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export function formatDate(dateStr) {
	try {
		return new Date(dateStr).toLocaleDateString()
	} catch {
		return dateStr
	}
}
