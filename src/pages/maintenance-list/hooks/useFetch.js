import { useEffect, useState } from "react";

export default function useFetch (url, type, content, page, size) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const atributes = new URLSearchParams({
        type: type,
        page: page,
        size: size,
        content: content
    })

    useEffect(() => {
        const controller = new AbortController()

        async function fetchMaintenance () {
            try {
                setLoading(true)
                setError(null)
                const res = await fetch(url+`?${atributes}`, { signal: controller.signal })

                console.log(res.status)
                if (!res.ok) {
                    const error = new Error("HTTP" + res.status)
                    error.status = res.status
                    error.body = await res.json()
                    throw error
                }
                    
                
                const json = await res.json()
                setLoading(false)
                console.log(json)
                setData(json)
                
            } catch (e) {
                if (e.name !== "AbortError") {
                    setLoading(false)
                    setError(`Error Status ${e.status}: ${e.body.error}`)
                }
            }
        }

        fetchMaintenance()

        return () => controller.abort()
    }, [content, type, page, size])

    return { data, loading, error }
}