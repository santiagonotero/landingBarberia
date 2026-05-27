'use client'

export default function Footer() {

    return(
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 h-fit bg-gray-800 text-gray-100 py-4 justify-center ">
            <div className="justify-items-center">
                <p className="py-2 w-fit text-xl">(c) 2026 - Barbería Central</p>
            </div>    
            <div className="justify-items-center">
                <p className="py-2 w-fit text-xl">Sitio web creado por &nbsp;
                    <a href='https://santiagootero.com.ar' className="underline decoration-gray-100 ">Santiago Otero
                    </a>
                </p>
            </div>    
        </div>
    )
}