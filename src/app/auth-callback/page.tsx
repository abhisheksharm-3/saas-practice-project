import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Callback = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')


    
}

export default Callback