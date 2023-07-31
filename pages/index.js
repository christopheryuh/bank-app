import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Bank Account</h1>
      <br></br>
      <div id="links">
    <a href="/make_account">Make Account</a>
    <br></br>
    <a href="/change_balance">Change Balance</a>
    </div>
    <p>Welcome to my bank account app project.
      <br></br>
      Go to "Make Account" to make a new account and set a starting balance.
      <br></br>
      Go to "Change Balance" to view your balance, deposit or withdraw.
    </p>
    </div>
  )
}
