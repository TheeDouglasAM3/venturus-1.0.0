import React, { ReactElement, useState } from 'react'
import ReactTagInput from '@pathofdev/react-tag-input'
import { Container } from '../styles/components/taginput'
import '@pathofdev/react-tag-input/build/index.css'

const TagInput = (): ReactElement => {
  const [tags, setTags] = useState(['BR'])
  return (
    <Container>
      <ReactTagInput
        tags={tags}
        onChange={(newTags: string[]) => setTags(newTags)}
      />
    </Container>
  )
}

export default TagInput
