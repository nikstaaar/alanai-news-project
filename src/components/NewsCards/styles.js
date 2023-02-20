import { makeStyles } from "@mui/styles"

export default makeStyles({
    container: {
        padding: "0 5%",
        width: "100%",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "10%",
        borderRadius: "5%",
        color: "white"
    },

    infoContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
    },

    infoCard: {
        display: "flex",
        flexDirection: "column",
        columnGap: "10%",
        alignItems: "top",
        width: "100%",
        height: "100%",
        padding: "5%",
        borderRadius: "1.5%",
        backgroundColor: "white",
        color: "black",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    },

});