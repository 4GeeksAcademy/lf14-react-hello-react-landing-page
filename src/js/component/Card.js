import React from 'react'


const Card = ({title,description}) => {
  return (
    <div className="card" style={{width:"18rem;"}}>
  <img src= {"https://designmodo.com/wp-content/uploads/2021/03/bootstrap-5-layout.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default Card