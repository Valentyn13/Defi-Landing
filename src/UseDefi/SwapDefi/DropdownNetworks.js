import React, { useState } from 'react'

function DropdownNetworks({selected, setSelected}) {

    const [isActive, setIsActive] = useState(false)
    const networks = ['Ethereum','BNB Chain',"Polygon"];

  return (
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={()=>setIsActive(!isActive)}>
            {selected}
        </div>
        {isActive && (
                    <div className='dropdown-content'>
                        {networks.map((network)=> (
                            <div onClick={()=> {
                                setSelected(network)
                                setIsActive(false)
                            }} className='dropdown-item'>{network}</div>
                        ))}
                    </div>
        )}
    </div>
  )
}

export default DropdownNetworks