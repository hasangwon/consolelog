import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
        <div className="bg-red-100 h-[5%]">header</div>
        <div className="flex flex-row bg-blue-100 h-[95%]">
            <div className="bg-gray-100 flex-1 overflow-hidden">
                <img src="/leftBG.png" className="h-full" alt="image"/>
            </div>
            <div className="flex flex-col bg-yellow-100 w-[80%]">
                <div className="border h-[4rem]">2</div>
                <div className="flex flex-row border flex-1">
                    <div className="w-[13rem] border">2-1</div>
                    <div className="w-full border">
                        <div className="w-full h-[75%] border">code</div>
                        <div className="w-full h-[25%] border">terminal</div>
                    </div>
                </div>
            </div>
            <div className="bg-purple-100 flex-1">3</div>
        </div>
    </div>
  )
}

export default Home
