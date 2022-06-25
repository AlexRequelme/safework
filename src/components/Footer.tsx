function Footer() {
    return (
        <footer className="w-full bg-white py-10">
            <div className="w-4/5 mx-auto flex justify-between">
                <div className="flex flex-col gap-2 text-gray-800 font-medium">
                    <h3 className="font-bold text-gray-900">SafeWork</h3>
                    <p>Nosotros</p>
                    <p>Carreras</p>
                    <p>Prensa</p>
                    <p>Blog</p>
                </div>
                <div className="flex flex-col gap-2 text-gray-800 font-medium">
                    <h3 className="font-bold text-gray-900">Clientes</h3>
                    <p>Como funciona</p>
                    <p>Registro</p>
                    <p>Costo estimado</p>
                    <p>Guias de proyectos</p>
                </div>
                <div className="flex flex-col gap-2 text-gray-800 font-medium">
                    <h3 className="font-bold text-gray-900">Profesionales</h3>
                    <p>Como funciona</p>
                    <p>Registro</p>
                    <p>Comunidad</p>
                    <p>Historias de éxito</p>
                </div>
                <div className="flex flex-col gap-2 text-gray-800 font-medium">
                    <h3 className="font-bold text-gray-900">Soporte</h3>
                    <p>Ayuda</p>
                    <p>Seguridad</p>
                    <p>Términos de uso</p>
                    <p>Política de privacidad</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
