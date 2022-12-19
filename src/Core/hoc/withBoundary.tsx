import ErrorBoundary from "../../App/Components/ErrorBoundary"

function withBoundary<T extends object>(Component: React.ComponentType<T>, componentName?: string){
    
    return function (props: T){

        return <ErrorBoundary component={componentName}>
            <Component{...props}/>

        </ErrorBoundary>

}
}

export default withBoundary