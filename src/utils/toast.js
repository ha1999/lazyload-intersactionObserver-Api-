import { toast } from 'react-toastify'

class ToasBase {
    success(text){
        toast.success(text, {
            position: toast.POSITION.TOP_CENTER
        })
    }
    error(text){
        toast.error(text, {
            position: toast.POSITION.TOP_LEFT
        })
    }
}

const toastNotify = new ToasBase()

Object.freeze(toastNotify)

export default toastNotify