import { Link } from "react-router-dom";

type AuthProps = {
    isLogin?: boolean;
};

function Auth({ isLogin }: AuthProps) {
    return (
        <div className="bg-gray-50 py-8 flex flex-col items-center justify-center gap-8">
            <h2 className="text-3xl font-bold">
                {isLogin ? "Bienvenido de Vuelta" : "Crea tu cuenta"}
            </h2>
            <div className="w-2/5 border border-gray-200 rounded-md bg-white p-8 flex flex-col gap-4">
                {isLogin ? (
                    <>
                        <label className="flex flex-col gap-4">
                            <span className="font-bold">
                                Correo Electrónico
                            </span>
                            <input className="rounded border border-gray-300 py-3 px-4" />
                        </label>
                        <label className="flex flex-col gap-4">
                            <span className="font-bold">Contraseña</span>
                            <input
                                type="password"
                                className="rounded border border-gray-300 py-3 px-4"
                            />
                        </label>
                        <div className="flex justify-end">
                            <span className="text-blue-600 font-semibold cursor-pointer">
                                ¿Olvidaste la contraseña?
                            </span>
                        </div>
                        <button className="bg-blue-600 text-white font-semibold rounded py-3">
                            Iniciar Sesión
                        </button>
                    </>
                ) : (
                    <>
                        <label className="flex-1 flex flex-col gap-4">
                            <span className="font-bold">Nombre</span>
                            <input className="rounded border border-gray-300 py-3 px-4" />
                        </label>
                        <label className="flex-1 flex flex-col gap-4">
                            <span className="font-bold">Apellido</span>
                            <input className="rounded border border-gray-300 py-3 px-4" />
                        </label>
                        <label className="flex flex-col gap-4">
                            <span className="font-bold">
                                Correo Electrónico
                            </span>
                            <input className="rounded border border-gray-300 py-3 px-4" />
                        </label>
                        <label className="flex flex-col gap-4">
                            <span className="font-bold">Contraseña</span>
                            <input
                                type="password"
                                className="rounded border border-gray-300 py-3 px-4"
                            />
                        </label>
                        <small className="text-gray-600">
                            Tu contraseña debe tener:
                            <ul className="list-item ml-2">
                                <li className="list-disc ml-3">
                                    Entre 8 a 16 carácteres
                                </li>
                                <li className="list-disc ml-3">
                                    Debe contener números y letras
                                </li>
                                <li className="list-disc ml-3">
                                    No debe contener tu nombre o email
                                </li>
                            </ul>
                        </small>
                        <p>
                            Al continuar, estas aceptando nuestros{" "}
                            <span className="text-blue-600 underline">
                                Términos y condiciones
                            </span>{" "}
                            y nuestras{" "}
                            <span className="text-blue-600 underline">
                                Políticas de privacidad.
                            </span>
                        </p>
                        <button className="bg-blue-600 text-white font-semibold rounded py-3">
                            Crear cuenta
                        </button>
                    </>
                )}
            </div>
            <div className="my-4">
                {isLogin ? (
                    <div className="flex justify-center gap-2">
                        ¿No tienes una cuenta?
                        <Link
                            to="/register"
                            className="text-blue-600 font-semibold cursor-pointer"
                        >
                            Registrate
                        </Link>
                    </div>
                ) : (
                    <div className="flex justify-center gap-2">
                        ¿Ya tienes una cuenta?
                        <Link
                            to="/login"
                            className="text-blue-600 font-semibold cursor-pointer"
                        >
                            Iniciar Sesión
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Auth;
