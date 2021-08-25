import React, {useState} from 'react'
import Counters from './components/counters'
import Navbar from "./components/navBar"

const App = () => {
    const initialState = [
        {value: 0, id: 1, name: 'Ложка'},
        {value: 1, id: 2, name: 'Вилка'},
        {value: 2, id: 3, name: 'тарелка'}
    ]
    const [counters, setCounters] = useState(initialState)

    const handleDelete = counterId => {
        const newCounters = counters.filter(c => c.id !== counterId)
        setCounters(newCounters)
    }
    const handleIncrement = counterId => {
        const newCounters = [...counters]
        const elementIndex = newCounters.findIndex(c => c.id === counterId)
        newCounters[elementIndex].value++
        setCounters(newCounters)
    }

    const handleDecrement = counterId => {
        const newCounters = [...counters]
        const elementIndex = newCounters.findIndex(c => c.id === counterId)
        newCounters[elementIndex].value--
        setCounters(newCounters)
    }

    const handleReset = () => setCounters(initialState)

    return (
        <div className="col-lg-8 mx-auto p-3 py-md-5">
            <main>
                <Navbar totalItems ={counters.reduce((a,c) => a + c.value, 0)}/>
                <Counters
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onReset={handleReset}
                onDelete={handleDelete}
                counters={counters}
                />
            </main>
        </div>
    )
}

export default App