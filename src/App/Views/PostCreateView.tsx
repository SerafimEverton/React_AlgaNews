import UsePageTitle from "../../Core/Hooks/UsePageTitle"
import PostForm from "../Features/PostForm"
import DefaultLayout from "../Layouts/Default"


export default function PostCreateView(){
    UsePageTitle('New Post')

    return <DefaultLayout>
        <PostForm />
    </DefaultLayout>
}