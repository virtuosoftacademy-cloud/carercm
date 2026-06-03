import Image from "next/image";
const Contact = () => {
    const contactInfo = [
        {
            id: 1,
            icon: "/call.png",
            alt: "Phone Icon",
            label: "Business Inquiry:",
            value: "+1 812 991 8056",
        },
        {
            id: 2,
            icon: "/sms.png",
            alt: "SMS Icon",
            label: "Official Email:",
            value: "connect@carercm.com",
        },
        {
            id: 3,
            icon: "/map.png",
            alt: "Map Icon",
            label: "Official Address:",
            value: "3 Rockaway St., Ny 1080",
        },
    ];
    return (
        <>
            <div className="bg-white p-4 sm:p-8">
                <div className="block xl:hidden">
                    <div className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-6">
                        <Image
                            src="/ladies-doctor.png"
                            alt="Doctor consulting with patient"
                            fill
                            priority
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#003f7a]">
                            Your Revenue Is Waiting. Let's Talk.
                        </h1>

                        <p className="text-gray text-xs leading-relaxed">
                            CareRCM helps medical practices recover lost revenue, reduce denials, and streamline billing operations with fast, accountable RCM support. Whether you need a full revenue cycle audit, credentialing assistance, compliance guidance, or ongoing billing support, our nationwide team is ready to respond quickly and help your practice maximize every dollar earned.
                        </p>
                    </div>
                </div>

                <div className="hidden xl:block">
                    {/* Desktop version unchanged */}
                    <div className="relative w-full h-[450px]">
                        <div className="absolute top-0 right-0 w-[50%] h-[340px] md:h-[420px] lg:h-[480px] xl:h-[420px] rounded-r-2xl overflow-hidden">
                            <Image
                                src="/ladies-doctor.png"
                                alt="Doctor consulting with patient"
                                fill
                                priority
                                className="object-cover object-center"
                                sizes="100vw"
                            />
                        </div>

                        <div
                            className="absolute flex flex-col justify-center gap-3 md:gap-4 rounded-2xl px-6 md:px-7 lg:px-8 py-5 md:py-6 lg:py-7 h-[340px] md:h-[420px] lg:h-[480px] xl:h-[420px]"
                            style={{
                                top: "40px",
                                left: "16px",
                                width: "60%",
                                background: "rgba(180,220,245,0.15)",
                                backdropFilter: "blur(8px)",
                                WebkitBackdropFilter: "blur(8px)",
                                boxShadow: "0 20px 35px -10px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5)",
                                border: "1px solid rgba(25, 169, 229, 0.15)",
                            }}
                        >

                            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#003f7a]">
                                Your Revenue Is Waiting. Let's Talk.
                            </h1>

                            <p className="text-gray text-xs leading-relaxed max-w-3xl">
                                CareRCM helps medical practices recover lost revenue, reduce denials, and streamline billing operations with fast, accountable RCM support. Whether you need a full revenue cycle audit, credentialing assistance, compliance guidance, or ongoing billing support, our nationwide team is ready to respond quickly and help your practice maximize every dollar earned.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-[#fff] p-4 sm:p-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {contactInfo.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-2xl p-6 md:p-8 lg:p-10 bg-[#0AADE40A] w-full"
                        >
                            <Image
                                src={item.icon}
                                alt={item.alt}
                                width={40}
                                height={40}
                                className="mb-8"
                            />
                            <p className="text-gray text-xs leading-relaxed mb-2">
                                {item.label}
                            </p>
                            <p className="text-black text-sm leading-relaxed font-semibold">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Contact;