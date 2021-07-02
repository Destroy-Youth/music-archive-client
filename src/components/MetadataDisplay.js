import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import * as musicMetadata from 'music-metadata-browser'

const Card = styled.div`
  border-radius: 20px;
  min-height: 8rem;
  min-width: 30%;
  background-color: orangered;
  max-width: 20%;
  margin: 0.5rem;
`

const albumPicture = styled.img`
  width: 2em;
  height: 2em;
`

const MetadataDisplay = ({ track }) => {
  const [albumPicture, setAlbumPicture] = useState(null)
  const [metadata, setMetadata] = useState(null)

  useEffect(async () => {
    const parsedFile = await parseFile(track)
    setMetadata(parsedFile)
    return () => {}
  }, [track])

  const parseFile = async file => await musicMetadata.parseBlob(file)

  const buildAlbumImage = data => {
    const stringChar = data.reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ''
    )
    const base64Data = btoa(stringChar)
    return 'data:image/jpeg;base64,' + base64Data
  }

  return (
    <Card>
      <p>{metadata?.common?.title}</p>
      <p>{metadata?.common?.artist}</p>
      <p>{metadata?.common?.album}</p>
      {/* <img src={buildAlbumImage(metadata?.common.picture[0].data)} /> */}
    </Card>
  )
}

export default MetadataDisplay
