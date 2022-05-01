import React from 'react'


const Dashboard = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
        <div style={{ width: "50vw", height: "100vh", display: "flex", justifyContent: 'center', alignContent: "center", flexDirection: "column", backgroundColor: "black", paddingLeft: "5em" }}>
            <div style={{width: '90%', height: '5em', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white', fontSize: '1.5em' }}>
                <div>Name : </div>
                <div>IOTA</div>
            </div>
            <div style={{width: '90%', height: '5em', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white', fontSize: '1.5em' }}>
                <div>Contact : </div>
                <div>7044944262</div>
            </div>
            <div style={{width: '90%', height: '5em', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white', fontSize: '1.5em' }}>
                <div>Email: </div>
                <div>muinnasif@gmail.com</div>
            </div>
            <div style={{width: '90%', height: '5em', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white', fontSize: '1.5em' }}>
                <div>Address: </div>
                <div>D1, 152, Lake East 6th road, Kolkata 700075</div>
            </div>
            <div style={{width: '90%', height: '5em', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5em' }}>
                <button style={{ padding: '1em', backgroundColor: "white", color: 'black', fontSize: '1em', border: 'none', fontWeight: '900' }} >View Orders</button>
            </div>
        </div>

    </div>
  )
}

export default Dashboard