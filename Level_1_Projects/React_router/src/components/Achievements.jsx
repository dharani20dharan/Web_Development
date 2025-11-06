import React from 'react'


export default function Achievements(){
const certLink = 'https://example.com/certificates'
return (
<div className="card">
<h2>Achievements & Certificates</h2>
<ul style={{marginTop:8}}>
<li><strong>NPTEL</strong> — Introduction to LLM</li>
<li><strong>Google</strong> — GenAI Exchange Program</li>
<li><strong>Guvi / Great Learning</strong> — AI-DS Certificates</li>
<li><a className="link" href={certLink}>Dharanidharan — Certificates (Link)</a></li>
</ul>
</div>
)
}

