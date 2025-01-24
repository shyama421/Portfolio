import { Progress } from "@mantine/core"

const frontEnd = [
    {
        id: 1,
        name: "HTML",
        value: 90,
        color: "#f06529"
    },
    {
        id: 2,
        name: "CSS",
        value: 85,
        color: "#264de4"
    },
    {
        id: 3,
        name: "Bootstrap",
        value: 80,
        color: "#563d7c"
    },
    {
        id: 4,
        name: "JavaScript",
        value: 70,
        color: "#F0DB4F"
    },
    {
        id: 5,
        name: "React",
        value: 90,
        color: "#0E8EE9"
    }
]
const backEnd = [

    {
        id: 1,
        name: "Node",
        value: 50,
        color: "#3c873a"
    },
    {
        id: 2,
        name: "PHP",
        value: 45,
        color: "#8993be"
    }
]
const other = [
    {
        id: 1,
        name: "GitHub",
        value: 60,
        color: "#2b3137"
    },
    {
        id: 2,
        name: "Visual Studio",
        value: 90,
        color: "#0078d7"
    },
    {
        id: 3,
        name: "Illustrator",
        value: 60,
        color: "#945c04"
    },
    {
        id: 4,
        name: "Canva",
        value: 95,
        color: "#99C5E9"
    }
]
function Skill() {
    return (
        <>
            <div className="flex flex-col justify-center items-start p-20 max-lg:p-12 max-sm:p-6 max-sm:pt-14">
                <h1 className="text-gray-500 text-xs uppercase pb-4 animate__animated animate__fadeInUp">
                    My Specialty
                </h1>
                <h2 className="uppercase text-lg font-serif pb-4 animate__animated animate__fadeInUp">
                    My Skills
                </h2>
                <div className="text-[15px] leading-relaxed Quicksand_Book font-bold text-gray-700">
                    <p className="pt-4 animate__animated animate__fadeInUp w-[100%] sm:w-[70%]">
                        The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn&#39;t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
                    </p>

                </div>

                <div className="flex justify-between align-baseline w-[90%] max-sm:grid max-sm:grid-cols-1 max-sm:p-2">
                    <div className="flex  flex-col pt-10 animate__animated animate__zoomIn">
                        <h1 className="text-xl pb-5 font-bold text-slate-700 w-[200px] lg:text-nowrap">Front-End Devlopment </h1>
                        <div className="grid grid-cols-1  gap-y-5">
                            {
                                frontEnd.map((progress) =>
                                    <div key={progress?.id} className="flex flex-col max-lg:w-[70%]">
                                        <h1 className="Quicksand_Book font-bold text-nowrap">{progress?.name}</h1>
                                        <h1> <Progress value={progress?.value} color={progress?.color} /></h1>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="flex  flex-col pt-10 animate__animated animate__zoomIn">
                        <h1 className="text-xl pb-5 font-bold text-slate-700 w-[200px] lg:text-nowrap">Back-End Devlopment </h1>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-5">
                            {
                                backEnd.map((progress) =>
                                    <div key={progress?.id} className="flex flex-col max-lg:w-[70%]">
                                        <h1 className="Quicksand_Book font-bold text-nowrap ">{progress?.name}</h1>
                                        <h1> <Progress value={progress?.value} color={progress?.color} /></h1>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="flex  flex-col pt-10 animate__animated animate__zoomIn">
                        <h1 className="text-xl pb-5 font-bold text-slate-700 w-[200px] lg:text-nowrap">Other Tools</h1>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-5">
                            {
                                other.map((progress) =>
                                    <div key={progress?.id} className="flex flex-col max-lg:w-[70%]">
                                        <h1 className="Quicksand_Book font-bold text-nowrap">{progress?.name}</h1>
                                        <h1> <Progress value={progress?.value} color={progress?.color} /></h1>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Skill