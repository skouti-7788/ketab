import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
// Add relevant imports for slices if needed

export default function useAcheter() {
    const dispatch = useDispatch();
    // Add selectors as needed

    const user = JSON.parse(localStorage.getItem("user")) || {};

    const acheterBook = async (bookId) => {
        try {
            const res = await axios.post("/acheter", {
                user_id: user.id,
                livre_d: bookId,
                date_achat: new Date().toISOString().split('T')[0],
                status: ''
            });
            if (res.data.message) {
                alert(res.data.message);
            }
        } catch (err) {
            console.log("BACKEND RESPONSE:", err.response?.data);
            if (err.response?.data?.message === 'Invalid token') {
                alert("Please log in again");
                // dispatch(setClose(true));
            }
        }
    };

    // Add logic to trigger acheterBook when needed

    return { acheterBook };
}