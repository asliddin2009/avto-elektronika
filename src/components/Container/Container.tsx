import React, { ReactNode } from "react"

const Container = (props: { children: ReactNode, className?: string }) => {
  return (
    <div className={`container px-[15px] mx-auto xl:max-w-[1410px ${props.className || ""}`}>
      { props.children }
    </div>
  )
}
export default Container