import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function Sidebar({ children, pages }) {
    const [isMenuOpen, setIsMenuOpen] = useState(window.screen.width > 640 ? true : false);



    return (
        <>
            <div className="flex">
                <button type='button' onClick={() => setIsMenuOpen(!isMenuOpen)} className='sm:hidden max-sm:absolute z-10'>
                    <FontAwesomeIcon icon={faBars} className="m-4 text-xl cursor-pointer" />
                </button>
                {
                    isMenuOpen && (
                        <div>
                            <button type='button' onClick={() => setIsMenuOpen(!isMenuOpen)} className='sm:hidden max-sm:ms-20 animate__fadeOutLeft'>
                                <FontAwesomeIcon icon={faCircleXmark} className="m-4 text-xl cursor-pointer" />
                            </button>


                            <div className="bg-zinc-100 h-full w-60 max-sm:w-32 max-lg:w-40 max-sm:text-nowrap flex flex-col items-center animate__animated animate__fadeInLeft max-sm:p-6 z-10 pt-20">

                                <img
                                    src="/images/1.webp"
                                    alt="User Profile"
                                    className="rounded-full h-[120px] max-sm:h-[80px] max-lg:h-[70px] mt-5"
                                />
                                <h1 className="PlayfairDisplay-Bold text-2xl font-bold max-sm:text-[14px] max-sm:leading-4">Mahek Goriya</h1>
                                <h3 className="text-sm max-sm:text-xs d-flex justify-center items-center md:leading-loose">React Developer</h3>
                                <div className="flex flex-col justify-center items-center sm:mt-4">
                                    {pages.length === 0 ? (
                                        <p className="text-gray-500">No pages available.</p>
                                    ) : (
                                        pages.map((data) => (
                                            <div key={data.id} className="flex flex-col justify-center items-center">
                                                <Link to={data.path}>
                                                    <h2 className="mt-5 text-xs hover:underline underline-offset-4 text-gray-600 font-semibold active:text-sky-600">
                                                        {data.page}
                                                    </h2>
                                                </Link>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                }


                <div className="flex-1 justify-center items-center h-[100vh] max-sm:justify-center">{children}</div>
            </div>
        </>
    );
}

// PropTypes validation
Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
    pages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            path: PropTypes.string.isRequired,
            page: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Sidebar;

