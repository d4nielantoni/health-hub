import styles from "./footer.module.css"

export default function Footer() {
  return (
        <footer className="bg-body-tertiary text-center text-lg-start" style={{fontSize:"0.8rem"}}>
            <div className="text-center p-3">
                © 2024 Copyright: 
                <a className="text-body" href="https://mdbootstrap.com/">HealthHub.com</a>
            </div>
        </footer>
  );
}
