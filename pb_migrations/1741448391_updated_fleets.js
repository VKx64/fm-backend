/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3288676456")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number1455290388",
    "max": null,
    "min": null,
    "name": "mileage",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3288676456")

  // remove field
  collection.fields.removeById("number1455290388")

  return app.save(collection)
})
