import { ApiError } from "@/utils/apiError";
export const errorMiddleware = (error, req, res, next) => {
    if (error instanceof ApiError) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message
        });
    }
    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
};
