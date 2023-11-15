import Link from 'next/link'

const Menu =_=> {
    return (
        <nav>
            <Link className='link' href='/'>
                <h1>Surface</h1><p>Index</p>
            </Link><hr />
            <Link className='link' href='/members'>
                <h1>Members</h1><p>Membra</p>
            </Link><hr />
            <Link className='link' href='/works'>
                <h1>Our Works</h1><p>Opera Nostra</p>
            </Link><hr />
            <Link className='link' href='/login'>
                <h1>Login</h1><p>Login</p>
            </Link><hr />
            <Link className='link' href='/cnct'>
                <h1>Contact Us</h1><p>Contactus Nos</p>
            </Link>
        </nav>
    );
}

export default Menu