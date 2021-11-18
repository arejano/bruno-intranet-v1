import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={1366} transition="0.5s ease-out">
      <Box margin="">
        <NavBar />
        <Header />
        <Box as="main" marginY={22}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
