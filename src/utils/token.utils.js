export const storeToken = (token) => {
    localStorage('authToken', token);
};

export const removeToken = (token) => {
    localStorage.removeItem('authToken');
};

export const getToken = (token) => {
    localStorage.getItem('authToken');
};
