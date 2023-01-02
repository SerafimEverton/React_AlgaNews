import UsePageTitle from "../../Core/Hooks/UsePageTitle"
import PostForm from "../Features/PostForm"
import DefaultLayout from "../Layouts/Default"

export default function PostEditView() {
    UsePageTitle('New Post')

    return <DefaultLayout>
        <PostForm />
    </DefaultLayout>
}