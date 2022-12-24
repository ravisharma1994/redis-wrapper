'use strict';

import { createClient } from 'redis';

(async ()=> {

    const client = createClient({
        url:'redis://127.0.0.1:6379/2'
    });
    
    client.on('error', (err) => console.log('Redis Client Error', err));
    
    await client.connect();
    
    

    const setKey = async (client , key , value) => {
        await client.set(key, value);
    }

    await setKey(client, 'HI', 'test value');

    const getKey = async(client , key) => {
        return await client.get(key);
    }

    const value = await getKey(client,'HI');
    
    await client.disconnect();
    console.log("disconnect")
})();