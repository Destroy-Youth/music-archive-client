import React, { useState } from 'react'
import FolderReader from './FolderReader'
import MetadataDisplay from './MetadataDisplay'

const TracksContainer = () => {
  const [tracks, setTracks] = useState([])

  return (
    <div>
      <FolderReader setTracks={setTracks} />
      {tracks.map(track => (
        <MetadataDisplay track={track} />
      ))}
    </div>
  )
}

export default TracksContainer
