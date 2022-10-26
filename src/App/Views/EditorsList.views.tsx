import UsePageTitle from "../../Core/Hooks/UsePageTitle"
import DefaultLayout from "../Layouts/Default"


export default function EditorsListView (){

    UsePageTitle('Lista de editores')

    return <DefaultLayout>
        <EditorsListView />
    </DefaultLayout>

}