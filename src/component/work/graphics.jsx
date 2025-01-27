import { graphicsWork } from "../../utils/data.constants";

const Graphics = () => (
    <div className="flex flex-col justify-center w-[100%]">
        <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-6 max-sm:grid-cols-2 max-sm:justify-center w-[100%]">
            {
                graphicsWork.map((work) =>
                    <div key={work?.id}>
                        <img src={work?.img} alt="design6"
                            className="h-[300px] animate__animated animate__zoomIn transition-all hover:scale-105 max-sm:h-[200px] max-sm:justify-center" />
                    </div>
                )
            }

        </div>
    </div>
);


export default Graphics