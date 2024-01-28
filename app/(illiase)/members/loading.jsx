export default function memSkeleton(){
  const imageElements =(_=>{
    const ele = (
      <a style={{backgroundColor:'#aaa7'}}>
        <div id="mem-skeleton-img"/>
        <article>
          <div>
            <h1>{' '}</h1>
            <h2>{' '}</h2>
          </div>
        </article>
      </a>
    )
    let i =[]
    for (let n=0; n<3; n++){i.push(ele)}
    return i
  })()

  return <div id="titlewrap">
    <h1 id="headtitle">Members</h1>
    <section id="mem">
      {imageElements}
    </section>
  </div>
}