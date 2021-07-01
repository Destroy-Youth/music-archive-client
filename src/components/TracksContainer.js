import styled from '@emotion/styled'
import React, { useState } from 'react'
import FolderReader from './FolderReader'
import MetadataDisplay from './MetadataDisplay'

const MetadataDisplayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: row;
`

const TracksContainer = () => {
  const [tracks, setTracks] = useState([])

  return (
    <div>
      <FolderReader setTracks={setTracks} />
      <MetadataDisplayContainer>
        {tracks.map(track => (
          <MetadataDisplay track={track} />
        ))}
      </MetadataDisplayContainer>
    </div>
  )
}

export default TracksContainer
