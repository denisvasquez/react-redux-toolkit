import Navigation from "../components/Navigation";
import Box from "@mui/material/Box";

const Layout = ({ children }) => {
    return (
        <Box sx={{mx: 10, my: 15}}>
            <Navigation></Navigation>
            <div className="container">{children}</div>
        </Box>
    );
};

export default Layout;
