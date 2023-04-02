import request from "./request";

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

const Service = {
  get,
  post,
  update,
  removeWithBody,
  remove
};
export default Service;
