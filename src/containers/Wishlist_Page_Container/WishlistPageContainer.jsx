import { Suspense, lazy } from 'react';

const WishList = lazy(() => import('../../components/Global/WishList/WishList'));
const WishlistPageContainer = () => {
  return (
    <Suspense fallback={'loading...'}>
      <WishList />
    </Suspense>
  );
};

export default WishlistPageContainer;
