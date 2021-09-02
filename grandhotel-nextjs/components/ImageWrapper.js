import React from 'react'
import Image from 'next/image'

const ImageWrapper = (props) =>{
    return(<div className={props.classStyles}>
        <Image src={props.srcImage} layout={props.layout} width={} />
    </div>)
}