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
    }
}

export default AssetRegistryService;
