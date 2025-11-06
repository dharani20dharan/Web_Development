import React, {useState, useEffect} from 'react'


// Simple Thermostat (Lab 5) simulation
export default function Thermostat(){
const [temp, setTemp] = useState(22)
const [mode, setMode] = useState('off') // off, heat, cool, eco
const [target, setTarget] = useState(22)


useEffect(()=>{
const id = setInterval(()=>{
setTemp(t => {
let outside = 20
if(mode === 'heat' && t < target) return Math.min(t+0.2, target)
if(mode === 'cool' && t > target) return Math.max(t-0.2, target)
if(t > outside) return t - 0.02
if(t < outside) return t + 0.02
return t
})
}, 500)
return ()=>clearInterval(id)
},[mode,target])


return (
<div className="card">
<h2>Thermostat — Lab 5</h2>
<div className="flexRow" style={{alignItems:'center',marginTop:12}}>
<div>
<div className="label">Current temperature</div>
<div className="value" style={{fontSize:40}}>{temp.toFixed(1)}°C</div>
</div>
<div style={{marginLeft:24}}>
<div className="label">Target</div>
<input type="range" min="10" max="30" value={target} onChange={e=>setTarget(Number(e.target.value))} />
<div className="value">{target}°C</div>
</div>
<div style={{marginLeft:24}}>
<div className="label">Mode</div>
<div className="controls">
<button className="button small" onClick={()=>setMode('off')}>Off</button>
<button className="button small" onClick={()=>setMode('heat')}>Heat</button>
<button className="button small" onClick={()=>setMode('cool')}>Cool</button>
<button className="button small" onClick={()=>setMode('eco')}>Eco</button>
</div>
<div style={{marginTop:8}} className="label">Active: <span className="value">{mode}</span></div>
</div>
</div>


<div className="field">
<div className="label">Lab notes</div>
<div className="value">This thermostat simulates heating/cooling by nudging temperature towards the target. Use the slider to change the target temperature and the buttons to switch modes. In a real lab you'd connect sensors and actuators.</div>
</div>
</div>
)
}