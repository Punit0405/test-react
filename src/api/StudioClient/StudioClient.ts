import Service from "../../Lib/service"
import { getUserToken } from "../../Utils/helper"


const StudioClientSevice = {

    addClient: async (data: any) => {
        try {
            const token = await getUserToken()
            return Service.post({
                url: `studiomanagement/client`,
                data: data
            }, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    getCientList: async (search?:any) => {
        try {
            const searchData=search?search:''
            const token = await getUserToken()
            return Service.get(`studiomanagement/client${searchData}`, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    getClientDetails: async (clientId: any) => {
        try {
            const token = await getUserToken()
            return Service.get(`studiomanagement/client/${clientId}`, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    updateClientDetails: async (clientId: any,data:any) => {
        try {
            const token = await getUserToken()
            return Service.post({
                url: `studiomanagement/client/${clientId}`,
                data: data
            }, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    deleteClient: async (clientId: any) => {
        try {
            const token = await getUserToken()
            return Service.remove(`studiomanagement/client/${clientId}`, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    }

}

export default StudioClientSevice;