import React from 'react'
import Link from '../links'

const MenuLinks = ({links}) => {
    return (
        <nav>
            {
                links.map(({title, link}) => <Link href={link} name={title}/>) 
            }
        </nav>
    )
}

export default MenuLinks