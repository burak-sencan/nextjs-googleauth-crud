'use client'
import { useEffect, useState } from 'react'
import { useSession, signIn, signOut, getProviders } from 'next-auth/react'
import { logo } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState(null)
  const [toggleDropDown, setToggleDropDown] = useState(false)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }

    setUpProviders()
  }, [])

  return (
    <nav className="sticky top-0 flex h-16 w-full items-center justify-between bg-white/10 px-8 backdrop-blur-sm">
      <Link href={'/'}>
        <Image
          src={logo}
          alt="logo"
          width={48}
          height={48}
          className="rounded-full p-3 transition hover:bg-white/50"
        />
      </Link>

      {/* Deskotop navigation */}
      <div className="hidden sm:flex">
        {session?.user ? (
          <div className="flex gap-2">
            <Link
              href={'/create-todo'}
              className="rounded-full border-2 border-transparent px-4 py-2 text-slate-50 transition hover:border-white hover:text-white"
            >
              Create Todo
            </Link>
            <button
              href={'/create-todo'}
              className="rounded-full border-2 border-transparent px-4 py-2 text-slate-50 transition hover:border-white hover:text-white"
              onClick={signOut}
            >
              Sign Out
            </button>
            <Link href={'/profile'}>
              <Image
                src={logo}
                alt="logo"
                width={48}
                height={48}
                className="rounded-full p-3 transition hover:bg-white/50"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="rounded-full border-2 border-transparent px-4 py-2 text-slate-50 transition hover:border-white hover:text-white"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id)
                  }}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile navigation */}
      <div className="relative flex sm:hidden">
        {session?.user ? (
          <div className="flex">
            <Image
              src={logo}
              alt="logo"
              width={48}
              height={48}
              className="rounded-full p-3 transition hover:bg-white/50"
              onClick={() => {
                setToggleDropDown((prev) => !prev)
              }}
            />
            {toggleDropDown && (
              <div className="absolute right-0 top-full mt-3 flex w-full min-w-[210px] flex-col items-end justify-end gap-2 rounded-lg  bg-slate-50 p-5 text-purple-500  shadow-lg shadow-purple-400  transition">
                <Link
                  href={'/profile'}
                  className="w-full rounded-full border-2 border-purple-400 px-4  py-2 text-center"
                >
                  My profile
                </Link>
                <Link
                  href={'/create-todo'}
                  className="w-full rounded-full border-2 border-purple-400 px-4  py-2 text-center"
                >
                  Create Todo
                </Link>
                <button
                  href={'/create-todo'}
                  className="w-full rounded-full border-2 border-purple-400 px-4  py-2 text-center"
                  onClick={signOut}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="rounded-full border-2 border-transparent px-4 py-2 text-slate-50 transition hover:border-white hover:text-white"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id)
                  }}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}
export default Navbar
