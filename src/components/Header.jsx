import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react'

const Header = () => {
  const [ showSignIn , setShowSignIn ] = useState(false) ;
  const [ search , setSearch ]= useSearchParams() ; 
  useEffect(()=>{ 
    if(search.get('sign-in')) { 
      setShowSignIn(true);
      console.log(true);
    }
  } ,[search])
  function handleOverlayClick(e){ 
    if ( e.target == e.currentTarget ) { 
      setShowSignIn(false) ;
      setSearch({});
    }

  }
  
  return (
    <>
    <nav className='py-4 flex  justify-between items-center'>
        <Link>
        <h1 className='text-4xl text-white'>QuickJob</h1>
        </Link>
        <div className='flex gap-8'>
        <SignedOut>
      <Button variant ='outline' onClick = {()=>setShowSignIn(true)} >Login</Button>
      
      </SignedOut>
      <SignedIn>
        {/* add a condition here  */}
      <Link to="/post-job"><Button variant ='destructive' className ="">
          <PenBox size={20} ></PenBox>
          Post a Job
          </Button></Link>
        <UserButton 
         appearance={{
          elements : { 
            avatarBox : "w-10 h-10"
          }
         }}
         >
         <UserButton.MenuItems>
          <UserButton.Link
          label='My Jobs'
          labelIcon = {<BriefcaseBusiness size={15}></BriefcaseBusiness>}
          href='/my-jobs'
          >

          </UserButton.Link>
          <UserButton.Link
          label='Saved Jobs'
          labelIcon = {<Heart size={15}></Heart>}
          href='/saved-jobs'
          >

          </UserButton.Link>
         </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
 
        </div>
      
    </nav>
    { 
      showSignIn && <div className='fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-80' onClick={handleOverlayClick}> 
         <SignIn signUpForceRedirectUrl='/onboarding' signUpFallbackRedirectUrl='/onboarding'></SignIn>
      </div>
    }
    </>
  )
}

export default Header
