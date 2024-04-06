export type MastodonInstance = {
    active_users: number | null
    added_at: string | null
    admin: string
    checked_at: string
    connections: string
    dead: boolean
    email: string | null
    https_rank: string | null
    https_score: number | null
    id: string
    info: any
    ipv6: boolean
    name: string
    obs_rank: string
    obs_score: number
    open_registrations: boolean
    statuses: string
    thumbnail: string
    thumbnail_proxy: string
    up: boolean
    updated_at: string
    uptime: number
    users: string
    version: string | null
}

export type InstancesType = {
    instances: MastodonInstance[]
    pagination: {
        next_id: string
        total: number
    }
}
