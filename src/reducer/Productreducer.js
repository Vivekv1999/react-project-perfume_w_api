const Productreducer = (state, action) => {

    // if (action.type === "set_loading") {
    //     return { ...state, isloading: true }
    // }

    switch (action.type) {
        case "set_loading":
            return {
                ...state, isloading: true
            }

        case "api_data":
            const dipalyprd=action.payload.filter((item)=>{
                return item.displayfront===true;
            })
            return {
                ...state,
                product: action.payload,
                diplayproduct:dipalyprd
            }

        case "api_errror":
            return {
                ...state, iserror: true
            }



        case "set_singleloading":
            return {
                ...state, issingleloading: true
            }

        case "set_single_product":
            return {
                ...state,
                issingleloading: false,
                singleproduct: action.payload,
            }

        case "set_single_errror":
            return {
                ...state, iserror: true
            }



        default:
            return state
            
    }

}

export default Productreducer;