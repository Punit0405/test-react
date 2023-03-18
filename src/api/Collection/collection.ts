import Service from "../../Lib/service"
import { getUserToken } from "../../Utils/helper"


const CollectionService = {

    getCollection: async () => {
        try {
            const token = await getUserToken()
            return Service.get('collection', {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    getCollectionById: async (collectionId: string) => {
        try {
            const token = await getUserToken()
            return Service.get(`collection/${collectionId}`, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    createCollection: async (data: string) => {
        try {
            const token = await getUserToken()
            return Service.post({
                url: `collection`,
                data: data
            }, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    updateCollection: async (collectionId: string, data: any) => {
        try {
            const token = await getUserToken()
            return Service.update({
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

export default CollectionService;