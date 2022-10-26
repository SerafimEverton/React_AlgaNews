import { useState } from "react"
import { Tag } from "react-tag-input"
import styled from "styled-components"
import countWordsInMarkdown from "../../Core/Utils/CountWordsInMarkdown"
import Button from "../Components/Button/Button"
import ImageUpload from "../Components/ImageUpload"
import Input from "../Components/Inputs/input"
import MarkdownEditor from "../Components/MarkdownEditor"
import TagInput from "../Components/TagsInput"
import WordPriceCounter from "../Components/WordPriceCounter"

export default function PostForm () {
  const [tags, setTags] = useState<Tag[]>([])
  const [body, setBody] = useState('')

  return <PostFormWrapper>
    <Input
      label="título"
      placeholder="e.g.: Como fiquei rico aprendendo React"
    />
    <ImageUpload label="Thumbnail do post" />
    <MarkdownEditor 
        onChange={ setBody }
    />
    <TagInput
      tags={tags}
      onAdd={tag => setTags([...tags, tag])}
      onDelete={index => setTags(tags.filter((_, i) => i !== index))}
      placeholder="Insira as tags deste post"
    />
    <PostFormSubmitWrapper>
      <WordPriceCounter pricePerWord={0.25} wordsCount={countWordsInMarkdown(body)} />
      <Button variant="primary" label="Salvar post" type="submit" />
    </PostFormSubmitWrapper>
  </PostFormWrapper>
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const PostFormSubmitWrapper = styled.form`
  display: flex;
  justify-content: space-between;
`