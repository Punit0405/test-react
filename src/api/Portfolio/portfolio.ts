import Service from "../../Lib/service"
import { getUserToken } from "../../Utils/helper"


const PortfolioService = {

    getPortfolio: async () => {
        try {
            const token = await getUserToken()
            return Service.get('portfolio', {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    getPortfolioSort: async (data?: any) => {
        try {
            const token = await getUserToken()
            return Service.get(`portfolio${data}`, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    getPortfolioById: async (portfolioId: string) => {
        try {
            const token = await getUserToken()
            return Service.get(`portfolio/${portfolioId}`, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    createPortfolio: async () => {
        try {
            const token = await getUserToken()
            return Service.post({
                url: `portfolio`,
                data:{}
            }, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },

    updateCover: async (portfolioId: string, data: any) => {
        try {
            const token = await getUserToken()
            return Service.update({
                url: `portfolio/coverphoto/${portfolioId}`,
                data: data
            }, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },
    deletePortfolioFiles: async (portfolioId: string, data: any) => {
        try {
            const token = await getUserToken()
            return Service.removeWithBody({
                url: `portfolio/files/${portfolioId}`,
                data: data
            }, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    },
    deletePortfolio: async (portfolioId: string) => {
        try {
            const token = await getUserToken()
            return Service.remove(`portfolio/${portfolioId}`, {
                authorization: token,
            })
        } catch (error) {
            throw error
        }
    }

}

export default PortfolioService;