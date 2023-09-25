export default {
    BASE_IMG_URI: "https://image.tmdb.org/t/p/",
    Colors: {
        BACKGROUND: '#EFEFEF',
        PRIMARY: '#0050A6',
        SECONDARY: '#053476',
        WHITE: '#ffffff',
        BUTTON: '#61C3F2',
        GREY: '#cacaca',
        LIGHT_GREY: '#DDDDDD',
        BLACK: '#000',
        INTRO_TOP_VIEW_COLOR: '#2063c2',
        INTRO_BOTTOM_VIEW_COLOR: '#104998',
        BULLETS_SLECTED_COLOR: '#FFBB00',
        BULLETS_UNSLECTED_COLOR: '#AAC3FF',
        SECONDARY_TEXT_COLOR: '#B0BED4',
        SKIP_BG_COLOR: '#1652a6',
        INTRO_TXT_COLOR: '#ECF2FF',
        BG_COLOR: '#F6F9FF',
        LINE_COLOR: '#6294CA',
    },
    Fonts: {
        FAMILY: 'Poppins-Bold',
        FAMILY_REGULAR: 'Poppins-Regular',
        MONTSERAA_BOLD: 'Montserrat-Bold',
        MONTSERAA_REGUAR: 'Montserrat-Regular',
        UBUNTU: 'Ubuntu',
    },
    NavigationItems: {
        SplashScreen: "SplashScreen",
        SeatBookingScreen: "SeatBookingScreen",
        SearchMoviesScreen: "SearchMoviesScreen",
        DetailMoviesScreen: "DetailMoviesScreen",
        UpcomingMoviesScreen: "UpcomingMoviesScreen"
    },
    API: {
        BASE_URL: "https://api.themoviedb.org/3/movie/",///Replace with live url before production  
        SEARCH_URL: "https://api.themoviedb.org/3/",
        KEY: "0608b74055971c020369bde8629fe5e8",
        TOKEN: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjA4Yjc0MDU1OTcxYzAyMDM2OWJkZTg2MjlmZTVlOCIsInN1YiI6IjY1MGY0NDFhM2E0YTEyMDBlMjk0MjM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L4u-9SzDuN1771rwh8lzUFrD5aX_skPMA-DNtRsije8",
        METHOD: {
            GET: 'GET',
            POST: 'POST',
            PUT: 'PUT'
        },
        ENDPOINT: {
            LOGIN: 'sessions/',
            SOCIALLOGIN: 'omniauths/',
            REGISTER: 'profiles/',
            UPCOMING: 'upcoming',
            IMAGES: 'images',
            SEARCH: 'search/multi',
            UPDATE_PASS: 'update_password/',
            ADS: 'ads/',
            CONFIRMATION: 'confirmations/',
            PROFILE: 'profiles/'
        }
    }
}