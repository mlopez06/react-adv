import { lazy, LazyExoticComponent } from "react";

import { NoLazyLoad } from "../01-lazyload/pages/NoLazyLoad";

type JSXComponent = () => JSX.Element;

interface Routes {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>,
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));

export const routes: Routes[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'lazy load'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: NoLazyLoad,
        name: 'No lazy load'
    }
]