const INITIAL_STATE: any = {
    portfolio: {}
}


const changePortfolio = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case "selectPortfolio":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default changePortfolio;