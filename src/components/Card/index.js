import React from 'react'
import qIMG from '../../assets/qImage.png';
import './style.css';

const Card = () => {
    return (
        <>
            <div className='CardContainer'>
                <div className='Image'>
                    <img src={qIMG} alt='questionImg' className='questionImage'/>
                </div>
                <div className='Card'>
                    <h2 className='questionNum'>Question 1</h2>
                    <h1 className='question'>What is the symbol for the EOS blockchain</h1>
                    <div className='options'>
                        <button className='button'>Chestahedron</button>
                        <button className='button'>Tetrahedron</button>
                        <button className='button'>Dodecahedron</button>
                        <button className='button'>Polyhedron</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
