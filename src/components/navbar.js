import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Blog</a>
    <a className="btn btn-ghost text-xl">Resume</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="https://github.com/liubrian267">
      <Image src="/github-mark/github-mark-white.png" alt="Github" width={40} height={40}/>
      </Link></li>
      <li><Link href="https://www.linkedin.com/in/brian-liu-378990257/">
      <Image src="/in-logo/LI-In-Bug.png" alt="LinkedIn" width={40} height={40}/>
      </Link></li>
    </ul>
  </div>
</div>
  )
}
