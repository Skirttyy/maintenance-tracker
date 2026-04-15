import { useEffect, useState } from "react";

export default function useFetchSend (url, content) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {

        const controller = new AbortController()
        async function sendMaintenance () {
            try {
                setLoading(true)
                setError(null)

                const res = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    signal: controller.signal,
                    body: JSON.stringify({
                        name: content.maintenanceName.value,
                        type: content.maintenanceType.value,
                        provider: content.maintenanceProvider.value,
                        comments: content.comments.value,
                        affectedClients: content.affectedClients.value,
                        zones: content.affectedZones.value,
                        startDate: new Date(content.startDate.value),
                        endDate: new Date(content.endDate.value),
                        riskLevel: content.riskLevel.value,
                        notifications: content.notifications.value
                    })
                })

                if (!res.ok) {
                    const error = new Error("HTTP " + res.status)
                    error.status = res.status
                    error.body = await res.text()
                    console.log(res.status + error.body)
                    throw error
                }

                const json = await res.json()
                setLoading(false)
                setData(json)
            } catch (e) {
                if (e.name !== "AbortError") {
                    setLoading(false)
                    setError(`Error Status ${e.status}: ${e.body}`)
                }
            }
        }

        sendMaintenance()

        return () => controller.abort()

    }, [content])

    return { data, loading, error }

}