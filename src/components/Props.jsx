import React from 'react'

const Props = (props) => {

    const {name , age , password} = props

    return (
    <div>
        <p style={{color: "red" , fontWeight: "600" , fontSize: "20px"}}>Это пример работы props</p>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        <p>{props.password}</p>
    </div>
  )
}

Props.defaultProps = {name: 'Rusya' , age: 15 , password: "Rusya07"}

export default Props