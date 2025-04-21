import { useEffect, useRef, useState } from "react"
import { useTranslation } from 'react-i18next';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import User from '../assets/header/user/user.png'
import Logo from '../assets/header/logo/mahindra-logo-new.svg'

import { db } from "../firebase/firebase";

// Mudar Idioma
const Language = () => {

    const [state, setState] = useState(false);
    const profileRef = useRef();

    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const navigation = [
        { title: t('UZB'), onClick: () => changeLanguage('uz') },
        { title: t('ENG'), onClick: () => changeLanguage('en') },
        { title: t('RUS'), onClick: () => changeLanguage('rs') },
    ]


    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

    return (
        <div className="relative lg:border-none z-50 flex flex-col justify-center lg:flex">
            <div className="flex justify-center">
                <button ref={profileRef} className="block text-white uppercase text-center relative transition-all duration-1000 hover:border-b-2 border-transparent after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-red-600 after:transition-all after:duration-500 hover:after:w-full text-xs" onClick={() => setState(!state)}>
                    {t('language')}
                </button>
            </div>

            {/* Idiomas */}
            <ul className={`lg:bg-zinc-900 top-10 right-0 mt-6 space-y-6 lg:absolute lg:border-none lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'hidden'}`}>
                {
                    navigation.map((item, idx) => (
                        <li key={idx} onClick={item.onClick}>
                            <div className="block text-white lg:bg-[#080808] lg:hover:bg-[#171717] lg:p-3 transition-all duration-150 ease-in-out" >
                                <p className="cursor-pointer">
                                    {item.title}
                                </p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

// Avatar Usuário
const AvatarUser = () => {

    const [state, setState] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [userData, setUserData] = useState({});

    const profileRef = useRef()

    const auth = getAuth()

    const handleLogOut = async () => {
        try{
            await signOut(auth)
            console.log("User Logout")
        }catch(error){
            console.error("Erro: ", error)
        } finally{
            window.location.href='/login';
        }
    }

    // Função para mudar de idioma
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };

    const noLogged = [{ title: "Login", path: "/login" },{ title: "Sign-Up", path: "/sign-up" },] // Sem estar logado

    const logged = [{ title: t('dashboard'), path: "/dashboard" },{ title: t('profile'), path: "/profile" }, {title: "Logout", onClick: () => handleLogOut() }]  // Logado

    const navigationItems = isLoggedIn ? logged : noLogged; // Verifica quais opções mostrar ao usuário

    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            
            setIsLoggedIn(currentUser);

            if(currentUser){
                const uid = currentUser.uid;
                const docRef = doc(db, "users", uid);
                const docSnap = await getDoc(docRef);
                setUserData(docSnap.data());
                console.log(userData)
            }

        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <div className="relative lg:border-none z-50 flex flex-col lg:flex justify-center">

            {/* Avatar */}
            <div className="flex w-full justify-center">
                <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 bg-white lg:focus:ring-2 lg:block"
                    onClick={() => setState(!state)}
                >
                    <img
                        src={userData.avatarImg || User}
                        className="w-full h-full rounded-full"
                    />
                </button>
            </div>

            {/* Itens */}
            <ul className={`lg:bg-[#080808] top-12 right-0 mt-6 space-y-6 lg:absolute lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'hidden'}`}>
                {
                    navigationItems.map((item, idx) => (
                        <li key={idx}>
                            <Link to={item.path}>
                                <p className="block text-white lg:hover:bg-[#171717] lg:p-3 transition-all duration-150 ease-in-out cursor-pointer" onClick={item.onClick}>
                                    {item.title}
                                </p>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

// Nav
const Nav = () => {

    // Função para mudar de idioma
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [state, setState] = useState(false)

    const navigation = [
        { title: t('home'), path: "/" },
        { title: t('Uylar'), path: "/uylar" },
        { title: t('Meneger'), path: "/meneger" },
        { title: t('Malumotlar'), path: "/malumotlar" },
    ]



    return (
        <header className="text-base lg:text-sm z-[9999] bg-black">
            <div className={`bg-black z-[99999] items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static ${state ? "h-full fixed inset-x-0" : ""}`}>
                <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                        <Link to='/'>
                            <img
                                src={Logo}
                                width={150}
                                height={50}
                                alt="Logo TechMahindra"
                            />
                        </Link>
                    <div className="lg:hidden">
                        <button className="text-white"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    </svg>

                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${state ? "" : "hidden"}`}>
                    <ul className="items-center justify-start space-y-6 lg:flex lg:space-x-6 lg:space-y-0 ">
                        <div className='flex-1 items-center justify-evenly pb-4 lg:flex lg:pb-0'>

                        {/* Itens Nav */}
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="mt-6 lg:mt-0">
                                        <Link to={item.path}>
                                            <p className="block text-white uppercase text-xs text-center relative transition-all duration-1000 hover:border-b-2 border-transparent after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-red-600 after:transition-all after:duration-500 hover:after:w-full">
                                                {item.title}
                                            </p>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        </div>

                        <Language/>
                        <AvatarUser />
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Nav