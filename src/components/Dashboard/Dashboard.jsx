import { useTransactions } from '../../hooks/useTransactions.js'
import { formatAmount } from '../../utils/formatters.js'

export default function Dashboard() {
	const { totals } = useTransactions()
	return (
		<div className="flex flex-wrap justify-center gap-4">
			<div className="min-w-40 rounded-xl border border-neutral-800 bg-neutral-900/60 shadow-md p-4">
				<div className="text-sm text-emerald-400">Gelir</div>
				<div className="text-2xl font-bold">{formatAmount(totals.income)}</div>
			</div>
			<div className="min-w-40 rounded-xl border border-neutral-800 bg-neutral-900/60 shadow-md p-4">
				<div className="text-sm text-rose-400">Gider</div>
				<div className="text-2xl font-bold">{formatAmount(totals.expense)}</div>
			</div>
			<div className="min-w-40 rounded-xl border border-neutral-800 bg-neutral-900/60 shadow-md p-4">
				<div className="text-sm">Net</div>
				<div className={`text-2xl font-bold ${totals.net >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{formatAmount(totals.net)}</div>
			</div>
		</div>
	)
}
