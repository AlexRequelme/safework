import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <header className="bg-white h-14 shadow-sm border-b border-gray-200">
            <div className="w-4/5 h-full mx-auto flex items-center justify-between">
                <h1 className="font-bold text-2xl cursor-pointer" onClick={() => navigate("/")}>
                    Safe<span className="text-blue-500">Work</span>{" "}
                </h1>
                <div className="flex gap-4 text-gray-700">
                    <Link
                        to="register"
                        className="cursor-pointer font-bold text-gray-500"
                    >
                        Registrarse
                    </Link>
                    <Link
                        to="login"
                        className="cursor-pointer font-bold text-gray-900"
                    >
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
