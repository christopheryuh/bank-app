import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = "https://mhodvprnkmrktcyowsno.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ob2R2cHJua21ya3RjeW93c25vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2NTM4OTMsImV4cCI6MjAwNjIyOTg5M30.RVLxauBfotQu6On9fL9E9XUheCMpkTNk6DvjsmvKmL8"
const supabase = createClient(supabaseUrl, supabaseAnonKey)

function ChangeBalance(){
    const [balance,setBalance] = useState();
    const [name, setName] = useState('');

    async function load_balance(name){
        const { data, error } = await supabase.from("balances").select().eq("name",name)
        setBalance(data[0]?.balance)
        //working but right now its showing the balance multiple times
        //also why data[0]
        //otherwise were
    }
    return (
        <div>
        <h1>Change Your Balance</h1>
        <Link id="links" href="/">Home</Link>
        <br></br>
        <h3>Enter Account Name</h3>
        <input id="input1"value={name} onChange={e => setName(e.target.value)}></input><br></br>
        <button id="button" onClick={() => load_balance(name)}>Click to load/reload your balance</button>
        <p>If nothing happens when you load your balance, make sure your account name exists and is spelled correctly.</p>
        <p>Current Balance:{balance}</p>    

        <DepositWithdraw balance={balance} name={name}></DepositWithdraw>

        </div>
    )
}

function DepositWithdraw({balance,name}){
    async function deposit(amount){
            const { data, error } = await supabase.from("balances").update({"balance":balance+eval(amount)}).eq("name",name)
    }
    async function withdraw(amount){
        const { data, error } = await supabase.from("balances").update({"balance":balance-eval(amount)}).eq("name",name)
    }
    const [amount,setAmount] = useState();
    if (balance != null){
    return (
        <div>
            <p>Add amount to deposit or withdraw</p>
            <input value={amount} onChange={e => setAmount(e.target.value)}></input>
            <br></br>
            <button id="button" onClick={() => deposit(amount)}>Deposit</button>
            <button id="button" onClick={() => withdraw(amount)}>Withdraw</button>
        </div>
    )
    }
    return (
        <p>Enter your name to deposit or withdraw</p>
    )
    
}


export default ChangeBalance;