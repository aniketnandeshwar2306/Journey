import React from 'react'

const App = () => {
  return (
   <div>
    <div className="h-[250px] w-[320px] m-7 p-3 border-2 border-amber-50">
      <div className="h-1/2 flex  ">
        <div className="h-1/2 w-1/2 rounded-full border-2 border-amber-50">
          Photo
        </div>
        <div className="">
          <h4>Online</h4>
          <h2>Dr.Aniket</h2>
          <h3>Heart Surgeon</h3>
          <div className="m-1"> <span>ic</span> <span>4.48</span> <span>288</span> <span>16.8 km</span> </div>
          <h3>Provide Video Visit</h3>
        </div>
      </div>
      <h5 className="wrap-break-word">Sunnyvale, CA 94086, United States</h5>
      <div className="h-2/5">Lower</div>
    </div>
    
   </div>
  )
}

export default App
