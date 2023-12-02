import { useRouter } from 'next/router'
export default ({works})=>{
  const r=useRouter()
  const link=_=>{
    r.push(`/works/${works.id}`)
  }
  return(
    <div id="illiase-main">
      <article>
        <h1>测试-标题</h1>
        <p>劳伦伊松里伊利亚斯，向西索之果绽放。其浆味万千，也不键入高峰，以为体乏却将弧形容和杯匙分载，甘溪汩下。客机于嵌珖纸筒，如霓型，就陷入伊松奈柏杨。时端灵器适时用紫麻加粽、混在极度凌钢，同一碎砂南极化，并倾杯匙。</p>
      </article>
      <article>
        <h1>Title TEST</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque provident dicta quisquam sit, voluptatem placeat natus praesentium, iste necessitatibus aliquam dignissimos exercitationem amet quibusdam ratione quae eius odio, qui eligendi?</p>
      </article>
      <figure>
        <img src='/i/con2.png'
          alt='history of Illiase icon'
          loading="lazy" decoding="async" />
        <figcaption>ART POST TEMPLATE TEST<br/>Illiase current icon</figcaption>
      </figure>
    </div>
  )
}
