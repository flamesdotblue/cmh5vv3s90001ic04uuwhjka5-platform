import React, { useEffect, useMemo, useState } from 'react'
import { Briefcase, GraduationCap, FileText, Map, Users, TrendingUp, ClipboardList, Plus, Trash2 } from 'lucide-react'

const apps = [
  { key: 'sbs', name: 'Smart Business Suite', icon: Briefcase },
  { key: 'edu', name: 'EduConnect', icon: GraduationCap },
  { key: 'bill', name: 'SmartBill', icon: FileText },
  { key: 'field', name: 'FieldTrack', icon: Map },
]

export function Dashboard() {
  const [active, setActive] = useState('sbs')

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 md:grid-cols-[240px_1fr]">
      <aside className="sticky top-20 h-max space-y-2 rounded-lg border border-[rgba(94,82,64,0.2)] bg-white p-3 shadow-sm dark:border-[rgba(119,124,124,0.3)] dark:bg-[#262828]">
        <div className="mb-2 text-xs font-semibold text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">Services</div>
        {apps.map((a) => (
          <button
            key={a.key}
            onClick={() => setActive(a.key)}
            className={`flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm transition hover:bg-black/5 dark:hover:bg-white/10 ${
              active === a.key ? 'bg-black/5 dark:bg-white/10' : ''
            }`}
          >
            <a.icon className="h-4 w-4 text-[#21808D] dark:text-[#32B8C6]" />
            <span>{a.name}</span>
          </button>
        ))}
      </aside>

      <section className="space-y-4">
        {active === 'sbs' && <SbsModule />}
        {active === 'edu' && <EduModule />}
        {active === 'bill' && <BillModule />}
        {active === 'field' && <FieldModule />}
      </section>
    </div>
  )
}

function Card({ title, children, right }) {
  return (
    <div className="rounded-lg border border-[rgba(94,82,64,0.2)] bg-white p-4 shadow-sm dark:border-[rgba(119,124,124,0.3)] dark:bg-[#262828]">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-semibold">{title}</div>
        {right}
      </div>
      {children}
    </div>
  )
}

