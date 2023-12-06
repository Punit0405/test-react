import Service from "../../Lib/service";
import { getUserToken } from "../../Utils/helper";

const StudioClientSevice = {
    addClient: async (data: any) => {
        try {
            const token = await getUserToken();
            return Service.post(
                {
                    url: `studiomanagement/client`,
                    data: data,
                },
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },

    getCientList: async (search?: any) => {
        try {
            const searchData = search ? search : "";
            const token = getUserToken();
            return Service.get(`studiomanagement/client${searchData}`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },

    getClientDetails: async (clientId: any) => {
        try {
            const token = await getUserToken();
            return Service.get(`studiomanagement/client/${clientId}`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },

    getQuestionnariesDetails: async (questionnariesId: any) => {
        try {
            const token = await getUserToken();
            return Service.get(
                `studiomanagement/questionanries/${questionnariesId}`,
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },

    getClientQuestionnaries: async (questionnariesId: any) => {
        try {
            return Service.get(
                `client/view/questionnaries/${questionnariesId}`,
                {}
            );
        } catch (error) {
            throw error;
        }
    },

    submitClientQuestionnaries: async (questionnariesId: any, data: any) => {
        try {
            return Service.post({
                url: `client/questionnaries/${questionnariesId}`,
                data: data,
            });
        } catch (error) {
            throw error;
        }
    },

    updateClientDetails: async (clientId: any, data: any) => {
        try {
            const token = await getUserToken();
            return Service.post(
                {
                    url: `studiomanagement/client/${clientId}`,
                    data: data,
                },
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },

    deleteClient: async (clientId: any) => {
        try {
            const token = await getUserToken();
            return Service.remove(`studiomanagement/client/${clientId}`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },

    addSpeciality: async (data: any) => {
        try {
            const token = await getUserToken();
            return Service.post(
                {
                    url: `studiomanagement/speciality`,
                    data: data,
                },
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },

    addQuestionnaries: async (data: any) => {
        try {
            const token = await getUserToken();
            return Service.post(
                {
                    url: `studiomanagement/questionnaries`,
                    data: data,
                },
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },

    getSpeciality: async () => {
        try {
            const token = await getUserToken();
            return Service.get(`studiomanagement/speciality`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },

    getBooking: async () => {
        try {
            const token = await getUserToken();
            return Service.get(`studiomanagement/booking`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },

    updateSpecialityDetails: async (clientId: any, data: any) => {
        try {
            const token = await getUserToken();
            return Service.post(
                {
                    url: `studiomanagement/speciality/${clientId}`,
                    data: data,
                },
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },

    deleteSpeciality: async (clientId: any) => {
        try {
            const token = await getUserToken();
            return Service.remove(`studiomanagement/speciality/${clientId}`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },
    getTemplate: async (search: any) => {
        try {
            const token = await getUserToken();
            return Service.get(`studiomanagement/templates?type=${search}`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },
    updateTemplate: async (data: any) => {
        try {
            const token = await getUserToken();
            return Service.post(
                {
                    url: `studiomanagement/templates`,
                    data: data,
                },
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },

    getQuestionnariesList: async () => {
        try {
            const token = getUserToken();
            return Service.get(`studiomanagement/questionnaries`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },

    getInvoicesList: async () => {
        try {
            const token = getUserToken();
            return Service.get(`studiomanagement/invoice`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },

    getQuotationsList: async () => {
        try {
            const token = getUserToken();
            return Service.get(`studiomanagement/quotation`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },

    getDashboardData: async () => {
        try {
            const token = getUserToken();
            return Service.get(`studiomanagement/dashboard`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },

    addInvoice: async (data: any) => {
        try {
            const token = await getUserToken();
            return Service.post(
                {
                    url: `studiomanagement/invoice`,
                    data: data,
                },
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },

    addQuotation: async (data: any) => {
        try {
            const token = await getUserToken();
            return Service.post(
                {
                    url: `studiomanagement/quotation`,
                    data: data,
                },
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },

    addBooking: async (data: any) => {
        try {
            const token = await getUserToken();
            return Service.post(
                {
                    url: `studiomanagement/booking`,
                    data: data,
                },
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },

    updateBooking: async (bookingId: any, data: any) => {
        try {
            const token = await getUserToken();
            return Service.post(
                {
                    url: `studiomanagement/booking/${bookingId}`,
                    data: data,
                },
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },

    deleteBooking: async (clientId: any) => {
        try {
            const token = await getUserToken();
            return Service.remove(`studiomanagement/booking/${clientId}`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },

    getInvoiceDetails: async (invoiceId: any) => {
        try {
            const token = await getUserToken();
            return Service.get(`studiomanagement/invoice/${invoiceId}`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },

    getQuotationDetails: async (invoiceId: any) => {
        try {
            const token = await getUserToken();
            return Service.get(`studiomanagement/quotation/${invoiceId}`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },

    updateInvoiceDetails: async (invoiceId: any, data: any) => {
        try {
            const token = await getUserToken();
            return Service.post(
                {
                    url: `studiomanagement/invoice/${invoiceId}`,
                    data: data,
                },
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },

    updateQuotationDetails: async (invoiceId: any, data: any) => {
        try {
            const token = await getUserToken();
            return Service.post(
                {
                    url: `studiomanagement/quotation/${invoiceId}`,
                    data: data,
                },
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },

    deleteInvoice: async (id: any) => {
        try {
            const token = getUserToken();
            return Service.remove(`studiomanagement/invoice/${id}`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },

    deleteQuotation: async (id: any) => {
        try {
            const token = getUserToken();
            return Service.remove(`studiomanagement/quotation/${id}`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },

    deleteQuestionnaires: async (id: any) => {
        try {
            const token = getUserToken();
            return Service.remove(`studiomanagement/questionnaries/${id}`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },
};

export default StudioClientSevice;
