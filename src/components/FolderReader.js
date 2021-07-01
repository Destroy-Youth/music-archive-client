import React, { useState } from 'react'
import * as musicMetadata from 'music-metadata-browser'

function FolderReader() {
  const [files, setFiles] = useState([])
  const [metadata, setMetadata] = useState([])

  const onFilesSelected = async event => {
    setFiles(event.target.files)
    for (const fileSelected of event.target.files) {
      try {
        const parsedMetadata = await parseFile(fileSelected)
        setMetadata(metadata => [...metadata, parsedMetadata])
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
