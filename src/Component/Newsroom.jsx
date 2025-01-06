// import React from 'react'

// export default function Newsroom() {
//     return (
//         <div style={{ background: "#000" }}>
//             <div className="container-fluid " style={{ background: "#000" }}>
//                 <div className="row">
//                     <div className="col-6 p-5 mt-5">
//                         <p className='fs-1 text-warning'>Latest updates & <br />
//                             developments from <br />
//                             Meesho's newsroom</p> <br />
//                     </div>
//                     <div className="col-6">
//                         <video style={{ width: "60%" }} src="https://www.meesho.io/img/news/news-banner.mp4" autoPlay loop ></video>
//                     </div>
//                 </div>
//                 <p className='fs-1  text-white'>Latest</p>
//             </div>

//             <div className="container text-white">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <img src="https://admin.meesho.io/content/images/2023/10/resett.png" alt="" />
//                     </div>

//                     <div className="col-md-6">
//                         <p className='fs-1 text-white'>Meesho Continues to Invest in <br /> Employee Wellness: <br /> Announces Third Consecutive <br />Company-Wide Reset <br /> & Recharge  Break</p>
//                     </div>

//                 </div>
//             </div>

//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-4">
//                        <img src="https://admin.meesho.io/content/images/2023/10/V6.png" alt="" />
//                        <p className='fs-1 text-white'>Meesho Witnesses Record 1.6 <br /> Crore New App Installs During <br /> the Mega Blockbuster Sale <br />, Categories like Footwear and <br /> Kidswear see ~120% Growth</p>

//                     </div>
//                     <div className="col-md-4">
//                          <img src="https://admin.meesho.io/content/images/2023/10/cover-for-pre-festive-sales-record.png" alt="" />
//                          <p className='fs-1 text-white'>Meesho records nearly 1 crore <br /> orders during pre-festive sale <br /> events, expects over 3X <br /> growth during the upcoming <br /> festive season</p>
//                     </div>
//                     <div className="col-md-4">
//                           <img src="https://admin.meesho.io/content/images/2023/10/non-gst-seller-registration.png" alt="" />

//                           <p  className='fs-1 text-white'>Meesho Makes Platform Non- <br />
//                             GST Inclusive, Enabling <br /> Millions of New Sellers to <br /> Come Online</p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }
import React from 'react'

export default function Newsroom() {
    return (
        <div style={{ background: "#000" }}>
            {/* Header Section */}
            <div className="container-fluid text-white py-5">
                <div className="row align-items-center">
                    <div className="col-md-6 text-warning">
                        <h1 className='display-4 mb-4'>
                            Latest updates & <br />
                            developments from <br />
                            Meesho's newsroom
                        </h1>
                    </div>
                    <div className="col-md-6 text-center">
                        <video className="img-fluid" src="https://www.meesho.io/img/news/news-banner.mp4" autoPlay loop muted style={{ width: "80%" }}></video>
                    </div>
                </div>
            </div>

            {/* Latest News Section */}
            <div className="container text-white my-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img src="https://admin.meesho.io/content/images/2023/10/resett.png" className="img-fluid rounded" alt="Meesho Reset" />
                    </div>
                    <div className="col-md-6">
                        <h2 className='fs-1'>Meesho Continues to Invest in <br /> Employee Wellness</h2>
                        <p className='lead'>
                            Announces Third Consecutive Company-Wide Reset & Recharge Break.
                        </p>
                    </div>
                </div>
            </div>

            {/* News Cards Section */}
            <div className="container">
                <div className="row text-white">
                    <div className="col-md-4 mb-4">
                        <div className="">
                            <img src="https://admin.meesho.io/content/images/2023/10/V6.png" className="card-img-top" alt="Mega Sale" />
                            <div className="card-body">
                                <h4 className="card-title text-white">Meesho Witnesses Record 1.6 Crore New App Installs</h4>
                                <p className="card-text">
                                    Categories like Footwear and Kidswear see ~120% Growth during the Mega Blockbuster Sale.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="">
                            <img src="https://admin.meesho.io/content/images/2023/10/cover-for-pre-festive-sales-record.png" className="card-img-top" alt="Pre-Festive Sale" />
                            <div className="card-body">
                                <h4 className="card-title  text-white">Meesho Records Nearly 1 Crore Orders</h4>
                                <p className="card-text">
                                    During pre-festive sale events, Meesho expects over 3X growth during the upcoming festive season.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="">
                            <img src="https://admin.meesho.io/content/images/2023/10/non-gst-seller-registration.png" className="card-img-top" alt="Non-GST Sellers" />
                            <div className="card-body">
                                <h4 className="card-title  text-white">Meesho Makes Platform Non-GST Inclusive</h4>
                                <p className="card-text">
                                    Enabling millions of new sellers to come online without GST requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
