import React from 'react'
import PropTypes from 'prop-types'
// import api from '../api'

const UserPage = ({userId}) => {
    // const [user, setUser] = useState
    return <h1>UserPage {userId}</h1>
}

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
}

export default UserPage
