import * as TI from './TagsInput.styles'
import { WithContext as ReactTagInput, Tag } from 'react-tag-input'

export interface TagsInputProps {
  onAdd: (tag: Tag) => any
  onDelete: (i: number) => any
  placeholder: string
  tags: Tag[]
}

const KeyCodes = {
  comma: 188,
  enter: 13,
  tab: 9
}

function TagsInput (props: TagsInputProps) {
  return <TI.Wrapper>
    <ReactTagInput
      placeholder={props.placeholder}
      handleAddition={props.onAdd}
      handleDelete={props.onDelete}
      allowDragDrop={false}
      autofocus={false}
      tags={props.tags}
      delimiters={[KeyCodes.comma, KeyCodes.enter, KeyCodes.tab]}
    />
  </TI.Wrapper>
}

export default TagsInput