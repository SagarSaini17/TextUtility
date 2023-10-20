import React from 'react'

export default function Testimonial(props) {
    // const divstyle = {
    //     width: "100%",
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // }
    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
        maxWidth:'99%',
    }
    return (
        <div className='container' >
                <div className="card mb-3" style={myStyle} >
                    <div className="row g-0" >
                        <div className="col-md-4 order-md-0" >
                            <img src="logo512.png" className="img-fluid rounded-start" alt="logo512.png" />
                        </div>
                        <div className="col-md-8" >
                            <div className="card-body" >
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className="card mb-3" style={myStyle} >
                <div className="row g-0">
                    <div className="col-md-4 order-md-1">
                        <img src="logo512.png" className="img-fluid rounded-start" alt="logo512.png" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3" style={myStyle}>
                <div className="row g-0">
                    <div className="col-md-4 order-md-0">
                        <img src="logo512.png" className="img-fluid rounded-start" alt="logo512.png" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
