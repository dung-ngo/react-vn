import axiosClient from "./axiosClient";

const productApi = {
    getAll(params) {
        const url = '/products'
        // return axiosClient.get(url, { params = params }) // Giống tên nên đc phép rút gọn từ dấu '='
        return axiosClient.get(url, { params })
    },

    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = '/products';
        // return axiosClient.post(url, data, objConfig) // post có 3 tham số url, data, objectConffig
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/products/${data.id}`;
        return axiosClient.patch(url, data); // có thể dùng axiosClient.put()
    },

    remove(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    }
};

export default productApi;