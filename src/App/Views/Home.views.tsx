import usePageTitle from "../../Core/Hooks/usePageTitle"
import PostList from "../Features/PostList"
import UserMetrics from "../Features/UserMetrics"
import DefaultLayout from "../Layouts/Default"

export default function Home () {
  usePageTitle('Home')

  return <DefaultLayout>
    <UserMetrics />
    <PostList />
  </DefaultLayout>
}