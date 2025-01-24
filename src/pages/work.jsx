// import { useState } from "react"

import { useState } from "react"
import Graphics from "../component/work/graphics"
import Web from "../component/work/web"

function Work() {
    // const [isGraphicsOpen, setisGraphicsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("graphicDesign")

    const design = [
        {
            id: 1,
            name: "Graphics Design",
            path: "/graphics",
            tabName: "graphicDesign"
        },
        {
            id: 2,
            name: "Web Design",
            path: "/web",
            tabName: "webDesign"
        }
    ]

    return (
        <>
            <div className="flex flex-col justify-center items-start p-20 max-lg:p-12 max-sm:p-6 max-sm:pt-14">
                <h1 className="text-gray-500 text-xs uppercase pb-4 animate__animated animate__fadeInUp">
                    My Work
                </h1>
                <h2 className="uppercase text-lg font-serif pb-4 animate__animated animate__fadeInUp">
                    Recent Work
                </h2>

                <div className="flex gap-10">
                    {
                        design.map((design) =>
                            <div key={design?.id}>
                                <button onClick={() => { setActiveTab(design.tabName) }}>
                                    <h1 className="animate__animated animate__fadeInUp uppercase Quicksand_Book font-bold active:text-sky-600 active:underline">
                                        {design?.name}
                                    </h1>
                                </button>
                            </div>
                        )
                    }
                </div>
                {
                    activeTab === "graphicDesign" ? <Graphics /> : <Web />
                }


            </div >


        </>
    )
}

export default Work
