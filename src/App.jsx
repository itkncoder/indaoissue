import { useState } from "react"
import logorounded from "../src/assets/logorounded.png"
import QrModal from "./components/qrmodal"

const App = () => {

    const [addid, setAppId] = useState()
    const [appkey, setAppKey] = useState()
    const [vcid, setVcId] = useState()
    const [email, setEmail] = useState()
    const [year, setYear] = useState()
    const [did, setDid] = useState()

    const [isGraduated, setGraduated] = useState(true)

    const [isError, setError] = useState(false)

    const fetchData = () => {
        if (addid && appkey && vcid && email && year && did) {
            document.getElementById('qrcodemodal').showModal()
        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
    }

    return (
        <div className="min-h-screen app flex justify-center items-center" >
            <div className="bg-[#FFFFFF] py-[50px] px-[20px] lg:px-[80px] lg:rounded-[40px] shadow-xl" >
                <div className="flex justify-center flex-col items-center" >
                    <img src={logorounded} alt="logo" className="w-[120px] lg:w-[250px]" />
                    <h2 className="text-[#006BFF] hidden lg:block text-[20px] font-[700] mt-[30px]">Issuing VC to specific student</h2>
                    <div className="mt-[30px]">
                        <div className="flex justify-around items-center flex-col lg:flex-row gap-[25px] lg:gap-[50px]" >
                            <div>
                                <p className="text-[12px] font-[500]">AppId</p>
                                <input value={addid} onChange={e => setAppId(e.target.value)} type="text" placeholder="javokhir@inha.uz" className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                            </div>
                            <div>
                                <p className="text-[12px] font-[500]">ApiKey</p>
                                <input value={appkey} onChange={e => setAppKey(e.target.value)} type="text" placeholder="" className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                            </div>
                        </div>
                        <div className="flex justify-around items-center flex-col lg:flex-row gap-[25px] lg:gap-[50px] mt-[20px]" >
                            <div>
                                <p className="text-[12px] font-[500]">VC id</p>
                                <input value={vcid} onChange={e => setVcId(e.target.value)} type="text" placeholder="javokhir@inha.uz" className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                                <div className="mt-[6px] flex items-center gap-[6px]" >
                                    <i class="fa-solid fa-circle-info text-xs text-gray-600"></i>
                                    <p className="tex-[14px] font-[300]">VC id</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[12px] font-[500]">Email</p>
                                <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="javokhir@inha.uz" className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                                <div className="mt-[6px] flex items-center gap-[6px]" >
                                    <i class="fa-solid fa-circle-info text-xs text-gray-600"></i>
                                    <p className="tex-[14px] font-[300]">Enter student’s email</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around items-center flex-col lg:flex-row gap-[25px] lg:gap-[50px] mt-[20px]" >
                            <div>
                                <p className="text-[12px] font-[500]">Graduation year</p>
                                <input value={year} onChange={e => setYear(e.target.value)} type="number" placeholder="2025" className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                                <div className="mt-[6px] flex items-center gap-[6px]" >
                                    <i class="fa-solid fa-circle-info text-xs text-gray-600"></i>
                                    <p className="tex-[14px] font-[300]">Student’s graduation year</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[12px] font-[500]">did</p>
                                <input value={did} onChange={e => setDid(e.target.value)} type="text" placeholder="" className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                                <div className="mt-[6px] flex items-center gap-[6px]" >
                                    <i class="fa-solid fa-circle-info text-xs text-gray-600"></i>
                                    <p className="tex-[14px] font-[300]">Student’s did</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start flex-col w-full mt-[20px]" >
                        <p className="text-[14px] font-[500]">Is graduated</p>
                        <input type="checkbox" onInput={() => setGraduated(prev => !prev)} checked={isGraduated ? true : false} className="mt-[6px] checkbox checkbox-md" />
                    </div>
                    <div className="mt-[40px] flex justify-end w-full">
                        <div className="flex items-center gap-[10px] lg:gap-[50px]">
                            <button className="hover:bg-[#C90F1B] btn rounded-[8px] py-[16px] px-[24px] h-auto bg-[#ED0131] text-white text-[14px] lg:text-[16px] font-[600]"><i class="fa-solid fa-circle-xmark"></i> Clear</button>
                            <button onClick={fetchData} className="hover:bg-[#005BDE] btn rounded-[8px] py-[16px] px-[24px] h-auto bg-[#006BFF] text-white text-[14px] lg:text-[16px] font-[600]">Issue credential <i class="ml-1 fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>

                    <QrModal/>

                </div>
            </div>
            <p className="absolute bottom-[25px] hidden lg:block text-[#fff]" >© 2023 Indao.io | All Rights Reserved</p>

            {isError && <div className="toast toast-bottom toast-end">
                <div className="animate-bounce duration-75 alert alert-error outline-none shadow-xl rounded-xl bg-[#ED0131] px-10">
                    <span className="text-white font-[600]">Fill all inputs!</span>
                </div>
            </div>}

        </div>
    )
}

export default App