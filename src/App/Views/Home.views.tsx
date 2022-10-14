import usePageTitle from "../../Core/Hooks/usePageTitle"
import DefaultLayout from "../Layouts/Default"


export default function Home(){
    usePageTitle('Home')
    return <DefaultLayout>

        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi totam dolore esse et obcaecati in aspernatur assumenda ut asperiores alias voluptas architecto, quae dicta facere. Quibusdam nostrum sint accusantium!</p>
    </DefaultLayout>
}