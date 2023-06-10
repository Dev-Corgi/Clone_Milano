import React from "react";
import "./Header.css";
import { MenuButton } from "./MenuButton/MenuButton";
import { ContactsButton } from "./ContactsButton/ContactsButton";
import { Logo } from "./Logo/Logo";
export function Header (props) {
  return (
    <div className="header">
        <MenuButton ></MenuButton>
        <Logo ></Logo>
        <ContactsButton ></ContactsButton>
    </div>
  );
};
