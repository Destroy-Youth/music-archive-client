import styled from '@emotion/styled'
import React, { useContext, useEffect, useState } from 'react'
import * as musicMetadata from 'music-metadata-browser'
import { ThemeContext } from '../App'

const Card = styled.div`
  border-radius: 20px;
  min-height: 8rem;
  min-width: 30%;
  background-color: ${props => props.theme.secundary};
  max-width: 20%;
  margin: 0.5rem;
`

const AlbumPicture = styled.img`
  width: 8em;
  height: 8em;
`

const MetadataDisplay = ({ track }) => {
  const theme = useContext(ThemeContext)
  const [albumPicture, setAlbumPicture] = useState(null)
  const [metadata, setMetadata] = useState(null)

  useEffect(async () => {
    const s = theme
    const parsedFile = await parseFile(track)
    setAlbumPicture(buildAlbumImage(parsedFile.common.picture[0].data))
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
    <Card theme={theme}>
      <p>{metadata?.common?.title}</p>
      <p>{metadata?.common?.artist}</p>
      <p>{metadata?.common?.album}</p>
      <AlbumPicture src={albumPicture} />
    </Card>
  )
}

export default MetadataDisplay
