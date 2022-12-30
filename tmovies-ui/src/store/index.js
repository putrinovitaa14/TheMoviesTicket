import {
    configureStore, 
    createAsyncThunk, 
    createSlice } 
    from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, TMDB_BASE_URL } from "../utils/constants";

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};

export const getGenres = createAsyncThunk("tmovies/genres", async()=> {
    const { data : {genres}, 
    } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    // console.log(data);
    return genres;
});

const createArrayFromRawData = (array, moviesArray,genres) => {
    // console.log(array);
    array.forEach((movie)=> {
        const movieGenres = [];
        movie.genre_ids.forEach((genre) => {
            const name = genres.find(({ id }) => id === genre);
            if(name) movieGenres.push(name.name);
        });
        if(movie.backdrop_path) {
            moviesArray.push({
                id: movie.id,
                name: movie?.original_name ? movie.original_name : movie.original_title,
                image: movie.backdrop_path,
                genres: movieGenres.slice(0, 3),
            });
        }
    });
};

const getRawData = async (api, genres, paging) => {
    const moviesArray = [];
    for(let i=1; moviesArray.length < 60 && i < 10; i++) {
        const {
            data: {results},
        } = await axios.get(
            `${api}${paging ? `&page=${i}` : ""}`
            );
            createArrayFromRawData(results,moviesArray,genres);
        }
        // console.log({ moviesArray });
        return moviesArray;
};

export const fetchMovies = createAsyncThunk("tmovies/trending",
async ({ type }, thunkApi) => {
        const {
            tmovies: { genres },
        } = thunkApi.getState();
        return getRawData(
            `${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
            genres,
            true
        );
        // console.log(data);
    }
);

export const fetchDataByGenre = createAsyncThunk("tmovies/moviesByGenres",
async ({genre, type }, thunkApi) => {
        console.log("in fetch data", genre, type );
        const {
            tmovies: { genres },
        } = thunkApi.getState();
        const data = getRawData(
            `${TMDB_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`,
            genres
        );
        console.log(data);
        return data;
    }
);


const TmoviesSlice = createSlice({
    name: "Tmovies",
    initialState,
    extraReducers:(builder) => {
        builder.addCase(getGenres.fulfilled,(state,action)=> {
            state.genres = action.payload;
            // state.genresLoaded = true;
        });
        builder.addCase(fetchMovies.fulfilled,(state,action)=> {
            state.movies = action.payload;
        });
        builder.addCase(fetchDataByGenre.fulfilled,(state,action)=> {
            state.movies = action.payload;
        });
    },
});

export const store = configureStore({
    reducer: {
        tmovies: TmoviesSlice.reducer,
    },
});







// import {
//     configureStore, 
//     createAsyncThunk, 
//     createSlice } 
//     from "@reduxjs/toolkit";
// import axios from "axios";
// import { API_KEY, TMDB_BASE_URL } from "../utils/constants";

// const initialState = {
//     movies: [],
//     genresLoaded: false,
//     genres: [],
// };

// export const getGenres = createAsyncThunk("tmovies/genres", async()=> {
//     const { data : {genres}, 
//     } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
//     );
//     // console.log(data);
//     return genres;
// });

// const createArrayFromRawData = (array, moviesArray,genres) => {
//     // console.log(array);
//     array.forEach((movie)=> {
//         const movieGenres = [];
//         movie.genre_ids.forEach((genre) => {
//             const name = genres.find(({ id }) => id === genre);
//             if(name) movieGenres.push(name.name);
//         });
//         if(movie.backdrop_path) {
//             moviesArray.push({
//                 id: movie.id,
//                 name: movie?.original_name ? movie.original_name : movie.original_title,
//                 image: movie.backdrop_path,
//                 genres: movieGenres.slice(0, 3),
//             });
//         }
//     });
// };

// const getRawData = async (api, genres, paging) => {
//     const moviesArray = [];
//     for(let i=1; moviesArray.length < 60 && i < 10; i++) {
//         const {
//             data: {results},
//         } = await axios.get(
//             `${api}${paging ? `&page=${i}` : ""}`
//             );
//             createArrayFromRawData(results,moviesArray,genres);
//         }
//         // console.log({ moviesArray });
//         return moviesArray;
// };

// export const fetchMovies = createAsyncThunk("tmovies/trending",
// async ({ type }, thunkApi) => {
//         const {
//             tmovies: { genres },
//         } = thunkApi.getState();
//         return getRawData(
//             `${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
//             genres,
//             true
//         );
//         // console.log(data);
//     }
// );

// export const fetchDataByGenre = createAsyncThunk("tmovies/moviesByGenres",
// async ({genre, type }, thunkApi) => {
//         console.log("in fetch data", genre, type );
//         const {
//             tmovies: { genres },
//         } = thunkApi.getState();
//         const data = getRawData(
//             `${TMDB_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`,
//             genres
//         );
//         console.log(data);
//         return data;
//     }
// );


// const TmoviesSlice = createSlice({
//     name: "Tmovies",
//     initialState,
//     extraReducers:(builder) => {
//         builder.addCase(getGenres.fulfilled,(state,action)=> {
//             state.genres = action.payload;
//             state.genresLoaded = true;
//         });
//         builder.addCase(fetchMovies.fulfilled,(state,action)=> {
//             state.movies = action.payload;
//         });
//         builder.addCase(fetchDataByGenre.fulfilled,(state,action)=> {
//             state.movies = action.payload;
//         });
//     },
// });

// export const store = configureStore({
//     reducer: {
//         tmovies: TmoviesSlice.reducer,
//     },
// });
