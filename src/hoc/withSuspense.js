import React, { Suspense } from 'react';
import Preloader from '../components/common/Preloader/Preloader';

export const withSuspense = (Component) => {

    return (props) => (
        <Suspense fallback={ <Preloader template='FULL_SCREEN' /> }>
            <Component {...props} />
        </Suspense>
    )
}