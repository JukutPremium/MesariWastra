import Link from 'next/link';

const NavgigationBar = () => {
  return (
    <nav className='flex w-full font-clash-display text-2xl'>
        <div className="wraper flex justify-between items-center w-full px-6 py-3">
            <div className="logo">
             Mesari Wastra
            </div>
            <div className="link space-x-5">
                <Link href="#" className='nav-link'>Home</Link>
                <Link href="#" className='nav-link'>About</Link>
                <Link href="#" className='nav-link'>Project</Link>
                <Link href="#" className='nav-link'>Service</Link>
            </div>
            <div className="button">
                <button className='text-foreground px-4 py-2 '>Contact</button>
            </div>
        </div>
    </nav>
  )
}

export default NavgigationBar