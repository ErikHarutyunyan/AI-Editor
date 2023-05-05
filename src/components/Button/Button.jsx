import React from 'react'
// Styles
import {Wrapper} from "./Button.styles"

const Button = ({title = "Button", styleBtn = "default"}) => {
  return (
    <Wrapper styleBtn={styleBtn}>
      <button>
        {title}
      </button>
    </Wrapper>
  )
}

export default Button
