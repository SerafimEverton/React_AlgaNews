import ErrorBoundary from "../Components/ErrorBoundary";
import EditorProfile from "../Features/EditorProfile";
import DefaultLayout from "../Layouts/Default";

function DefaultLayoutView(){
    return <DefaultLayout>
        <ErrorBoundary>
            <EditorProfile hidePersonalData />
        </ErrorBoundary>
    </DefaultLayout>
}

export default DefaultLayoutView