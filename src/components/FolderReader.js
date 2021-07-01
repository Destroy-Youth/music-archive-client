import React, { useState } from 'react'
import * as musicMetadata from 'music-metadata-browser'

function FolderReader({ tracks, setTracks }) {
  const onFilesSelected = async event => {
    for (const fileSelected of event.target.files) {
      try {
        const parsedMetadata = await parseFile(fileSelected)
        setTracks(tracks => [...tracks, parsedMetadata])
      } catch (err) {
        console.error(err)
      }
    }
  }

  const parseFile = async file =>
    await musicMetadata.parseBlob(file, { native: true })

  return (
    <div>
      <input
        type="file"
        name="filefield"
        multiple={true}
        onChange={onFilesSelected}
      />
    </div>
  )
}

export default FolderReader
