import { useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions.js'
import { TRANSACTION_TYPES, DEFAULT_CATEGORIES } from '../../utils/constants.js'

export default function AddTransactionForm() {
	const { addTransaction } = useTransactions()
	const [type, setType] = useState(TRANSACTION_TYPES.EXPENSE)
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10))
	const [category, setCategory] = useState('')
	const [note, setNote] = useState('')

	const categories = type === TRANSACTION_TYPES.INCOME ? DEFAULT_CATEGORIES.income : DEFAULT_CATEGORIES.expense

	function handleSubmit(e) {
		e.preventDefault()
		const parsed = parseFloat(amount)
		if (Number.isNaN(parsed) || parsed <= 0) return
		const tx = {
			id: crypto.randomUUID(),
			type,
			amount: parsed,
			date,
			category: category || (categories[0] || ''),
			note,
		}
		addTransaction(tx)
		setAmount('')
		setNote('')
	}

	const inputCls = 'rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/60'
	const selectCls = inputCls
	const btnCls = 'rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-4 py-2'

	return (
		<form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-2">
			<select className={selectCls} value={type} onChange={(e) => setType(e.target.value)}>
				<option value={TRANSACTION_TYPES.INCOME}>Gelir</option>
				<option value={TRANSACTION_TYPES.EXPENSE}>Gider</option>
			</select>
			<input className={inputCls} type="number" step="0.01" placeholder="Tutar" value={amount} onChange={(e) => setAmount(e.target.value)} />
			<input className={inputCls} type="date" value={date} onChange={(e) => setDate(e.target.value)} />
			<select className={selectCls} value={category} onChange={(e) => setCategory(e.target.value)}>
				<option value="">Kategori</option>
				{categories.map((c) => (
					<option key={c} value={c}>{c}</option>
				))}
			</select>
			<input className={inputCls + ' w-48'} type="text" placeholder="Açıklama" value={note} onChange={(e) => setNote(e.target.value)} />
			<button className={btnCls} type="submit">Ekle</button>
		</form>
	)
}
