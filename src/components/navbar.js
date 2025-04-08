import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export const Navbar = () => {
  return (
    <header className="p-4 border border-#F5F5F5 rounded-bl-lg rounded-br-lg">
  <div className="w-full flex justify-between items-center">
    <nav className="flex items-center space-x-6">
      <Link href="/" className="text-lg font-medium hover:text-gray-300">
        Brian Liu
      </Link>
      <Link href="/Blog" className="text-lg font-medium hover:text-gray-300">
        Blog
      </Link>
      <Link href="/Skills" className="text-lg font-medium hover:text-gray-300">
        Resume
      </Link>
    </nav>
    <div className="flex items-center space-x-6">
      <Link
        href="https://github.com/liubrian267"
        className="hover:text-gray-300"
        aria-label="GitHub"
      >
        <Image
          src="/github-mark/github-mark.png"
          alt="Github"
          width={40}
          height={40}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/brian-liu-378990257/"
        className="hover:text-gray-300"
        aria-label="LinkedIn"
      >
        <Image
          src="/in-logo/LI-In-Bug.png"
          alt="LinkedIn"
          width={40}
          height={40}
        />
      </Link>
    </div>
  </div>
</header>

  )
}
