import React from 'react'


export default function Skills(){
const skills = ['Python','JavaScript','React','Node.js','SQL','MySQL','PostgreSQL','PyTorch','TensorFlow','scikit-learn','Machine Learning','Deep Learning','Data Visualization','Git','Cloud Basics']
return (
<div className="card">
<h2>Skills</h2>
<div className="flexRow" style={{flexWrap:'wrap',marginTop:8}}>
{skills.map(s=> <div key={s} className="value" style={{padding:'6px 10px',background:'rgba(255,255,255,0.02)',borderRadius:8,margin:'6px 6px 0 0'}}>{s}</div>)}
</div>
</div>
)
}