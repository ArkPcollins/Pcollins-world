import { UploadService } from "./upload.service";
export class UploadController {
    service = new UploadService();
    upload = async (req, res) => {
        const result = await this.service.uploadFile(req.file, req.body.folder);
        res.json(result);
    };
}
