import abouts from './about.module.css'

function About() {
  return (
    <>
    
    <div className={abouts.contact}>
    <div className="container ">
    <div className="row mt-5">
      <div className="col-9 mx-auto">
      <div className="d-flex justify-content-between     p-4">
     
        <div className={`col-md-4 offset-md-4 ms-5 p-3`}>
           
              <h4 className="text-start fs-5 text-capitalize">let me tell us about me </h4>
              <h5 className="text-capitalize ">
             
              full stack 
            
              <span className="text-capitalize ms-2">
              developer 
              </span>
                 
              </h5>
             <p  className="fst-normal">
              I'm Nader Chargui full stack deve
             </p>
             
        
        </div>

        <div  className={`col-md-4  p-3`}>
        <h4 className="text-start text-capitalize">education</h4>
        </div>
      </div>
      </div>
    
    </div>
</div>
    </div>
    
    
    
    </>
  )
}

export default About