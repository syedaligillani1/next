
export default function page({params} : {params : string[]}) {


  return (
    <div>
      <h1>ICC {params.series[0]}</h1>
      <h1>World Cup {params.series[1]}</h1>
    </div>
  )
}
