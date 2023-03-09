
const API_KEY = '32970043-afcc677e938f183a59875dbcc';

async function fetchGallery(imageName, page) {
    return await fetch(`https://pixabay.com/api/?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.json())
}

const api = {
    fetchGallery,
}
export default api;