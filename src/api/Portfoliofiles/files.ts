import Service from "../../Lib/service"
import { getUserToken } from "../../Utils/helper"


const PortFolioFilesSevice = {

    addFiles: async (data: any, portfolioId: any) => {
        try {
            const token = await getUserToken()
            return Service.post({
                url: `portfolio/${portfolioId}`,
                data: data
            }, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    addVideo: async (data: any, portfolioId: any) => {
        const token = await getUserToken()
        return Service.post({
            url: `portfolio/videolink/${portfolioId}`,
            data
        }, {
            authorization: token,
        })
    },

    getFiles: async (portfolioId: any) => {
        try {
            const token = await getUserToken()
            return Service.get(`portfolio/files/${portfolioId}`, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    getFileName: async (portfolioId: any) => {
        try {
            const token = await getUserToken()
            return Service.get(`portfolio/files-name/${portfolioId}`, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    }

}

export default PortFolioFilesSevice;