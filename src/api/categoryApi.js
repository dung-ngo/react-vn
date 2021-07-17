import axiosClient from "./axiosClient";

const categoryApi = {
    getAll(params) {
        const url = '/categories'
        // return axiosClient.get(url, { params = params }) // Giống tên nên đc phép rút gọn từ dấu '='
        return axiosClient.get(url, { params })
    },

    get(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = 'categories';
        // return axiosClient.post(url, data, objConfig) // post có 3 tham số url, data, objectConffig
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/categories/${data.id}`;
        return axiosClient.patch(url, data); // có thể dùng axiosClient.put()
    },

    remove(id) {
        const url = `/categories/${id}`;
        return axiosClient.delete(url);
    }
};

export default categoryApi;