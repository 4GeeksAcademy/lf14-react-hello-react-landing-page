import React from 'react'

const Jumbotron = () => {
  return (
    <div className='container bg-dark-subtle bg-gradient rounded p-4 text-start'>
        <h1>A Warm Welcome!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend ac purus in gravida. 
          Quisque mollis, mauris sed sagittis aliquet, leo risus sodales tellus, at luctus odio sem eget sem. 
          Etiam mattis finibus dolor, sit amet auctor magna gravida a. Sed mi neque, dictum vel vehicula quis, consectetur id purus.</p>
        <button className='btn btn-primary '>Call to action!</button>
    </div>
  )
}

export default Jumbotron