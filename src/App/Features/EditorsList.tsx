import styled from "styled-components";
import { User } from "../../SDK/@types/User";
import Profile from "../Components/Profile";

export default function EditorsList(){

    const editors: User.EditorSummary[]= []


    return <EditorsListWrapper>

    <Profile editorId={0} name='Everton Serafim' description= 'Editor a 8 anos'/>   
    <Profile editorId={1} name='Jorge Silva' description= 'Eletricista a 12 anos'/>   
    <Profile editorId={2} name='Elena Matos' description= 'Logista 26 anos'/>   
    <Profile editorId={3} name='Gilson Ribeiro' description= 'Artista Plastico a 15 anos'/>   
    <Profile editorId={4} name='Caludio Soares' description= 'Professor de História a 17 anos'/>   
    </EditorsListWrapper>

}

const EditorsListWrapper = styled.div`

display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px;
`