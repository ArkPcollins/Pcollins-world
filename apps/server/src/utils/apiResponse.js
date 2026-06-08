// 2. Export the function variable using modern arrow syntax
export const apiResponse = (res, success, message, data) => {
    const statusCode = success ? 200 : 400;
    return res.status(statusCode).json({
        success,
        message,
        data,
    });
};
export const serviceResponse = (success, message, data) => {
    return {
        success,
        message,
        data,
    };
};
