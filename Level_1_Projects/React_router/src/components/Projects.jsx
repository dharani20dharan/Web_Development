import React from 'react'


export default function Projects(){
const projects = [
{
title:'Shiv Nadar University Photography Gallery Website',
repo:'https://github.com/dharani20dharan/Capturesque',
desc:'Designed and deployed a full-stack photography gallery platform used by 2000+ students. Integrating facial recognition to automate tagging and improve photo retrieval.',
tools:'React, Flask, MySQL, Face Recognition, CNN, Cloud Services'
},
{
title:'Project Nedl — US Real Estate Dataset',
repo:'https://github.com/dharani20dharan/Nedl',
desc:'Developed predictive models using large-scale U.S. housing data to assist clients in property decisions. Preprocessing and feature engineering for real estate analytics.',
tools:'Python, MySQL, PostgreSQL'
},
{
title:'ML/DS Mini-projects Collection',
repo:'',
desc:'Multiple experiments across supervised, unsupervised and deep learning (Regression, SVM, KNN, K-Means, GMM, CNN, RNN). Conducted EDA, feature engineering, and model optimization on Kaggle datasets.',
tools:'scikit-learn, TensorFlow, PyTorch, Python'
}
]


return (
<div className="card">
<h2>Projects</h2>
{projects.map(p=> (
<div key={p.title} style={{marginTop:12}}>
<div className="label">{p.title} {p.repo ? <a className="link" href={p.repo} style={{marginLeft:8}}>(repo)</a> : null}</div>
<div className="value">{p.desc}</div>
<div className="label" style={{marginTop:6}}>Tools Used</div>
<div className="value">{p.tools}</div>
</div>
))}
</div>
)
}