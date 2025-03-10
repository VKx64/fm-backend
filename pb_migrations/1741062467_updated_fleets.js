/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3288676456")

  // update collection data
  unmarshal({
    "createRule": "@collection.users.role = 'driver'",
    "deleteRule": "",
    "updateRule": "@collection.users.role = 'driver'"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3288676456")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "updateRule": null
  }, collection)

  return app.save(collection)
})
