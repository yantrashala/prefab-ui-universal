/**@jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { jsx, css } from "@emotion/core";
import Link from "next/link";
const navItemStyle = css`
  color: #fff;
  font-size: 1.3em;
  font-weight: bold;
  text-transform: capitalize;
  text-decoration: none;
  width: 100px;
  height: 18px;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.3s;
`;

const NavItem = ({ index, active, linkName, onClick }) => (
  <React.Fragment>
    <Link href={linkName.url}>
      <a css={navItemStyle}> {linkName.title}</a>
    </Link>
    {/* <a href={linkName.url} onClick={() => onClick(index)} css={navItem}>
      {linkName.title}
    </a> */}
  </React.Fragment>
);

NavItem.propTypes = {
  active: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

NavItem.defaultProps = {
  active: false,
  onClick: () => {}
};

export default NavItem;
