import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes = () => {

    const trainerName = useSelector(store => store.trainerName)
  
    if(trainerName.length > 2) {
        return <Outlet />
    } else {
        Swal.fire({
           icon: "error",
           title: "Please type at least 3 characters in your name",
           timer: 1500
        });
        return (
        <Navigate to='/'/>
        )
    }

}

export default ProtectedRoutes