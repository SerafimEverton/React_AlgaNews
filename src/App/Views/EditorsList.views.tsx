import UsePageTitle from "../../Core/Hooks/UsePageTitle"
import EditorsList from "../Features/EditorsList"
import DefaultLayout from "../Layouts/Default"


export default function EditorsListView (){

    UsePageTitle('Lista de editores')

    return <DefaultLayout>
        <EditorsList />
    </DefaultLayout>

}