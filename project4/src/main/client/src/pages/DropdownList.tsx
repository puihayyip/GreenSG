import { AxiosResponse } from "axios";
import { IUser } from "../interfaces";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import { randomInt } from "crypto";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

function stringToColor(string: string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      cursor: "pointer",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

interface AppProps {
  user: IUser | AxiosResponse;
  setUser: React.Dispatch<React.SetStateAction<IUser | AxiosResponse>>;
}

interface MenuProps {
  currentBooking: boolean;
  bills: boolean;
  editProfile: boolean;
  message: boolean;
}

function DropdownList({ user, setUser }: AppProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<MenuProps>({
    currentBooking: false,
    bills: false,
    editProfile: false,
    message: false,
  });
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const fullName: string =
    (user as IUser).firstName + " " + (user as IUser).lastName;
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Avatar
        {...stringAvatar(fullName)}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            setOpenMenu({ ...openMenu, currentBooking: true });
            handleClose();
          }}
        >
          Current booking
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpenMenu({ ...openMenu, bills: true });
            handleClose();
          }}
        >
          Bills
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpenMenu({ ...openMenu, editProfile: true });
            handleClose();
          }}
        >
          Edit profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpenMenu({ ...openMenu, message: true });
            handleClose();
          }}
        >
          Messages
        </MenuItem>
        <MenuItem
          onClick={() => {
            setUser({
              id: 0,
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              car: {
                id: 0,
                carplate: "",
                location: 0,
                startTime: "",
                endTime: "",
              },
            });
            setAnchorEl(null);
          }}
        >
          Logout
        </MenuItem>
      </Menu>
      <p style={{ color: "white", fontWeight: "bolder", fontSize: "1.2rem" }}>
        {(user as IUser).firstName} {(user as IUser).lastName}
      </p>
    </div>
  );
}

export default DropdownList;
