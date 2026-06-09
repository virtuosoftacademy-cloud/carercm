import Image from "next/image";
const Contact = () => {
    return (
        <>
            <div className="bg-[#2166AF0D] p-4 sm:p-12 xl:min-h-[650px]">
                <div className="block xl:hidden">
                    <div className="w-full rounded-2xl overflow-hidden mb-6">
                        <Image
                            src="/ladies-doctor.png"
                            alt="Doctor consulting with patient"
                            width={1200}
                            height={400}
                            priority
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-[36px] font-semibold leading-tight text-[#00427F]">
                            Your Revenue Is Waiting. Let's Talk.
                        </h1>

                        <p className="text-gray text-xs font-normal leading-relaxed">
                            CareRCM helps medical practices recover lost revenue, reduce denials, and streamline billing operations with fast, accountable RCM support. Whether you need a full revenue cycle audit, credentialing assistance, compliance guidance, or ongoing billing support, our nationwide team is ready to respond quickly and help your practice maximize every dollar earned.
                        </p>
                    </div>
                </div>

                <div className="max-w-[2000px] mx-auto">
                    <div className="hidden xl:block">
                        {/* Desktop version unchanged */}
                        <div className="relative w-full h-[450px]">
                            <div className="absolute top-0 right-0 w-[45%] h-[420px] md:h-[450px] lg:h-[500px] xl:h-[520px] rounded-r-2xl overflow-hidden">
                                <Image
                                    src="/ladies-doctor.png"
                                    alt="Doctor consulting with patient"
                                    fill
                                    priority
                                    className="object-center object-contain"
                                />
                            </div>

                            <div
                                className="absolute flex flex-col justify-center gap-3 md:gap-4 rounded-2xl px-6 md:px-7 lg:px-8 py-5 md:py-6 lg:py-7 h-[400px] md:h-[450px] lg:h-[480px] xl:h-[520px]"
                                style={{
                                    top: "40px",
                                    left: "16px",
                                    width: "65%",
                                    backgroundColor: "rgba(33,102,175,0.04)",
                                    backdropFilter: "blur(10px)",
                                    WebkitBackdropFilter: "blur(10px)",
                                    // boxShadow: "0 20px 35px -10px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5)",
                                    // border: "1px solid rgba(25, 169, 229, 0.15)"
                                    opacity: 4
                                }}
                            >

                                <h1 className="text-[36px] font-semibold leading-tight text-[#00427F]">
                                    Your Revenue Is Waiting. Let's Talk.
                                </h1>

                                <p className="text-gray text-xs font-normal leading-relaxed max-w-[580px]">
                                    CareRCM helps medical practices recover lost revenue, reduce denials, and streamline billing operations with fast, accountable RCM support. Whether you need a full revenue cycle audit, credentialing assistance, compliance guidance, or ongoing billing support, our nationwide team is ready to respond quickly and help your practice maximize every dollar earned.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white p-4 sm:p-12 my-20">
                <div className="max-w-[2000px] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Card 1 - Phone */}
                        <div className="rounded-2xl p-8 bg-[#0AADE40A] justify-center itens-center w-full flex flex-col items-start text-left h-[270px]">
                            <Image
                                src="/call.png"
                                alt="Phone Icon"
                                width={40}
                                height={40}
                                className="mb-8"
                            />
                            <p className="text-gray text-xs font-normal mb-2">
                                Business Inquiry:
                            </p>
                            <p className="text-gray text-sm font-semibold">
                                +1 812 991 8056
                            </p>
                        </div>

                        {/* Card 2 - Email */}
                        <div className="rounded-2xl p-8 bg-[#0AADE40A] w-full flex flex-col justify-center itens-center items-start text-left h-[270px]">
                            <Image
                                src="/sms.png"
                                alt="SMS Icon"
                                width={40}
                                height={40}
                                className="mb-8"
                            />
                            <p className="text-gray text-xs font-normal mb-2">
                                Official Email:
                            </p>
                            <p className="text-gray text-sm font-semibold">
                                connect@carercm.ai
                            </p>
                        </div>

                        {/* Card 3 - Address */}
                        <div className="rounded-2xl p-8 bg-[#0AADE40A] w-full flex flex-col justify-center itens-center items-start text-left h-[270px]">
                            <Image
                                src="/map.png"
                                alt="Map Icon"
                                width={30}
                                height={30}
                                className="mb-8"
                            />
                            <p className="text-gray text-xs font-normal mb-2">
                                Official Address:
                            </p>
                            <p className="text-gray text-sm font-semibold">
                                3 Rockaway St., Ny 1080
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;