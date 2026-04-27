import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useState, MouseEvent, Fragment } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

const pages = ["Home", "Resume", "Projects", "Contact"];

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  const isActive = (page: string) => {
    if (page === "Home") return location.pathname === "/";
    return location.pathname === `/${page.toLowerCase()}`;
  };

  const handleOpenNavMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handlePageChange = (page: string | null) => {
    if (!page) return;
    setAnchorElNav(null);
    if (page === "Home") return navigate("/");
    navigate(`/${page.toLocaleLowerCase()}`);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Fragment>
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger
            ? "rgba(0, 4, 53, 0.85)"
            : "#000435",
          backdropFilter: trigger ? "blur(12px)" : "none",
          transition:
            "background-color 0.3s, backdrop-filter 0.3s, box-shadow 0.3s",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 4, xl: 8 } }}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Uygur Tepe
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={(e) =>
                      handlePageChange(e.currentTarget.textContent)
                    }
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Uygur Tepe
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={(e) => handlePageChange(e.currentTarget.textContent)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 6,
                      left: "50%",
                      transform: isActive(page)
                        ? "translateX(-50%) scaleX(1)"
                        : "translateX(-50%) scaleX(0)",
                      transformOrigin: "center",
                      width: "60%",
                      height: "2px",
                      backgroundColor: "white",
                      transition: "transform 0.25s ease",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ px: { xs: 2, md: 4, xl: 8 }, minHeight: "calc(100vh - 64px - 80px)" }}>
        <Outlet />
      </Box>
      <Footer title={"Uygur Tepe Portfolio"} />
    </Fragment>
  );
};

export default NavigationBar;
