
import Service from "../Service";
import { v4 as uuid } from 'uuid'
import { File } from "../@types/File";


class FileService extends Service {

    private static getSignedURL(fileInfo: File.UploadRequestInput) {
        return this.Http
            .post<File.UploadRequest>('/upload-requests', fileInfo)
            .then(this.getData)
            .then(res => res.uploadSignedUrl)
    }

    private static uploadFileToSignedURL(signedUrl: string, file: File) {

        return this.Http
            .put<{}>(signedUrl, file, {
                headers: { 'Content-type': file.type }
            })
            .then(this.getData)

    }

    private static getFileExtension(fileName: string) {

        const [extension] = fileName.split('.').slice(-1)
        return extension

    }

    private static generateFileName(extension: string) {
        return `${uuid()}.${extension}`
    }

    static async upload(file: File) {

        const extension = this.getFileExtension(File.name)
        const fileName = this.generateFileName(extension)

        const singendUrl = await FileService
            .getSignedURL({
                fileName,
                contentLength: file.size
            })

        await FileService
            .uploadFileToSignedURL(singendUrl, file)

        return singendUrl.split('?')[0]

    }
}

export default FileService