import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <footer>
        <div className={classes.copyright}>
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <a href="https://youtube.com">
              <span>Anass Moussadi</span>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
