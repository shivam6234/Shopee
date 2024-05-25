import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
  return (
    <>

      <div className='d-md-none d-lg-none d-block'>
        <div id="carouselExampleInterval2" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner ">
            <div class="carousel-item active first-sm " data-bs-interval="3000">
              <div className='d-flex ' style={{height:'100%',alignItems:'center'}}>
                <span className='ms-4 text-center'>
                  <h3 className='ms-5 text-white ' style={{textTransform:'uppercase'}}>You're Looking Good
                    <br />
                    New Lookbook
                  </h3>
                  <button type="button" class="btn btn-outline-danger text-white ms-5 "><Link to='/men' className='text-white text-decoration-none'> Discover More</Link></button>
                </span>
              </div>
            </div>

            <div class="carousel-item second-sm" data-bs-interval="3000">
            <div className='d-flex justify-content-center' style={{height:'100%',alignItems:'center'}}>
                <span className=' text-center'>
                  <h3 className=' text-white'>DON'T MISS
                    <br />
                    MYSRETY DEALS

                  </h3>
                  <button type="button" class="btn btn-outline-dark text-white  px-3"><Link to='/women' className='text-white text-decoration-none'> Discover More</Link></button>
                </span>
              </div>
            </div>
            <div class="carousel-item third-sm" data-bs-interval="3000">
            <div className='d-flex justify-content-center' style={{height:'100%',alignItems:'center'}}>
                <span className=' text-center'>
                  <h3 className=' text-dark'>
                  KID'Z SECTION
                  </h3>
                  <button type="button" class="btn btn-outline-warning text-white  px-3"><Link to='/kids' className='text-dark text-decoration-none'> Discover More</Link></button>
                </span>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev  rounded-circle my-auto bg-dark text-dark ms-2 me-2" style={{ height: '10%', width: "5%" }} type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
            <span class="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next  rounded-circle my-auto bg-dark text-dark ms-2 me-2" style={{ height: '10%', width: "5%" }} type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
            <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='d-md-block d-lg-none d-none'>
        <div id="carouselExampleInterval1" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner ">
            <div class="carousel-item active first-md" data-bs-interval="3000" style={{textTransform:'uppercase'}}>
              <div className='d-flex ' style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <span className='ms-4 text-center'>
                  <h3 className='ms-5  text-white ' style={{ fontSize: '80px' }}>You're Looking Good
                    <br />
                    New Lookbook
                  </h3>
                  <button type="button" class="btn btn-outline-danger text-dark ms-5  px-5"><Link to='/men' className='text-white text-decoration-none'> Discover More</Link></button>
                </span>
              </div>
            </div>

            <div class="carousel-item second-md" data-bs-interval="3000">
              <div className='d-flex ' style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <span className='ms-4 text-center'>
                  <h3 className='ms-5  text-white' style={{ fontSize: '80px' }}>DON'T MISS
                    <br />
                    MYSRETY DEALS
                  </h3>
                  <button type="button" class="btn btn-outline-danger text-dark ms-5  px-5"><Link to='/women ' className='text-white text-decoration-none'> Discover More</Link></button>
                </span>
              </div>
            </div>
            <div class="carousel-item third-md"data-bs-interval="3000">
              <div className='d-flex ' style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <span className='ms-4 text-center'>
                  <h3 className='ms-5  text-dark' style={{ fontSize: '80px' }}>
                    Kid,z Section
                    <br />
                    New Lookbook
                  </h3>
                  <button type="button" class="btn btn-outline-warning text-white ms-5  px-5"><Link to='/kids' className='text-dark text-decoration-none'> Discover More</Link></button>
                </span>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev  rounded-circle my-auto bg-dark  text-dark ms-2 me-2" style={{ height: '10%', width: "5%" }} type="button" data-bs-target="#carouselExampleInterval1" data-bs-slide="prev">
            <span class="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next  rounded-circle my-auto bg-dark text-dark ms-2 me-2" style={{ height: '10%', width: "5%" }} type="button" data-bs-target="#carouselExampleInterval1" data-bs-slide="next">
            <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='d-lg-block d-none '>
        <div id="carouselExampleInterval3" class="carousel slide" data-bs-ride="carousel">

          <div class="carousel-inner ">
            
            <div class="carousel-item active first-lg d-flex "data-bs-interval="3000" style={{ justifyContent: 'center', alignItems: 'center' }}>
              <span className='ms-4 text-center  ' >
                <h1 className=' text-white ' style={{textTransform:'uppercase'}}>You're Looking Good
                  <br />
                  <span className='text-black' style={{ fontSize: '150px' }}>
                    New Lookbook
                  </span>
                </h1>
                <br />
                <button type="button" class="btn btn-outline-danger text-white ms-5  px-5"><Link to='/men' className='text-dark text-decoration-none fw-bold text-white'> Discover More</Link></button>
              </span>
            </div>

            <div class="carousel-item second-lg " data-bs-interval="3000">
       
              <div className='d-flex' style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                <span className='ms-4 text-center pt-5' >

                  <h1 className=' text-white mt-5 ' style={{ fontSize: '5vw' }}>DON'T MISS
                    <br />
                    <span className='text-black' style={{ fontSize: '10vw' }}>
                      MYSRETY DEALS
                    </span>
                  </h1>

                  <br />

                  <button type="button" class="btn btn-outline-danger text-white ms-5  px-5"><Link to='/women' className='text-white text-decoration-none fw-bold'> Discover More</Link></button>

                </span>
              </div>
            </div>
            <div class="carousel-item third-lg" data-bs-interval="3000">
       
              <div className='d-flex' style={{justifyContent:'center',alignContent:'center'}}data-bs-interval="3000" >

                <span className='ms-4 text-center pt-5' >


                  <h1 className=' text-black  mt-5 ' style={{ fontSize: '5vw' }}>
                    <br />
                    <span className='mt-5' style={{ fontSize: '10vw' }}>
                      KID'Z SECTION
                    </span>
                  </h1>

                  <br />

                
                  <button type="button" class="btn btn-outline-danger text-white ms-5  px-5"><Link to='/kids' className='text-white fw-bold text-decoration-none'> Discover More</Link></button>

                </span>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev  rounded-circle my-auto bg-dark text-dark ms-2 me-2" style={{ height: '10%', width: "5%" }} type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="prev">
            <span class="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next  rounded-circle my-auto bg-dark text-dark ms-2 me-2" style={{ height: '10%', width: "5%" }} type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="next">
            <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
     


    </>
  )
}

export default Slider
