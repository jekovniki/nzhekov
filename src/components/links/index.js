import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

const LinkComponent = ({name, href}) => {
    return (
        <li>
            <Link to={href}>{ name }</Link>
        </li>
    )
}

export default LinkComponent