
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';


export interface HomeInterface {
    title: string | undefined
    category: string | undefined
    rating: number | undefined
    author: string | undefined
    cover_image: string | undefined
    description: string | undefined


}


const HomeProps: React.FC<HomeInterface> = (props) => {
    return (
        <>
            <div className='text-white flex md:flex-row flex-col-reverse items-center md:items-start md:gap-6 mb-10 h-fit '>
                <div className='flex gap-6 flex-col w-11/12'>
                    <h1 className='text-4xl font-bold mt-10'>{props.title}</h1>
                    <ul className='blue_text flex items-center gap-4  md:w-[530px] flex-wrap'>
                        <li>
                            By: <span className='yellow_text'>{props.author}</span>
                        </li>
                        <li>
                            Genre: <span className='yellow_text'>{props.category}</span>
                        </li>
                        <li>
                            <StarBorderIcon />
                            <span className='yellow_text'> {props.rating}</span>/5
                        </li>
                        <li>
                            Totalbooks:
                            <span className='yellow_text'> 10</span>/42
                        </li>
                        <li>
                            Availablebooks:
                            <span className='yellow_text'> 42</span>
                        </li>
                    </ul>
                    <p className='blue_text md:w-[530px] w-96'>
                        {props.description}
                    </p>
                    <button className='btn border-2 w-42 h-10 text-2xl'>Borrow Book</button>
                </div>

                <div
                    className="relative w-11/12"
                    style={{
                        position: 'relative',
                    }}
                >
                    <div
                        className="absolute inset-0 z-[-1]"
                        style={{
                            backgroundImage: `url(${props.cover_image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'absolute',
                            top: '30px',
                            left: '30px',
                            filter: 'blur(10px)',
                            transform: 'rotate(9deg)',
                            width: '400px',
                            height: '100%',
                        }}
                    ></div>

                    <img className="rounded-2xl w-77" src={props.cover_image} alt="book cover" />
                </div>


            </div>
        </>
    )
}

export default HomeProps