import { File } from "../@types";
import Service from "../Service";


class FileService extends Service{

static getSignedURL(fileInfo: File.UploadRequestInput){
    return this.Http
    .post<File.UploadRequest>('/upload-requests', fileInfo)
    .then(this.getData)
    .then(res => res.uploadSignedUrl)
}

static uploadFileToSignedURL(signedUrl: string, file: File){

return this.Http
.put<{}>(signedUrl, file, {
    headers:{'Content-type': file.type}})
.then(this.getData)

}
}

export default FileService