const INITIAL_STATE: any = {
    files: {}
}

const setFiles = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case "setFiles":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default setFiles;