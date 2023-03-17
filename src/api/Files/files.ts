import Service from "../../Lib/service"
import { getUserToken } from "../../Utils/helper"


const FilesSevice = {

    addFiles: async (data: any, collectionId: any) => {
        try {
            const token = await getUserToken()
            return Service.post({
                url: `collection/${collectionId}`,
                data: data
            }, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    }

}

export default FilesSevice;