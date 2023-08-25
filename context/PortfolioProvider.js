import { createContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { Zoom, Flip } from 'react-toastify';

const PortfolioContext = createContext();

const PortfolioProvider = ({children}) => {

    const [projects, setProjects] = useState([]);
    const [totalProjects, setTotalProjects] = useState(0);
    const [page, setPage] = useState(1);
    const [skeleton, setSkeleton] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [currentFavourite, setCurrentFavourite] = useState('');
    const [currentDelete, setCurrentDelete] = useState('');
    const [open, setOpen] = useState(false);
    const [destructive, setDestructive] = useState(false);
    const [gmail, setGmail] = useState(false);
    const [value, setValue] = useState('');
    const [animation, setAnimation] = useState(false);
    const [activetheme, setActiveTheme] = useState("light");
    const inactivetheme = activetheme  === "light" ? "dark" : "light";

    const router = useRouter();
    
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    useEffect(() => {
      if(router.pathname === '/') {
        setTimeout(() => {
          setAnimation(true);
        }, 700);
      } else {
        setAnimation(false);
      }
    },)

    useEffect(() => {
      window.addEventListener("scroll", reveal);
    }, []);

    function getUserPreference() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }

    useEffect(() => {
      document.body.dataset.theme = getUserPreference();
      if (document.body.dataset.theme === 'dark') {
        setActiveTheme(inactivetheme)
      }
    }, [])

    useEffect(() => {
      document.body.dataset.theme = activetheme;
    }, [activetheme]);

    useEffect(() => {
      const favoritesLS = JSON.parse(localStorage.getItem("favorites")) ?? [];
      if(favoritesLS.length !== 0) {
          setFavorites(favoritesLS);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
      const count = async () => {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/lists`
        const {data} = await axios(url);
        setTotalProjects(data.length);
      }
      count()
    }, [])
    
    useEffect(() => {
      const consultAPI = async () => {
        setSkeleton(true);
        const url = `${process.env.NEXT_PUBLIC_API_URL}/lists?_sort=order:ASC&_start=${(page-1)*6}&_limit=6`
        const {data} = await axios(url);
        setProjects(data);
        setSkeleton(false);
      }
      consultAPI();
    }, [page])
      
    const handleChangePage = (e, value) => {
      setPage(value);
    }

    const handleFavorites = (project) => {
      if(favorites.some(favoritesState => favoritesState.url === project.url)) {
        setOpen(true);
        setCurrentFavourite(project.name);
        return;
      } else {
        setFavorites([...favorites, project])
          toast.success('Successfully added 😀', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
          });
        }
    }

    const Deletefavorites = (favourite) => {
      setCurrentDelete(favourite);
      setOpen(true);
    } 

    const handleRemove = url => {
      const updatedFavorite = favorites.filter((favorite) => favorite.url !== url)
      setFavorites(updatedFavorite);
      setDestructive(true);
      setOpen(false);
      toast.info('Removed 😔', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
        });
      setCurrentFavourite('');
      setCurrentDelete('');
      setDestructive(false);
    }

    const handleGmail = () => {
      setGmail(true);
      setOpen(true);
    }

    return(    
        <PortfolioContext.Provider
            value={{
              totalProjects,
              page,
              projects,
              handleChangePage,
              skeleton,
              handleFavorites,
              open,
              setOpen,
              currentFavourite,
              setCurrentFavourite,
              favorites,
              Deletefavorites,
              setCurrentDelete,
              currentDelete,
              handleRemove,
              destructive,
              value,
              setValue,
              handleGmail,
              gmail,
              setGmail,
              animation,
              setActiveTheme,
              inactivetheme,
              activetheme
            }}
        >
            {children}
        </PortfolioContext.Provider>
    )
}

export {
    PortfolioProvider
}

export default PortfolioContext;