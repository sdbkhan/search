import React from 'react'

const Gresult = (props) => {

    const Img=`https://source.unsplash.com/600x400/?${props.name}`;
    return (
        <>
            <div >
                <img src={Img} alt="search"/>
            </div>
        </>
    )
}
export default Gresult;