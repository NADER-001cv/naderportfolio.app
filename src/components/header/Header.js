import React from 'react'
import headers from './header.module.css'
import TypeWriter from './TypeWriter'
function Header() {
  return (
    <>
        <div className={headers.header}>
        <div className="container text-white">
        <div className="row mt-5">
          <div className="col-9 mx-auto">
          <div className={`d-flex justify-content-between  align-items-center  p-4  ${headers.headersm}`}>
          <div className={` col-md-5 col-sm-6  ${headers.img_attachment}`}>
          <img  src="https://media-exp1.licdn.com/dms/image/C4D03AQFiyw48TG1fzw/profile-displayphoto-shrink_400_400/0/1595065667506?e=1672876800&v=beta&t=Onyvji2DtHCo3G1SFFjp6FfNGJK9xJIH5q1LEPOvxHY" alt="naderimage" className='w-75 h-75 rounded-circle' />
         
          
          </div>
          <div className="col-md-5 col-sm-6 d-flex justify-content-center align-items-center  ">

          
          <h3>
        <span>
        I' m Nader Chargui  {  `   `}
        </span>
       <span style={{ color:"red" }}>
       <TypeWriter/>
       </span>
        <cursor/>
          </h3>
          </div>
          
          </div>
          </div>
        
        </div>
    </div>
        </div>
    
    
    </>
  )
}

export default Header