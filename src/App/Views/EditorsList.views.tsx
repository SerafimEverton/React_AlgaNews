import DefaultLayout from '../Layouts/Default'
import usePageTitle from '../../Core/Hooks/usePageTitle'

export default function EditorsListView (){

    usePageTitle('Lista de editores')

    return <DefaultLayout>
        <EditorsListView />
    </DefaultLayout>

}