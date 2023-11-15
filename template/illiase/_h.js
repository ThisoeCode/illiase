import Link from 'next/link'

const Headbar =_=> {
    return (
        <header>
            <Link className='link' href="/"><figure>
                <img src="/i/con2.png" alt="Illiase icon" />
                <figcaption>ILLIASE</figcaption>
            </figure></Link>
        </header>
    );
}
 
export default Headbar;