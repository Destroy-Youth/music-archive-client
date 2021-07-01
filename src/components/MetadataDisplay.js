import React from 'react'
import PropTypes from 'prop-types'

const MetadataDisplay = ({ track }) => {
  return (
    <div>
      <p>{track.common.title}</p>
    </div>
  )
}

MetadataDisplay.propTypes = {}

export default MetadataDisplay
