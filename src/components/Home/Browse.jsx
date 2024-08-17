import React from "react";

const Browse = () => {
  return (
    <section className=" py-14">
      <div className="conatiner">
        <div className=" pb-16">
          <h2 className="title text-center">Browse The Range</h2>
          <p className="details text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className=" flex gap-5 justify-center items-center">
          <div>
            <img src="/dining.png" alt="dining" />  
              <p className=" text-2xl font-primary font-semibold text-primary text-center mt-8">Dining</p>
          </div>
          <div>
            <img src="/living.png" alt="living" /> 
            <p className=" text-2xl font-primary font-semibold text-primary text-center mt-8">Living</p>
          </div>
          <div>
            <img src="/bedroom.png" alt="bedroom" /> 
             <p className=" text-2xl font-primary font-semibold text-primary text-center mt-8">Bedroom</p>
          </div>
        </div>   
      </div> 
    </section>
  );
};

export default Browse;
