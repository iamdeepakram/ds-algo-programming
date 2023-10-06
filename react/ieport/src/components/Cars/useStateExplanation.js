function useState(initialVal){
    const state = {
        val : initialVal;
        setState : function (newVal){
            state.val = newVal;
        }
    }
    return [state.val, state.setState]
}


