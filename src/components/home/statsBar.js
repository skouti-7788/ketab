import { useEffect, useRef } from 'react'
import '../../css/statsbar.css'

const stats = [
    { icon: '📚', target: 1200, label: 'Livres disponibles' },
    { icon: '👥', target: 850,  label: 'Lecteurs actifs' },
    { icon: '⭐', target: 3400, label: 'Avis laissés' },
    { icon: '📥', target: 5000, label: 'Téléchargements' },
]

function formatNumber(value, target) {
    if (target >= 1000) return '+' + (value / 1000).toFixed(1) + 'k'
    return '+' + value
}

export default function StatsBar() {
    const refs = useRef([])

    useEffect(() => {
        const duration = 1800

        refs.current.forEach((el, i) => {
            if (!el) return
            const target = stats[i].target
            const start = performance.now()

            const update = (now) => {
                const progress = Math.min((now - start) / duration, 1)
                const ease = 1 - Math.pow(1 - progress, 3)
                const value = Math.round(ease * target)
                el.textContent = formatNumber(value, target)
                if (progress < 1) requestAnimationFrame(update)
            }

            setTimeout(() => requestAnimationFrame(update), i * 100 + 300)
        })
    }, [])

    return (
        <div className="stats-bar">
            {stats.map((stat, i) => (
                <div className="stat-item" key={i} style={{ animationDelay: `${i * 0.1 + 0.1}s` }}>
                    {/* <span className="stat-icon">{stat.icon}</span> */}
                    <span
                        className="stat-number"
                        ref={(el) => (refs.current[i] = el)}
                    >
                        +0
                    </span>
                    <span className="stat-label">{stat.label}</span>
                </div>
            ))}
        </div>
    )
}