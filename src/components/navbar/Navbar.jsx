import linkedinLogo from '../../assets/images/Li.png';
import githubLogo from '../../assets/images/Gi.png';
import gmailLogo from '../../assets/images/Gm.png';
import outlookLogo from '../../assets/images/Ol.png'


function Navbar() {    
    return (
        <header className="bg-gray-600 h-16 min-h-16 md:sticky top-0 z-1">            
            <div className="bg-gray-600 grid grid-cols-3 w-full mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="lg:pl-40 xl:pl-40 2xl:pl-40"><p className='text-white text-4xl font-mono font-bold italic pt-3'>IZAR MULA</p></div>
                <div className='md:flex grid-cols-3 justify-evenly pt-3 pr-10'>
                    <p className='text-white text-lg underline'>About me</p>
                    <p className='text-white text-lg underline'>Experience</p>
                    <p className='text-white text-lg underline'>Skills</p>
                </div>
                <div className="sm:pr-0 lg:pr-40">
                    <nav className="md:flex sm:flex pt-2 float-right">                    
                        <a href="#Linkedin"><img className="rounded-full w-12 h-12" src={linkedinLogo} alt={linkedinLogo}/></a>
                        <a href="#GitHub" className='pl-8'><img className="rounded-full w-12 h-12" src={githubLogo} alt={githubLogo}/></a>
                        <a href="#GMail" className='pl-8'><img className="rounded-full w-12 h-12" src={gmailLogo} alt={gmailLogo}/></a>
                        <a href="#Outlook" className='pl-8'><img className="rounded-full w-12 h-12" src={outlookLogo} alt={outlookLogo}/></a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;