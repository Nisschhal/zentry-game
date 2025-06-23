import { useWindowScroll } from "react-use"

const BentoTilt = ({ children, className = "" }) => {
  return <div className={` ${className}`}>{children}</div>
}

export default BentoTilt
