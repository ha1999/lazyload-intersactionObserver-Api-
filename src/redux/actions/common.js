export const ENABLE_LOADING = 'ENABLE_LOADING'
export const DISABLE_LOADING = 'DISABLE_LOADING'
export const CHANGE_ROUTE = 'CHANGE_ROUTE'


export const enableLoading = () => ({
    type: ENABLE_LOADING
})

export const disableLoading = () => ({
    type: DISABLE_LOADING
})

export const changeRoutePage = (route) => ({
    type: CHANGE_ROUTE,
    payload: route
})