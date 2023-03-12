import request from "./request";

function get(url: string, headers: any) {
  return request({
    method: "GET",
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

function remove(url: any, data: any, headers: any) {
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
  remove,
};
export default Service;
