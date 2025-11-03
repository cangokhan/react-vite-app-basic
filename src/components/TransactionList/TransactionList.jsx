import { useTransactions } from '../../hooks/useTransactions.js'
import { formatAmount, formatDate } from '../../utils/formatters.js'

export default function TransactionList() {
	const { transactions, deleteTransaction } = useTransactions()

	if (!transactions.length) {
		return <p className="text-sm text-neutral-400">Henüz kayıt yok.</p>
	}

	return (
		<ul className="w-full max-w-3xl divide-y divide-neutral-800">
			{transactions.map((t) => (
				<li key={t.id} className="flex items-center justify-between gap-2 py-3">
					<span className="min-w-20 text-neutral-400">{formatDate(t.date)}</span>
					<span className="flex-1 truncate">{t.category}{t.note ? ` - ${t.note}` : ''}</span>
					<span className={`min-w-28 text-right font-semibold ${t.type === 'income' ? 'text-emerald-400' : 'text-rose-400'}`}>
						{t.type === 'income' ? '+' : '-'}{formatAmount(t.amount)}
					</span>
					<button className="rounded-md border border-neutral-700 px-3 py-1 text-sm hover:bg-neutral-800" onClick={() => deleteTransaction(t.id)}>Sil</button>
				</li>
			))}
		</ul>
	)
}
