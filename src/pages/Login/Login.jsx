import google from "../../assets/google.svg"
import facebook from "../../assets/facebook.svg"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"


export default function Login() {
    return (
    <div class="container" id="container">
        <div class="form-container sign-up">
            <form>
                <h1>Criar conta</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><img src={google}></img></a>
                    <a href="#" class="icon"><img src={facebook}></img></a>
                    <a href="#" class="icon"><img src={github}></img></a>
                    <a href="#" class="icon"><img src={linkedin}></img></a>
                </div>
                <span>ou use o seu email para registrar</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form>
                <h1>Sign In</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><img src={google}></img></a>
                    <a href="#" class="icon"><img src={facebook}></img></a>
                    <a href="#" class="icon"><img src={github}></img></a>
                    <a href="#" class="icon"><img src={linkedin}></img></a>
                </div>
                <span>ou use o seu email e senha</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <a href="#">Esqueceu sua senha?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Bem-vindo de volta!</h1>
                    <p>Entre na sua conta pessoal para usar o site.</p>
                    <button className="hidden" id="login">Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Olá, amigo!</h1>
                    <p>Registre com sua conta pessoal para usar o site.</p>
                    <button className="hidden" id="register">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    )
}