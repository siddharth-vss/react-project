import React from 'react'
import '../App.css'

const Pointers = () => {
    return (
        <>

            <div className='avengers'  >
                <h1 className='text-center' >Avengers Craft</h1>

                <br /><br />

                <main className="d-flex flex-column justify-content-center">

                    <div className="d-flex justify-content-between my-5">

                        <b className="btn SPIDER-MAN bts mx-5" >SPIDER-MAN</b>
                        <b className="btn IRON-MAN bts mx-5" >IRON-MAN</b>
                        <b className="btn IRON-MAN-2 bts mx-5" >IRON-MAN-2</b>


                        <b className="btn IRON-MAN-3 bts mx-5" >IRON-MAN-3</b>
                        <b className="btn STAN bts mx-5" >STAN LEE</b>


                    </div>
                    <div className="d-flex justify-content-between my-5">

                        <b className="btn HULK bts mx-5" >HULK</b>


                        <b className="btn NICK bts mx-5" >NICK F.</b>
                        <b className="btn HAWKEYE bts mx-5" >HAWKEYE</b>
                        <b className="btn CAPTAIN bts mx-5" >CAPTAIN</b>
                        <b className="btn THOR bts mx-5" >THOR</b>




                    </div>
                    <div className="d-flex justify-content-between my-5">

                        <b className="btn LOKI bts mx-5" >LOKI</b>
                        <b className="btn VISION bts mx-5" >VISION</b>
                        <b className="btn DEADPOOL bts mx-5" >DEADPOOL</b>


                        <b className="btn Cap bts mx-5" >3d Cap.</b>
                        <b className="btn Thor bts mx-5" >3d Thor</b>




                    </div>
                    

                </main>
            </div>

        </>
    )
}

export default Pointers
