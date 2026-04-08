import { useEffect, useState } from "react";

export default function useFetch (url, type, page, size) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const atributes = new URLSearchParams({
        type: type,
        page: page,
        size: size
    })

    useEffect(() => {
        const controller = new AbortController()

        async function fetchMaintenance () {
            try {
                setLoading(true)
                setError(null)
                const res = await fetch(url+`?${atributes}`, { signal: controller.signal })

                if (!res.ok) throw Error("HTTP " + res.status)
                
                const json = await res.json()
                setLoading(false)
                setData(json)
            } catch (e) {
                if (e.name !== "AbortError") {
                    setLoading(false)
                    setError(e.name)
                }
            }
        }

        fetchMaintenance()

        return () => controller.abort()
    }, [type, page, size])

    return { data, loading, error }
}