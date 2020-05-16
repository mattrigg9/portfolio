import React, { Component } from "react"

function Skill({ icon, name }) {
  return (
    <li>
      {icon} {name}
    </li>
  )
}

export default Skill
