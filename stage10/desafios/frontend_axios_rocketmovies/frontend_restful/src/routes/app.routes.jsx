import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { New } from '../pages/New';
import { NotFound } from '../pages/NotFound';
import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';

import { SearchProvider } from '../hooks/search';

export function AppRoutes() {
  return(
    <SearchProvider>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/new'} element={<New />} />
        <Route path={'/details/:id'} element={<Details />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </SearchProvider>
  );
}