"use client"

import { useState } from "react"
import type { Data } from "@measured/puck"
import { Puck, Render } from "@measured/puck"
import { Spoiler } from "components/Spoiler"

import config from "../../puck.config"

const isBrowser = typeof window !== "undefined"

export function Client({ path, dataBE, isEdit }: { path: string; dataBE: Data; isEdit: boolean }) {
    const key = `edution-demo:${path}`

    const [data] = useState<Data>(() => {
        if (isBrowser) {
            const dataStr = localStorage.getItem(key)

            if (dataStr) {
                return JSON.parse(dataStr)
            }

            return undefined
        }
    })

    if (isEdit) {
        return (
            <Puck
                config={config}
                data={data}
                onPublish={async (data: Data) => {
                    localStorage.setItem(key, JSON.stringify(data))
                }}
            />
        )
    }

    return <Render config={config} data={data} />
}
