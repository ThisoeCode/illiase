import Link from 'next/link'
import Image from 'next/image';

const Mem =_=> {
    return (
        <div id='illiase-mem'>
            <Link href='/bn' style={{background: 'linear-gradient(to right, #75ff7f, #85ffaa)'}}>
                <Image src="/ava/bn.jpg"  width='144' height='144' />
                <section>
                    <div>
                        <h1>BN</h1>
                        <h2>#群主</h2>
                    </div>
                    <p>discriptions</p>
                </section>
            </Link>
            <Link href='/bistard' style={{background: 'linear-gradient(to right, #ffaeaa, #ffeaaa)'}}>
                <Image src="/ava/bistard.jpg" width='144' height='144' />
                <section>
                    <div>
                        <h1>bistard</h1>
                        <h2>#创作</h2>
                    </div>
                    <p>discriptions</p>
                </section>
            </Link>
            <Link href='/tsk' style={{background: 'linear-gradient(to right, #5757ff, #8a8aff)'}}>
                <Image src="/ava/tsk.jpg"  width='144' height='144' />
                <section>
                    <div>
                        <h1>TSK</h1>
                        <h2>#码猿</h2>
                    </div>
                    <p>discriptions</p>
                </section>
            </Link>
            <Link href='/jerry' style={{background: 'linear-gradient(to right, #75c5ff, aqua)'}}>
                <Image src="/ava/jerry.jpg"  width='144' height='144' />
                <section>
                    <div>
                        <h1>Jerry</h1>
                        <h2>#建模</h2>
                    </div>
                    <p>discriptions</p>
                </section>
            </Link>
            <Link href='/jeff' style={{background: 'linear-gradient(to right, #789, #aab)'}}>
                <Image src="/ava/jeff.jpg"  width='144' height='144' />
                <section>
                    <div>
                        <h1>Jeff</h1>
                        <h2>#番长</h2>
                    </div>
                    <p>discriptions</p>
                </section>
            </Link>
        </div>
    );
}
 
export default Mem;