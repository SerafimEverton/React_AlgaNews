import confirm from '../../../Core/Utils/ConfirmButton'
import Logo from '../../Components/Logo'
import NavBar from '../../Components/NavBar.Componets'
import SessionController from '../../Components/SessionController'
import * as DL from './Default.layout.styles'
interface DefaultLayoutProps {
    children: React.ReactNode
  }
  
  function DefaultLayout (props: DefaultLayoutProps) {
    return <DL.Wrapper>
      <DL.Header>
        <Logo />
      </DL.Header>
      <DL.Main>
        <DL.Navigation>
          <NavBar />
        </DL.Navigation>
        <DL.FeaturedContent>
          { props.children }
        </DL.FeaturedContent>
        <DL.Aside>
          <SessionController
            name="Daniel Bonifacio"
            description="editor há 2 anos"
            onLogout={() => {
              confirm({
                title: 'Voce quer delogar?',
                onConfirm: () => window.alert('batata'),
                onCancel: () => window.alert('laranja'),
              })
            }}
          />
        </DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  }
  
  export default DefaultLayout