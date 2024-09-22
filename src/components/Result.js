import './Result.css'

export default function Result({winner,reset}) {
  return (
    <div className="result">
      {winner === 'CROSS' && <p><span style={{color:'red',fontWeight:'bold'}}> قرمز </span>برنده شد</p>}
      {winner === 'CIRCLE' && <p><span style={{color:'blue',fontWeight:'bold'}}> آبی </span>برنده شد</p>}
      {winner === 'tie' && <p>هیچ بازیکنی برنده نشد</p>}
      <button onClick={reset} className='reset'>بازی جدید</button>
    </div>
  )
}