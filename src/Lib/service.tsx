import { request, requestWithHeaders } from "./request";
function get(url: string, headers: any) {
  return request({
    method: "GET",
    url,
    headers,
  });
}
function remove(url: string, headers: any) {
  return request({
    method: "DELETE",
    url,
    headers,
  });
}

function post<T = any>({ url, data }: { url?: string; data: T }, headers?: any) {
  return request({
    method: "POST",
    url,
    data,
    headers,
  });
}

function update<T = any>(
  { url, data }: { url?: string; data: T },
  headers: any
) {
  return request({
    method: "PUT",
    url,
    data,
    headers,
  });
}

function removeWithBody<T = any>({ url, data }: { url?: string; data: T }, headers?: any) {
  return request({
    method: "DELETE",
    url,
    data,
    headers,
  });
}
function downloadPost<T = any>({ url, data }: { url?: string; data: T }, headers?: any) {
  return requestWithHeaders({
    method: "POST",
    url,
    data,
    headers,
    responseType: "blob",
    onDownloadProgress: (progressEvent) => {
      console.log("---------test-----");
      console.log("====progressEvent=====", progressEvent);
      console.log("==============");
    }
  });
}

const Service = {
  get,
  post,
  update,
  removeWithBody,
  remove,
  downloadPost
};
export default Service;
