import React from 'react'

function User(props) {
    const { details } = props

    if (!details) {
      return <h3>Working fetching your friend&apos;s details...</h3>
    }

    return (
        <div>
            <p>Hello</p>
            <h2>{details.name}</h2>
            <p>{details.age}</p>
            <p>{details.email}</p>
            <p>{details.cellNumber}</p>
            <p>{details.unit}</p>
        </div>
    )
}

export default User
