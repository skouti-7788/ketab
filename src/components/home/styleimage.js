import { useSelector } from 'react-redux'
import '../../css/styleimage.css'
import { useEffect, useState } from 'react'

export default function StyleImage() {
    const livres = useSelector((state) => state.cards.livres)
    const books = [...livres]
    const sortlivrews = books
        .sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
        .slice(0, 6)
    const newimage = sortlivrews.map((b) => b.image)

    function getPattern(step, n = 5) {
        return Array.from({ length: n }, (_, i) => {
            return ((step + i) % n) + 1
        }).reverse()
    }

    const [step, setStep] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 5)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    if (newimage.length === 0) return null

    const order = getPattern(step, 5)

    const getClass = (i) => {
        if (i === 2) return 'center-img'
        if (i === 1 || i === 3) return 'near-img'
        if (i === 0 || i === 4) return 'edge-img'
        return ''
    }

    return (
        <div className="styleimage" id="accueil">
            {order.map((pos, i) => (
                <img
                    key={`${pos}-${step}`}
                    src={newimage[pos - 1]}
                    alt="livre"
                    className={getClass(i)}
                />
            ))}
        </div>
    )
}