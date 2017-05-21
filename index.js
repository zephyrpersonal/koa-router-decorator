const Router = require('koa-router')
const { readdir } = require('fs-extra')
const { resolve } = require('path')
const isFunction = require('lodash.isfunction')
const { METHODS } = require('http')

const $route = new Map()

exports.router = async (app, { routerPath }) => {
  const router = new Router()
  const routerChildFolders = await readdir(routerPath)
  const r = path => resolve(routerPath, path)

  for (const path of routerChildFolders) {
    const Controller = require(r(path))
  }

  for (let [controller, config] of $route) {
    router[config.method](config.path, controller)
  }

  app
    .use(router.routes())
    .use(router.allowedMethods())
}

exports.Route = (path, method = 'get') => {
  return (target, name, value) => {
    $route.set(target[name], { target, path, method })
  }
}

const RouteMethods = {}

for (const method of METHODS) {
  RouteMethods[method] = method.toLowerCase()
}

exports.RouteMethods = RouteMethods
