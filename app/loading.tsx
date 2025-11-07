import React from 'react'


export default function Loading() {
    return (
        <>
            <div className={`preloader`}>
                <div className={`spinner`}>
                    <span className={`spinner-rotate`}></span>
                </div>
            </div>
        </>
    )
}

