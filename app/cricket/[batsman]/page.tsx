export default function Page({ params }: { params: { batsman: string } })
{

    let nums = ['root','smith','kohli']

    if(nums.includes(params.batsman)){

     return <p>Batsman: {params.batsman}</p>;

    }

    else
      return <p>Batsman Not found</p>;


}