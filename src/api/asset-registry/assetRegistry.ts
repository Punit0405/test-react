import axios from "axios";
import Service from "../../Lib/service";
import { getUserToken } from "../../Utils/helper";

const AssetRegistryService = {
    createDevice: async (data: any) => {
        const token = await getUserToken()
        try {
            return await Service.post(
                {
                    url: `asset`,
                    data,
                }, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },
    getDeviceList: async (data?: any) => {
        const token = await getUserToken()
        try {
            let url = 'asset'
            if (data) {
                url = `asset?status=${data}`
            }
            return await Service.get(url,
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },
}

export default AssetRegistryService;
