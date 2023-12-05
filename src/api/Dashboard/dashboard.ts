import Service from "../../Lib/service";
import { getUserToken } from "../../Utils/helper";

const DashboardService = {
    getSummary: async () => {
        try {
            const token = getUserToken();
            return Service.get("dashboard/summary", {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },
    getRecentCustomer: async () => {
        try {
            const token = getUserToken();
            return Service.get("dashboard/recent-customers", {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },
    getUpComingBookings: async (currentDate: any) => {
        try {
            const token = getUserToken();
            return Service.get(
                `dashboard/upcoming-bookings?date=${currentDate}`,
                {
                    authorization: token,
                }
            );
        } catch (error) {
            throw error;
        }
    },
    getUserStorage: async () => {
        try {
            const token = getUserToken();
            return Service.get(`agent/get-remaining-space`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },
    getStorage: async (data: any) => {
        try {
            const token = getUserToken();
            return Service.post(
                {
                    url: `payment/initiate`,
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
    verifyPayment: async (refenence: any) => {
        try {
            const token = getUserToken();
            return Service.get(`payment/verify?reference=${refenence}`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },
    getProfile: async () => {
        try {
            const token = getUserToken();
            return Service.get(`agent/profile`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },
    getPlans: async () => {
        try {
            const token = getUserToken();
            return Service.get(`agent/plans`, {
                authorization: token,
            });
        } catch (error) {
            throw error;
        }
    },
    updateProfile: async (data:any) => {
        try {
            const token = getUserToken();
            return Service.post(
                {
                    url: `agent/profile`,
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
};

export default DashboardService;
