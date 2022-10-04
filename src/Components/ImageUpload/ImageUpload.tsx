import { mdiUpload } from '@mdi/js'
import Icon from '@mdi/react'
import * as IU from './ImageUpload.styles'

export interface ImageUploadProps {
    label: string

}

function ImageUpload (props: ImageUploadProps){
    return <IU.Wrapper>
        <IU.Label>
            <Icon
                size={'24px'}
                path={mdiUpload}
            />
            {props.label}
        </IU.Label>
    </IU.Wrapper>

}

export default ImageUpload