import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

const Card = styled.div`
  border-radius: 20px;
  min-height: 8rem;
  min-width: 30%;
  background-color: orangered;
  max-width: 20%;
  margin: 0.5rem;
`

const MetadataDisplay = ({ track }) => {
  const [albumPicture, setAlbumPicture] = useState(null)

  useEffect(() => {
    setAlbumPicture(() => buildAlbumImage(track.common.picture[0].data))
    return () => {}
  }, [])

  const buildAlbumImage = data => {
    // const stringChar = String.fromCharCode.apply(null, data);
    // const stringChar = new TextDecoder().decode(data)

    const stringChar = data.reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ''
    )
    const base64Data = btoa(stringChar)
    return 'data:image/jpeg;base64,' + base64Data
  }

  return (
    <Card>
      <p>{track.common.title}</p>
      <p>{track.common.artist}</p>
      <p>{track.common.album}</p>
      <img src={albumPicture} />
    </Card>
  )
}

export default MetadataDisplay
