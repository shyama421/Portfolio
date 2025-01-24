import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useState } from 'react';

const degrees = [
    {
        id: 1,
        degree: "Full Stack Development Course",
        institution: "Institution : At Creative Insight IT Academy",
        content: "With a strong foundation in both front-end and back-end technologies. I specialize in building responsive, user-friendly Website while ensuring scalable and efficient backend systems.",
        year: "Year : 2024",
    },
    {
        id: 2,
        degree: "Bachelor of Technology in Computer Science",
        institution: "Institution : At Saurashtra University",
        content: "Comprehensive understanding of computer science fundamentals, programming, and software development",
        year: "Year : 2022",
    },
    {
        id: 3,
        degree: "Higher Secondary Education",
        institution: "Institution : Dholakiya School",
        stream: "Stream : Commarce",
        content: "Awarded Certificate for Drama in National Leval.",
        year: "Year : 2021",
    },
    {
        id: 4,
        degree: "Secondary School Education",
        institution: "Institution : Dholakiya School",
        content: "Awarded Certificate for Dance in State Level. Collaborated with educational institutions to improve SSC-focused curriculum delivery.",
        year: "Year : 2019",
    },
];

function Education() {
    const [openedId, setOpenedId] = useState(null);

    const toggle = (id) => {
        setOpenedId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="flex flex-col justify-center items-start p-20 max-lg:p-12 max-sm:p-6 h-[100vh] max-sm:items-center max-sm:h-[70vh]">
            <h1 className="text-gray-500 text-xs uppercase pb-4 animate__animated animate__fadeInUp max-sm:p-1">
                Education
            </h1>
            <h2 className="uppercase text-lg font-serif pb-4 animate__animated animate__fadeInUp">
                Education
            </h2>

            <div className="flex flex-col w-[100%] justify-start items-start gap-4 max-sm:justify-center max-sm:items-center">
                {degrees.map((degree) => (
                    <div key={degree.id} className='w-[50vw] max-sm:w-[64vw] flex flex-col p-2 border bg-zinc-200 border-slate-300 active:bg-gray-300 animate__animated animate__zoomIn '>
                        <Box>
                            <Group className='flex Quicksand_Book font-bold'>
                                <div className='flex justify-between items-center w-[100%] text-[15px] uppercase text-sky-700 Quicksand_Book max-sm:text-[12px] '>{degree?.degree}
                                    <Button onClick={() => toggle(degree.id)} className='w-[500px] overflow-visible max-sm:w-[60px]' style={{ overflow: 'visible' }}>{<FontAwesomeIcon icon={faAngleDown} />}</Button>
                                </div>
                            </Group>

                            <Collapse in={openedId === degree?.id}>
                                <div className='flex flex-col'>
                                    <Text className='font-sans'>{degree?.institution}</Text>
                                    <Text className='font-sans'>{degree?.year}</Text>
                                    <Text className='font-sans' >{degree?.stream}</Text>
                                    <Text className='font-sans'>{degree?.content}</Text>

                                </div>
                            </Collapse>
                        </Box>
                    </div>
                )
                )
                }
            </div>
        </div >
    );
}

export default Education;
