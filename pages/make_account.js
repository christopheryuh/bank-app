import { useState } from 'react';
import { createClient } from '@supabase/supabase-js'

export default function Main(){
    return (
        <div>
        <h1>Make An Account</h1>
        <Link href="/">Back Home</Link>
        <br></br>
        <br></br>
            <Send></Send>
        </div>
    )
}

function Send(){
    const [name, setName] = useState('');
    const [bal, setBal] = useState();

    const supabaseUrl = "https://mhodvprnkmrktcyowsno.supabase.co"
    const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ob2R2cHJua21ya3RjeW93c25vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2NTM4OTMsImV4cCI6MjAwNjIyOTg5M30.RVLxauBfotQu6On9fL9E9XUheCMpkTNk6DvjsmvKmL8"

    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    async function sendData(){
        const { data, error } = await supabase.from('balances').insert({ name: name, balance: bal })
        alert("Made Account")
    }
    return (
        <div>
            <br></br>
            <p>Enter Your Name, and Starting Amount</p>
        <input id="makeaccount" value={name} onChange={e => setName(e.target.value)}></input>
        <input id="makeaccount" value={bal} onChange={e => setBal(e.target.value)}></input>
        <button id="makeaccount" onClick={sendData}>Submit To Database</button>
        </div>
    )
}