function SbsModule() {
  const metrics = [
    { label: 'Monthly Revenue', value: '₹7.8L', icon: TrendingUp },
    { label: 'New Customers', value: '142', icon: Users },
    { label: 'Open Tasks', value: '18', icon: ClipboardList },
  ]

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Call ACME Corp', status: 'Todo' },
    { id: 2, title: 'Prepare quote for Nova', status: 'In Progress' },
    { id: 3, title: 'Follow-up: pending invoice', status: 'Todo' },
  ])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {metrics.map((m, i) => (
          <Card key={i} title={m.label}>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{m.value}</div>
              <m.icon className="h-5 w-5 text-[#21808D] dark:text-[#32B8C6]" />
            </div>
          </Card>
        ))}
      </div>

      <Card title="Tasks">
        <div className="space-y-2">
          {tasks.map((t) => (
            <div key={t.id} className="flex items-center justify-between rounded-md border border-[rgba(94,82,64,0.2)] p-2 text-sm dark:border-[rgba(119,124,124,0.3)]">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${t.status === 'Todo' ? 'bg-orange-500' : 'bg-green-500'}`} />
                {t.title}
              </div>
              <div className="text-xs text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">{t.status}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

function EduModule() {
  const students = [
    { id: 'S001', name: 'Aarav Sharma', attendance: 96 },
    { id: 'S002', name: 'Diya Patel', attendance: 92 },
    { id: 'S003', name: 'Kabir Rao', attendance: 88 },
    { id: 'S004', name: 'Meera Iyer', attendance: 78 },
  ]
  return (
    <div className="space-y-4">
      <Card title="Students">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {students.map((s) => (
            <div key={s.id} className="flex items-center justify-between rounded-md border border-[rgba(94,82,64,0.2)] p-3 text-sm dark:border-[rgba(119,124,124,0.3)]">
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-xs text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">ID: {s.id}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-24 rounded-full bg-black/10 dark:bg-white/10">
                  <div className="h-2 rounded-full bg-[#21808D] dark:bg-[#32B8C6]" style={{ width: `${s.attendance}%` }} />
                </div>
                <div className="text-xs font-medium">{s.attendance}%</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

function BillModule() {
  const [items, setItems] = useState([
    { id: 1, name: 'Notebook A5', qty: 2, price: 120 },
  ])
  const addItem = () => {
    setItems((p) => [...p, { id: Date.now(), name: 'New Item', qty: 1, price: 100 }])
  }
  const removeItem = (id) => setItems((p) => p.filter((i) => i.id !== id))
  const updateItem = (id, field, value) => {
    setItems((p) => p.map((i) => (i.id === id ? { ...i, [field]: value } : i)))
  }

  const subtotal = useMemo(() => items.reduce((sum, i) => sum + Number(i.qty) * Number(i.price), 0), [items])
  const gst = useMemo(() => subtotal * 0.18, [subtotal])
  const total = useMemo(() => subtotal + gst, [subtotal, gst])

  return (
    <div className="space-y-4">
      <Card title="Create Invoice" right={<button onClick={addItem} className="inline-flex items-center gap-1 rounded-md bg-[#21808D] px-2 py-1 text-xs font-medium text-white hover:bg-[#1D7480]"><Plus className="h-3.5 w-3.5" /> Add Item</button>}>
        <div className="space-y-2">
          {items.map((i) => (
            <div key={i.id} className="grid grid-cols-12 items-center gap-2 rounded-md border border-[rgba(94,82,64,0.2)] p-2 text-sm dark:border-[rgba(119,124,124,0.3)]">
              <input
                className="col-span-5 rounded-md bg-transparent px-2 py-1 outline-none"
                value={i.name}
                onChange={(e) => updateItem(i.id, 'name', e.target.value)}
              />
              <input
                className="col-span-2 rounded-md bg-transparent px-2 py-1 text-right outline-none"
                type="number"
                min={1}
                value={i.qty}
                onChange={(e) => updateItem(i.id, 'qty', Number(e.target.value))}
              />
              <input
                className="col-span-3 rounded-md bg-transparent px-2 py-1 text-right outline-none"
                type="number"
                min={0}
                value={i.price}
                onChange={(e) => updateItem(i.id, 'price', Number(e.target.value))}
              />
              <div className="col-span-1 text-right font-medium">₹{(i.qty * i.price).toFixed(2)}</div>
              <button onClick={() => removeItem(i.id)} className="col-span-1 justify-self-end rounded p-1 hover:bg-black/5 dark:hover:bg-white/10">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 gap-1 text-sm sm:ml-auto sm:max-w-xs">
          <div className="flex justify-between"><span className="text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">Subtotal</span><span className="font-medium">₹{subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between"><span className="text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">GST 18%</span><span className="font-medium">₹{gst.toFixed(2)}</span></div>
          <div className="mt-1 flex justify-between border-t border-[rgba(94,82,64,0.2)] pt-2 dark:border-[rgba(119,124,124,0.3)]"><span className="text-[#626C71] dark:text-[rgba(167,169,169,0.7)]">Total</span><span className="text-lg font-bold">₹{total.toFixed(2)}</span></div>
          <button className="mt-2 rounded-md bg-[#21808D] px-4 py-2 text-sm font-medium text-white hover:bg-[#1D7480]">Generate Invoice</button>
        </div>
      </Card>
    </div>
  )
}

function FieldModule() {
  const [points, setPoints] = useState(() => [
    { id: 1, name: 'Rohan', x: 20, y: 30, color: '#21808D' },
    { id: 2, name: 'Sneha', x: 60, y: 55, color: '#A84B2F' },
    { id: 3, name: 'Vikram', x: 35, y: 75, color: '#C0152F' },
  ])

  useEffect(() => {
    const t = setInterval(() => {
      setPoints((prev) => prev.map((p) => {
        const dx = (Math.random() - 0.5) * 6
        const dy = (Math.random() - 0.5) * 6
        return { ...p, x: Math.max(0, Math.min(95, p.x + dx)), y: Math.max(0, Math.min(95, p.y + dy)) }
      }))
    }, 1200)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="space-y-4">
      <Card title="Live Map (Simulation)">
        <div className="relative h-[360px] w-full overflow-hidden rounded-md border border-[rgba(94,82,64,0.2)] bg-[linear-gradient(0deg,transparent_24%,rgba(0,0,0,0.05)_25%,rgba(0,0,0,0.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,0.05)_75%,rgba(0,0,0,0.05)_76%,transparent_77%),linear-gradient(90deg,transparent_24%,rgba(0,0,0,0.05)_25%,rgba(0,0,0,0.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,0.05)_75%,rgba(0,0,0,0.05)_76%,transparent_77%)] bg-[length:40px_40px] dark:border-[rgba(119,124,124,0.3)] dark:[background-image:linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.08)_25%,rgba(255,255,255,0.08)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.08)_75%,rgba(255,255,255,0.08)_76%,transparent_77%),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.08)_25%,rgba(255,255,255,0.08)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.08)_75%,rgba(255,255,255,0.08)_76%,transparent_77%)]">
          {points.map((p) => (
            <div key={p.id} className="absolute -translate-x-1/2 -translate-y-1/2">
              <div
                className="h-3 w-3 animate-pulse rounded-full"
                style={{ left: `${p.x}%`, top: `${p.y}%`, position: 'absolute', backgroundColor: p.color }}
                title={p.name}
              />
              <div className="absolute -translate-x-1/2 translate-y-2 whitespace-nowrap rounded bg-black/60 px-1.5 py-0.5 text-[10px] text-white">
                {p.name}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
