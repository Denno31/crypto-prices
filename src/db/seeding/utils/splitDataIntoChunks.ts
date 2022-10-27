const chunkSize = 100;

export const splitDataIntoChunks = (data: { [key: string]: unknown }[]) => {
    const res = [];
    for (let i = 0; i < data.length; i += chunkSize) {
        const chunk = data.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
};
