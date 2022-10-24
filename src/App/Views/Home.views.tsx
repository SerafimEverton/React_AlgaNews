import usePageTitle from "../../Core/Hooks/usePageTitle"
import PostList from "../Features/PostList"
import UserPerformance from "../Features/UserPerformance"
import UserTopTags from "../Features/UserTopTags"
import DefaultLayout from "../Layouts/Default"

export default function Home () {
  usePageTitle('Home')

  return <DefaultLayout>
    <UserTopTags />
    <UserPerformance />
    <PostList />
  </DefaultLayout>
}