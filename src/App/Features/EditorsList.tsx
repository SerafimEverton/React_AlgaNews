import styled from "styled-components";
import Profile from "../Components/Profile";

export default function EditorsList(){
    return <EditorsListWrapper>

    <Profile name='Everton Serafim' description= 'Editor a 8 anos'/>   
    <Profile name='Jorge Silva' description= 'Eletricista a 12 anos'/>   
    <Profile name='Elena Matos' description= 'Logista 26 anos'/>   
    <Profile name='Gilson Ribeiro' description= 'Artista Plastico a 15 anos'/>   
    <Profile name='Caludio Soares' description= 'Professor de História a 17 anos'/>   

    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`

display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px;
`