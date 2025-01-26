function Web() {

    const projects = [
        {
            id: 1,
            img: <img src="/images/web1.png"><a href="https://construction-website-gamma-ruby.vercel.app/"></a></img>,
            name: "Furniture Website",
            lang: "HTML,SCSS,Bootstrap",
            technologies: {
                1: "Responsive",
                2: "Advanced CSS",
                3: "Animation",
                4: "Framework"
            },
        },
        {
            id: 2,
            img: <img src="/images/web2.png"></img>,
            name: "Hacker Login Page",
            lang: "HTML,SCSS",
            technologies: {
                1: "Responsive",
                2: "Advanced CSS",
                3: "Animation"
            },
        },
        {
            id: 3,
            img: <img src="/images/web3.png"></img>,
            name: "Online Food Order",
            lang: "HTML,CSS,Advanced CSS",
            technologies: {
                1: "Responsive",
                2: "Advanced CSS",
                3: "Animation",
            },
        },
        {
            id: 4,
            img: <img src="/images/web4.png"></img>,
            name: "Calculator",
            lang: "HTML,CSS,JavaScript",
            technologies: {
                1: "Functionality",
                2: "Responsive",
                3: "Calculation"
            },
        }

    ]

    return (
        <>
            <div className="grid grid-cols-3 gap-x-5 gap-y-5 pt-6">
                <a href="https://construction-website-gamma-ruby.vercel.app/">
                    <div className="flex flex-col justify-start">
                        {
                            projects.map((project) =>
                                <div key={project?.id}>
                                    <div className="flex flex-col justify-start items-start p-5">
                                        <div className="flex">{project?.img}</div>
                                        <h1 className="text-xl font-bold">{project?.name}</h1>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </a>
            </div>
        </>

    )
}
export default Web