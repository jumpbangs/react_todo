import React from "react";
import { Grid } from "@material-ui/core";

function Footer() {
  return (
    <footer className="footerStyle">
      <Grid container direction="row" spacing={3}>
        <Grid item xs={7}>
          <h3>
            <a
              className="footerLogo"
              href="https://jumpbangs.github.io/react_todo/"
            >
              Todo List
            </a>
          </h3>
        </Grid>
        <Grid item xs={5}>
          <ul>
            <li>
              <a href="https://github.com/jumpbangs/react_todo">
                Github Repo Page
              </a>
            </li>
            <li>Links</li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
