import { useMemo, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions.js'
import { aggregateDaily, aggregateMonthly } from '../../services/reports.js'
import { formatAmount } from '../../utils/formatters.js'

export default function Reports() {
	const { transactions } = useTransactions()
	const [tab, setTab] = useState('daily') // 'daily' | 'monthly'

	const daily = useMemo(() => aggregateDaily(transactions).slice(-7), [transactions])
	const monthly = useMemo(() => aggregateMonthly(transactions).slice(-6), [transactions])

	return (
		<div className="w-full max-w-3xl">
			<div className="mb-2 flex justify-center gap-2">
				<button onClick={() => setTab('daily')} className={`rounded-md border px-3 py-1 text-sm ${tab === 'daily' ? 'bg-neutral-800 border-neutral-700' : 'border-neutral-800 hover:bg-neutral-900'}`}>Günlük</button>
				<button onClick={() => setTab('monthly')} className={`rounded-md border px-3 py-1 text-sm ${tab === 'monthly' ? 'bg-neutral-800 border-neutral-700' : 'border-neutral-800 hover:bg-neutral-900'}`}>Aylık</button>
			</div>
			<div className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900/40">
				{tab === 'daily' ? (
					<table className="w-full border-collapse text-sm">
						<thead>
							<tr className="border-b border-neutral-800">
								<th className="px-2 py-2 text-left">Tarih</th>
								<th className="px-2 py-2 text-right">Gelir</th>
								<th className="px-2 py-2 text-right">Gider</th>
								<th className="px-2 py-2 text-right">Net</th>
							</tr>
						</thead>
						<tbody>
							{daily.map((r) => (
								<tr key={r.date} className="border-b border-neutral-900">
									<td className="px-2 py-2">{r.date}</td>
									<td className="px-2 py-2 text-right">{formatAmount(r.income)}</td>
									<td className="px-2 py-2 text-right">{formatAmount(r.expense)}</td>
									<td className={`px-2 py-2 text-right ${r.net >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{formatAmount(r.net)}</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<table className="w-full border-collapse text-sm">
						<thead>
							<tr className="border-b border-neutral-800">
								<th className="px-2 py-2 text-left">Ay</th>
								<th className="px-2 py-2 text-right">Gelir</th>
								<th className="px-2 py-2 text-right">Gider</th>
								<th className="px-2 py-2 text-right">Net</th>
							</tr>
						</thead>
						<tbody>
							{monthly.map((r) => (
								<tr key={r.month} className="border-b border-neutral-900">
									<td className="px-2 py-2">{r.month}</td>
									<td className="px-2 py-2 text-right">{formatAmount(r.income)}</td>
									<td className="px-2 py-2 text-right">{formatAmount(r.expense)}</td>
									<td className={`px-2 py-2 text-right ${r.net >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{formatAmount(r.net)}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	)
}
