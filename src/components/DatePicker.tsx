'use client'

import { useState, useMemo } from 'react'

interface DatePickerProps {
  selectedDate: string
  onChange: (date: string) => void
  label?: string
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function DatePicker({ selectedDate, onChange, label }: DatePickerProps) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())

  const calendarDays = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1)
    // getDay(): 0=Sun, convert to Mon-start: (day + 6) % 7
    const startOffset = (firstDay.getDay() + 6) % 7
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()

    const days: Array<{ date: Date; inMonth: boolean }> = []

    // Previous month padding
    for (let i = startOffset - 1; i >= 0; i--) {
      const d = new Date(viewYear, viewMonth, -i)
      days.push({ date: d, inMonth: false })
    }

    // Current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: new Date(viewYear, viewMonth, i), inMonth: true })
    }

    // Next month padding to fill 6 rows max
    const remaining = 7 - (days.length % 7)
    if (remaining < 7) {
      for (let i = 1; i <= remaining; i++) {
        days.push({ date: new Date(viewYear, viewMonth + 1, i), inMonth: false })
      }
    }

    return days
  }, [viewYear, viewMonth])

  function isDisabled(date: Date) {
    // Past dates
    if (date < today) return true
    // Sundays (day === 0)
    if (date.getDay() === 0) return true
    return false
  }

  function isSelected(date: Date) {
    if (!selectedDate) return false
    const sel = new Date(selectedDate + 'T00:00:00')
    return (
      date.getFullYear() === sel.getFullYear() &&
      date.getMonth() === sel.getMonth() &&
      date.getDate() === sel.getDate()
    )
  }

  function isToday(date: Date) {
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    )
  }

  function handleSelect(date: Date) {
    if (isDisabled(date)) return
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    onChange(`${yyyy}-${mm}-${dd}`)
  }

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear(viewYear - 1)
    } else {
      setViewMonth(viewMonth - 1)
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear(viewYear + 1)
    } else {
      setViewMonth(viewMonth + 1)
    }
  }

  const canGoPrev = viewYear > today.getFullYear() || viewMonth > today.getMonth() || viewYear > today.getFullYear()

  return (
    <div>
      {label && (
        <label className="text-sm font-semibold text-dark-crust mb-1.5 block">{label}</label>
      )}
      <div className="bg-white border-2 border-blush rounded-2xl p-4 select-none">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={prevMonth}
            disabled={!canGoPrev}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-cream transition-colors bg-transparent border-none cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous month"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <span className="font-serif text-lg text-dark-crust font-semibold">
            {MONTH_NAMES[viewMonth]} {viewYear}
          </span>
          <button
            type="button"
            onClick={nextMonth}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-cream transition-colors bg-transparent border-none cursor-pointer"
            aria-label="Next month"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        {/* Day labels */}
        <div className="grid grid-cols-7 mb-1">
          {DAY_LABELS.map(d => (
            <div key={d} className="text-center text-xs font-semibold text-[#6B6560] py-1">
              {d}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-0.5">
          {calendarDays.map(({ date, inMonth }, i) => {
            const disabled = isDisabled(date) || !inMonth
            const selected = isSelected(date) && inMonth
            const todayMark = isToday(date) && inMonth

            return (
              <button
                key={i}
                type="button"
                onClick={() => inMonth && handleSelect(date)}
                disabled={disabled}
                className={`
                  w-full aspect-square flex items-center justify-center rounded-xl text-sm transition-all border-none
                  ${!inMonth ? 'text-gray-200 cursor-default bg-transparent' : ''}
                  ${inMonth && disabled ? 'text-gray-300 cursor-not-allowed bg-transparent line-through' : ''}
                  ${inMonth && !disabled && !selected ? 'text-charcoal cursor-pointer bg-transparent hover:bg-wheat/15 hover:text-dark-crust' : ''}
                  ${selected ? 'bg-wheat text-white font-semibold cursor-pointer shadow-md' : ''}
                  ${todayMark && !selected ? 'ring-2 ring-wheat/50 font-semibold' : ''}
                `}
              >
                {date.getDate()}
              </button>
            )
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-blush/50">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-wheat" />
            <span className="text-xs text-[#6B6560]">Selected</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full ring-2 ring-wheat/50 bg-white" />
            <span className="text-xs text-[#6B6560]">Today</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-gray-200" />
            <span className="text-xs text-[#6B6560]">Unavailable</span>
          </div>
        </div>
      </div>
    </div>
  )
}
