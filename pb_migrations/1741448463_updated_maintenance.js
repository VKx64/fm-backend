/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3749043101")

  // remove field
  collection.fields.removeById("date1703761846")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3749043101")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date1703761846",
    "max": "",
    "min": "",
    "name": "maintenance_date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
