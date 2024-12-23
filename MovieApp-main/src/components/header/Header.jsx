/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  //here we use USELOCATION because in react when route changes pages not render so when you are in middle of page and we hit another route toh aapka cursor usi jgh rahega so this is used to reset your cursor location
  //if we not use useEffect to setLoaction then it gives error that too many rerenders cause

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  //code for scrolling like when we scroll top to bottom then our navItem hide
  const controlNavigation = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 150) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY); //it is used to reset lastScrollY Positon
    // console.log(lastScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavigation);
    //cleanup function for eventListener
    return () => {
      removeEventListener("scroll", controlNavigation);
    };
  }, [lastScrollY]);

  //code for searchquery

  const searchQueryHandler = (event) => {
    console.log(event);
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      });
    }
  };

  //code for hide/show searchbox
  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  //code for hide/show mobile menu
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  //handling navigating pages
  const naviGationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} onClick={() => navigate("/")} />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => naviGationHandler("movie")}>
            Movies
          </li>
          <li className="menuItem" onClick={() => naviGationHandler("tv")}>
            Tv Shows
          </li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or Tv show"
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
