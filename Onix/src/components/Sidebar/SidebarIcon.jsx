
import React from 'react'

const SidebarIcon = ({icon}) => {
  return (
    <button
        className="absolute top-3 text-xl p-2 text-white"
        style={{
          cursor: "pointer",
          background: "#68696d",
          borderRadius: "25%",
        }}
        type="button"
    >
        {icon}
    </button>
  )
}

export default SidebarIcon