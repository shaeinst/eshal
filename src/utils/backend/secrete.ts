type ReturnType = {
    clientId: string
    clientSecret: string
}

export default function secrete(): ReturnType {
    //TODO: for now, secrete is hardcoded

    const clientId = '864ELq9VqDLHb9lcm_H0uDg-Z4IHzcQKMH4YajJ7YVs'
    const clientSecret = '2woqdzke-OhL8gqHqT9KV6vHCuvgGpkD3XvhTrT09Ik'

    return {
        clientId,
        clientSecret,
    }
}
