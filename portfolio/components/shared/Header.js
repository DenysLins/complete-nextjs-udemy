import React from "react";
import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      <>
        <Link href="/">
          <a style={{ fontSize: "40px" }}> Home </a>
        </Link>
        <Link href="/blogs">
          <a className="custom"> Blogs </a>
        </Link>
        <Link href="/portfolios">
          <a> Portfolios </a>
        </Link>
        <Link href="/cv">
          <a> CV </a>
        </Link>
        <Link href="/about">
          <a> About </a>
        </Link>

        <style jsx="true">
          {`
            a {
              font-size: 20px;
            }

            .custom {
              font-weight: bold;
              font-style: italic;
            }
          `}
        </style>
      </>
    );
  }
}

export default Header;
