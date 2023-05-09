import './Header.css'
import logo from '../../images/more/logo1.png'

const Header = () => {
    return (
        <div className="h-24 header">
            <div className='flex items-center justify-center'>
                <img className='w-16' src={logo} alt="" />
                <h1 className='sm:text-4xl lg:text-5xl title text-white'>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Header;