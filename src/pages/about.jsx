import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faPhoenixFramework, faSketch } from "@fortawesome/free-brands-svg-icons";

const skills = [
    {
        id: 1,
        skillIcon: <FontAwesomeIcon icon={faLightbulb} className="text-blue-800" />,
        skillName: "Graphic Design"
    },
    {
        id: 2,
        skillIcon: <FontAwesomeIcon icon={faSketch} className="text-red-700" />,
        skillName: "Languages"
    },
    {
        id: 3,
        skillIcon: <FontAwesomeIcon icon={faMicrochip} className="text-yellow-500" />,
        skillName: "Technologies"
    },
    {
        id: 4,
        skillIcon: <FontAwesomeIcon icon={faPhoenixFramework} className="text-purple-700" />,
        skillName: "Frameworks"
    },

]

function About() {

    return (
        <>
            <div className="flex flex-col justify-center items-start max-lg: *:h-[100%] p-20 max-lg:p-12 max-sm:p-6 max-sm:pt-14">
                <h1 className="text-gray-500 text-xs uppercase pb-4 animate__animated animate__fadeInLeft">About Us</h1>
                <h2 className="uppercase text-lg font-serif pb-4 animate__animated animate__fadeInLeft">Who Am I?</h2>
                <div className="text-[15px] leading-relaxed Quicksand_Book font-bold text-gray-700">
                    <h2 className="font-extrabold text-blue-900 text-xl animate__animated animate__fadeInLeft"> Hi, I &#39;m Mahek</h2>
                    <p className="animate__animated animate__fadeInUp">
                        <p className="pt-4 animate__animated animate__fadeIn">
                            A passionate web developer with a strong foundation in creating responsive and user-friendly websites.
                        </p>
                        <p className="animate__animated animate__fadeIn">
                            I specialize in front-end development, with experience in HTML, CSS, JavaScript, and popular frameworks like React.
                        </p>
                    </p>
                    <p className="pt-4 animate__animated animate__fadeInUp">
                        I also enjoy working with back-end technologies such as Node.js.
                    </p>
                    <p className="animate__animated animate__fadeInUp">
                        I love solving problems and building projects that make a real impact.
                    </p>
                    <p className="animate__animated animate__fadeInUp">
                        Whether working on a personal project or collaborating with a team,
                    </p>
                    <p className="animate__animated animate__fadeInUp">
                        I&#39;m always excited to learn new technologies and improve my skills.
                    </p>
                    <p className="pt-4 animate__animated animate__fadeInUp">
                        Feel free to browse through my work and get in touch if you&#39;d like to collaborate on a project or learn more about my skills!
                    </p>
                </div>

                <div className="grid grid-cols-2 min-[400px]:grid-cols-3 justify-center items-center gap-4 pt-6 animate__animated animate__fadeInUp sm:grid-cols-4 max-sm:gap-5">
                    {
                        skills.map((skill) =>
                            <div key={skill?.id} className="flex border-b-2 border-blue-800 max-sm:justify-center items-center">
                                <div className="flex flex-col h-[120px] w-[160px] shadow-xl p-4 max-sm:h-[80px] max-sm:w-[120px] max-sm:p-1">
                                    <h1 className="text-3xl">{skill?.skillIcon}</h1>
                                    <h1 className="pt-3 text-nowrap">{skill?.skillName}</h1>
                                </div>
                            </div>
                        )
                    }

                </div>

            </div>


        </>
    )
}

export default About