import React from 'react'


export default function Home(){
return (
<div className="card">
<div className="headerRow">
<img className="avatar" src="https://placehold.co/200x200?text=D" alt="profile"/>
<div>
<h2 style={{margin:0}}>Dharanidharan M</h2>
<div className="contactRow" style={{marginTop:8}}>
<div className="value">dharani080905@gmail.com | +91 82201 09333</div>
<div className="value">
<a className="link" href="https://linkedin.com/in/Dharani">linkedin.com/in/Dharani</a> •
<a className="link" href="https://github.com/dharani20dharan" style={{marginLeft:8}}>github.com/dharani20dharan</a>
</div>
</div>
</div>
</div>


<div className="field">
<div className="label">Profile Summary</div>
<div className="value">Undergraduate in Artificial Intelligence and Data Science with experience in applying Machine Learning and Data Analytics to solve practical problems. Skilled in handling large datasets, developing scalable solutions, and leveraging full-stack development to support data-driven applications. Strong foundation in algorithms, databases, and cloud technologies, with a keen interest in building reliable systems that deliver measurable impact.</div>
</div>
</div>
)
}