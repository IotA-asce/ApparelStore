import React from 'react'

function NewArrivals() {
  return (
    <div className='newArrivals'          style={{ display: "flex", flexDirection: "column", width: "100vw", marginTop: "8em", justifyContent: "center", alignItems: "center" }} >
      <div className='newArriavalsHeader' style={{ width: "90%", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "1em", borderBottom: "0.3em solid gray" }} >
        NEW ARRIVALS
      </div>
      <div className='arrivalsCards'      style={{ display: "flex", width: "80vw", overflowX: "scroll", marginTop: "5em" }} >
        <ArrivalsCard />
        <ArrivalsCard />
        <ArrivalsCard />
        <ArrivalsCard />
        <ArrivalsCard />
        <ArrivalsCard />
      </div>
    </div>
  )
}

const ArrivalsCard = () => {
  return (
    <div className='arrivalsCard'     style={{ width: "22vw", minWidth: "20em", aspectRatio: "0.7", overflowX: "hidden", margin: "1em", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: "url('https://source.unsplash.com/random')", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", borderRadius: "0.3em" }} >
      <div className='arrCardInfo'    style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "70%", height: "5em", border:"0.7em solid white" }}>
        <div className='arrPdctName'  style={{ color: "white"}} >PRODUCT NAME</div>
        <div className='arrPdctPrice'>₹ 599</div>
      </div>
    </div>
  );
}

export default NewArrivals