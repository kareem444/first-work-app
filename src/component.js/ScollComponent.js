import React from 'react'

export default function ScollComponent({children}) {
    return (
        <div style={{border:'1px solid black' , overflow:'scroll' , height:780 ,}}>
            {children}
        </div>
    )
}
