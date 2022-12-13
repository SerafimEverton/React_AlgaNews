import { useState } from "react"
import { Tag } from "react-tag-input"
import styled from "styled-components"
import countWordsInMarkdown from "../../Core/Utils/CountWordsInMarkdown"
import InfoButton from "../../Core/Utils/info"
import PostService from "../../SDK/services/Post.service"
import Button from "../Components/Button/Button"
import ImageUpload from "../Components/ImageUpload"
import Input from "../Components/Inputs/input"
import MarkdownEditor from "../Components/MarkdownEditor"
import TagInput from "../Components/TagsInput"
import WordPriceCounter from "../Components/WordPriceCounter"

export default function PostForm () {
  const [tags, setTags] = useState<Tag[]>([])
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  async function handleFormSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newPost = {

      body,
      title,
      tags: tags.map(tag => tag.text),
      imageUrl,

    }

    const insertedPost = await PostService.insertNewPost(newPost)

    InfoButton({
      title: 'Post salvo com sucesso',
      description: 'Você acabou de criar o post com id ' + insertedPost.id
    })
  }

  return <PostFormWrapper onSubmit={handleFormSubmit}>
    <Input
      label="título"
      value = {title}
      onChange = {e=> setTitle(e.currentTarget.value)}
      placeholder="e.g.: Como fiquei rico aprendendo React"
    />
    <ImageUpload 
    onImageUpload={setImageUrl}
    label="Thumbnail do post" />
    <MarkdownEditor onChange={setBody} />
    <TagInput
      tags={tags}
      onAdd={tag => setTags([...tags, tag])}
      onDelete={index => setTags(tags.filter((_, i) => i !== index))}
      placeholder="Insira as tags deste post"
    />
    <PostFormSubmitWrapper>
      <WordPriceCounter
        pricePerWord={0.10}
        wordsCount={countWordsInMarkdown(body)}
      />
      <Button variant="primary" label="Salvar post" type="submit" />
    </PostFormSubmitWrapper>
  </PostFormWrapper>
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const PostFormSubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`