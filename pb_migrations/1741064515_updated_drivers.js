/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1967373549")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number1146066909",
    "max": null,
    "min": null,
    "name": "phone",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1967373549")

  // remove field
  collection.fields.removeById("number1146066909")

  return app.save(collection)
})
