import PostList from "../Features/PostList"
import UserEarnings from "../Features/UserEarnings"
import UsePageTitle from "../../Core/Hooks/UsePageTitle"
import UserPerformance from "../Features/UserPerformance"
import UserTopTags from "../Features/UserTopTags"
import DefaultLayout from "../Layouts/Default"
import ErrorBoundary from "../Components/ErrorBoundary"


export default function Home () {
  UsePageTitle('Home')

  return <DefaultLayout>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '32px' }}>

    <ErrorBoundary component={'TopTags'}>
      <UserTopTags />
      </ErrorBoundary>

      <ErrorBoundary component={'UserEarnings'}>
      <UserEarnings />
      </ErrorBoundary>
    </div>

    <ErrorBoundary component={'Performance'}>
    
    <UserPerformance />

    </ErrorBoundary>

    <ErrorBoundary component={'Lista de Posts'}>
    
    <PostList />

    </ErrorBoundary>
  </DefaultLayout>
}