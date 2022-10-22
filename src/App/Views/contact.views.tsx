import usePageTitle from "../../Core/Hooks/usePageTitle";
import DefaultLayout from "../Layouts/Default"

export default function Contact(){
    usePageTitle('Contato')

    return <DefaultLayout>
    <h1>Contato</h1>
    </DefaultLayout>
}