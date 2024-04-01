import React from 'react'
import '../App.css'

const Pointers = () => {
    return (
        <>

            <div className='avengers'  >
                <img  src="https://www.freepnglogos.com/uploads/avengers-png-logo/avengers-logo-png-transparent-avengers-logo-images-7.png" alt="avengers" className=' sp' />
                <h1 className='text-center' ><span>Avengers Craft</span></h1>

                <br /><br />

                <main className="d-flex flex-column justify-content-center">

                    <div className="d-flex  flex-column justify-content-between ">

                        <b className="btn SPIDER-MAN bts my-3" >SPIDER-MAN</b>
                        <b className="btn IRON-MAN bts my-3" >IRON-MAN</b>
                        <b className="btn IRON-MAN-2 bts my-3" >IRON-MAN-2</b>


                        <b className="btn IRON-MAN-3 bts my-3" >IRON-MAN-3</b>
                        <b className="btn STAN bts my-3" >STAN LEE</b>


                    </div>
                    <div className="d-flex  flex-column justify-content-between ">

                        <b className="btn HULK bts my-3" >HULK</b>


                        <b className="btn NICK bts my-3" >NICK F.</b>
                        <b className="btn HAWKEYE bts my-3" >HAWKEYE</b>
                        <b className="btn CAPTAIN bts my-3" >CAPTAIN</b>
                        <b className="btn THOR bts my-3" >THOR</b>




                    </div>
                    <div className="d-flex  flex-column justify-content-between ">

                        <b className="btn LOKI bts my-3" >LOKI</b>
                        <b className="btn VISION bts my-3" >VISION</b>
                        <b className="btn DEADPOOL bts my-3" >DEADPOOL</b>


                        <b className="btn Cap bts my-3" >3d Cap.</b>
                        <b className="btn Thor bts my-3" >3d Thor</b>




                    </div>
                    

                </main>
            </div>

        </>
    )
}

export default Pointers
