import React from 'react'
import PropTypes from 'prop-types'
import techIcons from '../images/tech-icons/sprite-icons.svg'

const TechIcons = ({ name, size, ...restProps}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    // viewBox="0 0 24 24"
    // fill="none"
    // stroke={color}
    // strokeWidth="2"
    // strokeLinecap="round"
    // strokeLinejoin="round"
    {...restProps}
  >
    <use xlinkHref={`${techIcons}#${name}`}  />
  </svg>
)

export default TechIcons

TechIcons.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
}

TechIcons.defaultProps = {
  size: 36,
}