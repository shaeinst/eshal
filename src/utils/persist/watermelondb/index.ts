import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import { schema, MODELS, migrations } from './setter'

const adapter = new SQLiteAdapter({
    schema,
    // (You might want to comment it out for development purposes -- see Migrations documentation)
    migrations,
    // (optional database name or file system path)
    // dbName: 'myapp',
    jsi: false,
    onSetUpError: _error => {
        // Database failed to load -- offer the user to reload the app or log out
    },
})

export const database = new Database({
    adapter,
    modelClasses: MODELS,
})

export const { localStorage } = database

export const KEYS = {
    TOKEN: 'LOCALSTORAGE_TOKEN_KEY',
    FRESH_APP: 'LOCALSTORAGE_FRESH_APP_KEY',
}
