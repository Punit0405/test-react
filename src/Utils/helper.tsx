import * as Constants from "./constants";
import { notification } from "antd";
import { S3 } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { XhrHttpHandler } from "@aws-sdk/xhr-http-handler";

export declare type NotificationPlacement =
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";

export const NotificationWithIcon = (
    type: string,
    message: string,
    placement: NotificationPlacement = "topRight"
): void => {
    if (type === "success") {
        notification.success({
            message,
            placement,
        });
    } else if (type === "error") {
        notification.error({
            message,
            placement,
        });
    } else {
        notification.info({
            message,
            placement,
        });
    }
};

export const getUserToken = () => {
    const { AUTH_TOKEN } = Constants;
    return localStorage.getItem(AUTH_TOKEN);
};

export const isUserLoggedIn = () => {
    const token = getUserToken();
    if (token) {
        return true;
    }
    return false;
};

export const getUserPassword = () => {
    let email: string | null = ""
    let password: string | null = ""
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
        email = localStorage.getItem("email") ? localStorage.getItem("email") : "";
        password = localStorage.getItem("password") ? localStorage.getItem("password") : "";
    }
    return { email, password }
}
export const getNameAndProfile = () => {
    let firstName: string | null = ""
    let lastName: string | null = ""
    if (localStorage.getItem(Constants.FIRST_NAME) && localStorage.getItem(Constants.LAST_NAME)) {
        firstName = localStorage.getItem(Constants.FIRST_NAME) ? localStorage.getItem(Constants.FIRST_NAME) : "";
        lastName = localStorage.getItem(Constants.LAST_NAME) ? localStorage.getItem(Constants.LAST_NAME) : "";
    }
    return { firstName, lastName }
}

export const fileUpload=async(file:any,key:any)=>{
    // const bufferData = await readFileAsync(file);
    const Key = key
        const Bucket = process.env.REACT_APP_AWS_BUCKET_NAME
        const Body: any = file
        try {
            const s3 = new S3({
                requestHandler: new XhrHttpHandler({}),
                region: process.env.REACT_APP_WASABI_REGION,
                endpoint: process.env.REACT_APP_WASABI_ENDPOINT,
                credentials: {
                    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY as string,
                    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY as string
                }
            })

            const parallelUploads3 = new Upload({
                client: s3,
                params: { Bucket, Key, Body },
                queueSize: 4,
                leavePartsOnError: false,
            });
            
            return await parallelUploads3.done().then((result:any) => {
                return result.Key               
            });
        } catch (e:any) {
            console.log(e,'-----e-------------');
            throw new Error(e)
        }
}

const readFileAsync = (file: File) => {
    return new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          resolve(reader.result as ArrayBuffer);
        } else {
          reject(new Error('Failed to read the file.'));
        }
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
};