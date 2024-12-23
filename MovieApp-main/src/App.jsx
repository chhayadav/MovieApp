/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { getApiConfiguration, getGenres } from './features/homeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Explore from './pages/explore/Explore';
import Details from './pages/details/Details';
import PageNotFound from './pages/404/PageNotFound';
import SearchResult from './pages/searchResult/SearchResult';
import WishList from './pages/wishList/WishList';

function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home.url);
  // console.log(url);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
      // console.log(res);
      const url = {
        backdrop: res?.images?.secure_base_url + 'original',
        poster: res?.images?.secure_base_url + 'original',
        profile: res.images.secure_base_url + 'original',
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    const promises = [];
    const endPoints = ['tv', 'movie'];
    const allGenres = {};

    endPoints.forEach((url) => {
      //here we push our endpoints in promises
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    //promise.all is used here to check that all the response of both api call comes at once
    //promise.all uss case me ham use krte hn jaha hme jaha hme 2-3 api ka response same time pe chaiye hota hai
    const data = await Promise.all(promises);
    console.log(data);
    //here we got data and inside data we have get our result so we map over data to get individual result

    data?.map(({ genres }) => {
      return genres?.map((item) => (allGenres[item?.id] = item));
    });

    dispatch(getGenres(allGenres));
    console.log(allGenres);
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/:mediaType/:id"
          element={<Details />}
        />
        <Route
          path="/search/:query"
          element={<SearchResult />}
        />
        <Route
          path="/explore/:mediaType"
          element={<Explore />}
        />
        <Route
          path="/wishlist"
          element={<WishList />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
