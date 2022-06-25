import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const jobsList = [
    { label: "Electricista" },
    { label: "Mecánico" },
    { label: "Fontanero" },
    { label: "Limpieza de Casas" },
];

const projects = [
    {
        title: "Servicios esenciales para el hogar",
        url: "https://production-next-images-cdn.thumbtack.com/i/392165647539290115/width/320/aspect/8-5.jpeg",
    },
    {
        title: "Mantenimiento al aire libre",
        url: "https://production-next-images-cdn.thumbtack.com/i/404088898316836866/width/320/aspect/8-5.jpeg",
    },
    {
        title: "Pintura de interiores",
        url: "https://production-next-images-cdn.thumbtack.com/i/322004416188653800/width/320/aspect/8-5.jpeg",
    },
];

const services = [
    {
        title: "Electricistas",
        url: "https://production-next-images-cdn.thumbtack.com/i/302057006217199795/width/320/aspect/8-5.jpeg",
    },
    {
        title: "Techadores locales",
        url: "https://production-next-images-cdn.thumbtack.com/i/302056149247590580/width/320/aspect/8-5.jpeg",
    },
    {
        title: "Mudanzas",
        url: "https://production-next-images-cdn.thumbtack.com/i/302055784058904755/width/320/aspect/8-5.jpeg",
    },
];

function Home() {
    return (
        <div className="section-container">
            <div className="section flex items-center hero-height overflow-hidden">
                <div className="w-1/2">
                    <h2 className="w-5/6 font-bold text-4xl mb-8">
                        Encuentre profesionales cerca de su hogar.
                    </h2>
                    <div className="w-5/6">
                        <div className="flex items-center h-12">
                            <div className="w-full shadow border-l border-t border-b border-gray-300 flex items-center rounded h-full bg-white">
                                <Autocomplete
                                    freeSolo
                                    disableClearable
                                    id="combo-box-demo"
                                    options={jobsList}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: "transparent",
                                        "& div": {
                                            width: "100%",
                                            height: "100%",
                                        },
                                        "& input": {
                                            width: "100%",
                                            height: "100%",
                                            paddingLeft: "16px",
                                            backgroundColor: "transparent",
                                        },
                                    }}
                                    renderInput={(params) => (
                                        <div ref={params.InputProps.ref}>
                                            <input
                                                type="text"
                                                {...params.inputProps}
                                                placeholder="Buscar profesional"
                                            />
                                        </div>
                                    )}
                                />
                                <div className="w-px h-2/3 border-l border-gray-300"></div>
                                <div className="text-gray-300 mx-2">
                                    <svg
                                        className="flex flex-shrink-0 gray"
                                        height="18"
                                        width="18"
                                        fill="currentColor"
                                        viewBox="0 0 18 18"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.994 0C4.995 5.135 6.175 3 9 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.996 9.021 4.996 7.25zM8.909 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path>
                                    </svg>
                                </div>

                                <input
                                    className="w-28 h-full"
                                    placeholder="Pais"
                                />
                            </div>
                            <button className="h-full px-4 border border-blue-500 bg-blue-500 text-white font-bold rounded-r">
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <img className="rounded object-cover" src="https://production-next-images-cdn.thumbtack.com/i/453080952111751169/width/640.jpeg" />
                </div>
            </div>
            <div className="section">
                <h3 className="font-bold text-xl">Explora más proyectos</h3>
                <div className="mt-8 flex justify-between">
                    {projects.map((project, index) => (
                        <div key={index}>
                            <img className="rounded" src={project.url} />
                            <h4 className="font-bold mt-4">{project.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section">
                <h3 className="font-bold text-xl">
                    Servicios que también te pueden interesar
                </h3>
                <div className="mt-8 flex justify-between">
                    {services.map((project, index) => (
                        <div key={index}>
                            <img className="rounded" src={project.url} />
                            <h4 className="font-bold mt-4">{project.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section flex gap-8 items-center justify-center">
                <img
                    width="256px"
                    src="https://production-next-images-cdn.thumbtack.com/i/452733542057811980/width/320.png"
                />
                <div className="flex flex-col gap-4 w-1/2">
                    <h3 className="font-bold text-xl">Amplia Cobertura.</h3>
                    <p className="text-gray-600">
                        No hay nada peor que hacerse ilusiones y luego no poder
                        encontrar lo que buscas. Gracias a SafeWork esto no
                        sucederá, desde grandes ciudades hasta los pueblos
                        pequeños, te ayudamos a encontrar profesionales
                        alrededor de todo el pais.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
