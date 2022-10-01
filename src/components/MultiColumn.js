import '../styles/multiColumn.css'
import SpaceOne from '../img/one.jpeg'
import SpaceTwo from '../img/two.jpeg'
import SpaceThree from '../img/three.jpeg'
import Featured from '../img/featured.jpeg'
import React from 'react'

export default function MultiColumn() {
    return (
        <div>
            <header>
                <h1>Header</h1>
            </header>
            <div className='grid-container'>
                <article className='featured'>
                    <img src={Featured} alt='space featured'></img>
                    <div>
                        <h2>Space picture featured</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Recusandae ducimus fuga mollitia distinctio modi incidunt praesentium cumque accusantium dignissimos explicabo doloremque tempora nihil,
                            in minima neque similique rem reiciendis iusto!</p>
                    </div>
                </article>
                <article>
                    <img src={SpaceOne} alt='space one'></img>
                    <div>
                        <h3>Space picture one</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Harum, molestias quo ipsum consequatur eius tempore corporis consectetur nisi aperiam magnam.</p>
                    </div>
                </article>
                <article>
                    <img src={SpaceTwo} alt='space two'></img>
                    <div>
                        <h3>Space picture two</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Harum, molestias quo ipsum consequatur eius tempore corporis consectetur nisi aperiam magnam.</p>
                    </div>
                </article>
                <article>
                    <img src={SpaceThree} alt='space three'></img>
                    <div>
                        <h3>Space picture three</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Harum, molestias quo ipsum consequatur eius tempore corporis consectetur nisi aperiam magnam.</p>
                    </div>
                </article>
            </div>
        </div>
    )
}
