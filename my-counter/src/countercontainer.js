import react,{useState} from 'react'
import './counter.css'
const Increment = () => {
  const [count, setState] = useState(0);

  return (
    <>
      <p className='counter'>{count}</p>
      <div className='counterActions'>
        <button onClick={()=>{setState(count + 1)}} className='increment'>+</button>
        <button onClick={()=>{setState(0)}} className='reset'>reset</button>
        <button onClick={()=>{setState(count - 1)}} className='decrement'>-</button>
      </div>
    </>
  )
}
export const Card = () => {
  return (
    <div className='card'>
      <h1 className='title'>Counter</h1>
      <Increment></Increment>
    </div>
  )
}