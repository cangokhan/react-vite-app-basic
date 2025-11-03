function formatDateKey(dateStr) {
	// YYYY-MM-DD
	return dateStr
}

function formatMonthKey(dateStr) {
	const d = new Date(dateStr)
	const y = d.getFullYear()
	const m = String(d.getMonth() + 1).padStart(2, '0')
	return `${y}-${m}`
}

export function aggregateDaily(transactions) {
	const map = new Map()
	for (const t of transactions) {
		const key = formatDateKey(t.date)
		const cur = map.get(key) || { income: 0, expense: 0 }
		if (t.type === 'income') cur.income += t.amount
		else if (t.type === 'expense') cur.expense += t.amount
		map.set(key, cur)
	}
	return Array.from(map.entries())
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([date, v]) => ({ date, ...v, net: v.income - v.expense }))
}

export function aggregateMonthly(transactions) {
	const map = new Map()
	for (const t of transactions) {
		const key = formatMonthKey(t.date)
		const cur = map.get(key) || { income: 0, expense: 0 }
		if (t.type === 'income') cur.income += t.amount
		else if (t.type === 'expense') cur.expense += t.amount
		map.set(key, cur)
	}
	return Array.from(map.entries())
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([month, v]) => ({ month, ...v, net: v.income - v.expense }))
}
