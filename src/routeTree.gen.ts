/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ScreeningsIndexImport } from './routes/screenings/index'
import { Route as ScreeningsScreeningIdImport } from './routes/screenings/$screeningId'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ScreeningsIndexRoute = ScreeningsIndexImport.update({
  path: '/screenings/',
  getParentRoute: () => rootRoute,
} as any)

const ScreeningsScreeningIdRoute = ScreeningsScreeningIdImport.update({
  path: '/screenings/$screeningId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/screenings/$screeningId': {
      id: '/screenings/$screeningId'
      path: '/screenings/$screeningId'
      fullPath: '/screenings/$screeningId'
      preLoaderRoute: typeof ScreeningsScreeningIdImport
      parentRoute: typeof rootRoute
    }
    '/screenings/': {
      id: '/screenings/'
      path: '/screenings'
      fullPath: '/screenings'
      preLoaderRoute: typeof ScreeningsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/screenings/$screeningId': typeof ScreeningsScreeningIdRoute
  '/screenings': typeof ScreeningsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/screenings/$screeningId': typeof ScreeningsScreeningIdRoute
  '/screenings': typeof ScreeningsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/screenings/$screeningId': typeof ScreeningsScreeningIdRoute
  '/screenings/': typeof ScreeningsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/screenings/$screeningId' | '/screenings'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/screenings/$screeningId' | '/screenings'
  id: '__root__' | '/' | '/screenings/$screeningId' | '/screenings/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  ScreeningsScreeningIdRoute: typeof ScreeningsScreeningIdRoute
  ScreeningsIndexRoute: typeof ScreeningsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ScreeningsScreeningIdRoute: ScreeningsScreeningIdRoute,
  ScreeningsIndexRoute: ScreeningsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/screenings/$screeningId",
        "/screenings/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/screenings/$screeningId": {
      "filePath": "screenings/$screeningId.tsx"
    },
    "/screenings/": {
      "filePath": "screenings/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
