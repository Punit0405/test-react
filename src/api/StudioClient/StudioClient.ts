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

    getCientList: async (search?: any) => {
        try {
            const searchData = search ? search : ''
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

    updateClientDetails: async (clientId: any, data: any) => {
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
    },

    addSpeciality: async (data: any) => {
        try {
            const token = await getUserToken()
            return Service.post({
                url: `studiomanagement/speciality`,
                data: data
            }, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    getSpeciality: async () => {
        try {
            const token = await getUserToken()
            return Service.get(`studiomanagement/speciality`, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    updateSpecialityDetails: async (clientId: any, data: any) => {
        try {
            const token = await getUserToken()
            return Service.post({
                url: `studiomanagement/speciality/${clientId}`,
                data: data
            }, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    deleteSpeciality: async (clientId: any) => {
        try {
            const token = await getUserToken()
            return Service.remove(`studiomanagement/speciality/${clientId}`, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },
    getTemplate: async (search: any) => {
        try {
            const token = await getUserToken()
            return Service.get(`studiomanagement/templates?type=${search}`, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },
    updateTemplate: async (data: any) => {
        try {
            const token = await getUserToken()
            return Service.post({
                url: `studiomanagement/templates`,
                data: data
            }, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

}

export default StudioClientSevice;