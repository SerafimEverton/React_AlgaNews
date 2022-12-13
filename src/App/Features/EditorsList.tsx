import { useEffect, useState } from "react";
import styled from "styled-components";
import { User } from "../../SDK/@types";
import UserService from "../../SDK/services/User.service";
import Profile from "../Components/Profile";

export default function EditorsList() {

    const [editors, setEditors] = useState<User.EditorSummary[]>([])

    useEffect(()=> {
        UserService
            .getAllEditors()
            .then (setEditors) // .then(editors => setEditors(editors))
    }, [])

    return <EditorsListWrapper>
    {
      editors.map(editor => {
        return <Profile
          editorId={editor.id}
          name={editor.name}
          description={'Editor há X meses'}
          avatarUrl={editor.avatarUrls.small}
        />
      })
    }
  </EditorsListWrapper>
}

     

const EditorsListWrapper = styled.div`

display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px;
`