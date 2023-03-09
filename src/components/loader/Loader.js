import { ThreeDots } from "react-loader-spinner";

function showLoader() {
    return (
        <ThreeDots height="70" width="70" radius="9"
            color="#3f51b5" ariaLabel="three-dots-loading"
            wrapperStyle={{ marginLeft: "auto", marginRight: "auto" }}
            visible={true} />
    )
}

export default showLoader;