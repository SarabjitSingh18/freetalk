import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'

const App = () => {
  return (
    <div>
      hello
       <header>
      <SignedOut>
        <SignInButton mode='modal'/>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </div>
  )
}

export default App
