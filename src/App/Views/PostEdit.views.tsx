import { useParams } from "react-router-dom"
import UsePageTitle from "../../Core/Hooks/UsePageTitle"
import PostForm from "../Features/PostForm"
import DefaultLayout from "../Layouts/Default"

export default function PostEditView() {

    const params = useParams<{id: string}>()
    UsePageTitle('New Post')

    return <DefaultLayout>
        <PostForm postId={Number(params.id)}/>
    </DefaultLayout>
}