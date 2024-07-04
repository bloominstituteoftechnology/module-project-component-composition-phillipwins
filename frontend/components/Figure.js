import React from 'react'

export default function Figure({ imageURL, caption}) {
    return (
      <figure>
      <image src={imageURL} />
      <figcaption>Awesome pic taken on {caption}</figcaption>
    </figure>
    )
  }