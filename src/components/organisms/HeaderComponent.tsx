import { Link } from "react-router-dom";
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import DrawerMenu from "../molecules/DrawerMenu";

function HeaderComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [{ label: "Works", url: "/works" }];

  return (
    <div>
      <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        navItems={navItems}
      />
      <div className="flex items-center justify-between lg:px-[150px] px-6 md:px-4 py-4 border-b">
        <div className="flex md:hidden">
          <IconButton
            variant="plain"
            color="neutral"
            onClick={() => setIsDrawerOpen(true)}
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
                boxShadow: "none",
                color: "inherit",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="flex items-center justify-center flex-1 md:justify-start">
          <Link to="/">
            <img
              src="https://www.titmousestuff.com/cdn/shop/files/titmouse-stuff-logo.svg?v=1684818377&width=150"
              alt=""
              className="hidden md:block w-[150px]"
            />
          </Link>
          <img
            src="https://www.titmousestuff.com/cdn/shop/files/titmouse-stuff-logo.svg?v=1684818377&width=120"
            alt=""
            className="block md:hidden absolute left-1/2 -translate-x-1/2 w-[120px]"
          />
          <div className="hidden md:flex md:ml-6">
            {navItems.map((item, index) => (
              <Link key={index} to={item.url} className="px-4 py-2">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex md:hidden gap-2">
            <IconButton
              variant="plain"
              color="neutral"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  color: "inherit",
                },
              }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              variant="plain"
              color="neutral"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  color: "inherit",
                },
              }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <IconButton
              variant="plain"
              color="neutral"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  color: "inherit",
                },
              }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              variant="plain"
              color="neutral"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  color: "inherit",
                },
              }}
            >
              <AccountCircleIcon />
            </IconButton>
            <IconButton
              variant="plain"
              color="neutral"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  color: "inherit",
                },
              }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
