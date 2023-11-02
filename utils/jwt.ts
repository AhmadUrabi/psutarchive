const parseJwt = (token: string) => {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

export const isJwtExpired = (token: string) => {
    const parsedToken = parseJwt(token);
    const current_time = new Date().getTime() / 1000;
    if (current_time > parsedToken.exp)
        return true;
    return false;
}

export const invalidateJwt = () => {
    const STORAGE_KEY = "jwt";
    localStorage.removeItem(STORAGE_KEY);
}

export const storeJwt = (token: string) => {
    const STORAGE_KEY = "jwt";
    localStorage.setItem(STORAGE_KEY, token);
}
