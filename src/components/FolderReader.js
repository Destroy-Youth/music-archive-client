import React, { useState } from 'react'

function FolderReader({ setTracks }) {
  const onFilesSelected = async event => {
    const files = Array.from(event.target.files)
    setTracks(files)
  }

  return (
    <div>
      <input
        type="file"
        accept="audio/*"
        name="filefield"
        multiple={true}
        onChange={onFilesSelected}
      />
    </div>
  )
}

export default FolderReader
